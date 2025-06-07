import { useState, useEffect, useRef, useCallback } from "react";

interface UseIntersectionLoadingProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  priority?: "high" | "medium" | "low";
}

interface UseIntersectionLoadingReturn {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
  isVisible: boolean;
  shouldLoad: boolean;
  resetObserver: () => void;
}

export const useIntersectionLoading = ({
  threshold = 0.1,
  rootMargin = "50px",
  triggerOnce = true,
  priority = "medium",
}: UseIntersectionLoadingProps = {}): UseIntersectionLoadingReturn => {
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority === "high");
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const resetObserver = useCallback(() => {
    setIsInView(false);
    setIsVisible(false);
    if (priority !== "high") {
      setShouldLoad(false);
    }

    if (observerRef.current && ref.current) {
      observerRef.current.observe(ref.current);
    }
  }, [priority]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        setIsVisible(entry.intersectionRatio > 0);

        if (inView) {
          setShouldLoad(true);

          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current = observer;
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Handle priority-based loading
  useEffect(() => {
    if (priority === "high") {
      setShouldLoad(true);
    } else if (priority === "low") {
      // Only load when element is very close to viewport
      const delayTimer = setTimeout(() => {
        if (isInView) {
          setShouldLoad(true);
        }
      }, 100);

      return () => clearTimeout(delayTimer);
    }
  }, [isInView, priority]);

  return {
    ref,
    isInView,
    isVisible,
    shouldLoad,
    resetObserver,
  };
};
