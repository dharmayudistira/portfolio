import { useState, useLayoutEffect, useRef } from "react";

export function useElementSize<T extends HTMLElement = HTMLElement>(): [
  React.RefObject<T | null>,
  { width: number; height: number }
] {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    function updateSize() {
      if (!element) return;
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    }

    updateSize();

    const resizeObserver = new window.ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [ref, size];
}
