import { useState, useEffect, useCallback } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

type ScreenSize = keyof typeof BREAKPOINTS | "2xl" | "";

const getScreenSize = (width: number): ScreenSize => {
  if (width >= BREAKPOINTS.xl) return "2xl";
  if (width >= BREAKPOINTS.lg) return "xl";
  if (width >= BREAKPOINTS.md) return "lg";
  if (width >= BREAKPOINTS.sm) return "md";
  return "sm";
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("");

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSize(window.innerWidth));
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return screenSize;
};
