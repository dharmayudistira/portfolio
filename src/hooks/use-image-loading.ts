import { useState, useEffect, useCallback } from "react";

interface UseImageLoadingProps {
  src: string;
  preload?: boolean;
}

interface UseImageLoadingReturn {
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  progress: number;
  preloadImage: () => void;
  resetState: () => void;
}

export const useImageLoading = ({
  src,
  preload = false,
}: UseImageLoadingProps): UseImageLoadingReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(0);

  const resetState = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(false);
    setIsError(false);
    setProgress(0);
  }, []);

  const preloadImage = useCallback(() => {
    if (isLoaded || isError) return;

    setIsLoading(true);
    setProgress(0);

    const img = new Image();

    img.onload = () => {
      setIsLoading(false);
      setIsLoaded(true);
      setProgress(100);
    };

    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
      setProgress(0);
    };

    img.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete);
      }
    };

    img.src = src;
  }, [src, isLoaded, isError]);

  useEffect(() => {
    if (preload) {
      preloadImage();
    }
  }, [preload, preloadImage]);

  useEffect(() => {
    resetState();
  }, [src, resetState]);

  return {
    isLoading,
    isLoaded,
    isError,
    progress,
    preloadImage,
    resetState,
  };
};
