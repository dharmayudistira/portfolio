import { useState, useEffect, useCallback } from "react";

const BREAKPOINTS = {
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
} as const;

type ScreenSize = keyof typeof BREAKPOINTS | "2xl" | "";

const getScreenSize = (width: number): ScreenSize => {
  if (width < BREAKPOINTS.xs) return "xs";
  if (width < BREAKPOINTS.sm) return "sm";
  if (width < BREAKPOINTS.md) return "md";
  if (width < BREAKPOINTS.lg) return "lg";
  if (width < BREAKPOINTS.xl) return "xl";
  return "2xl";
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
