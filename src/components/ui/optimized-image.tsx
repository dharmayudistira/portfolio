"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ImageSkeleton, BlurPlaceholder } from "./loading";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  quality?: number;
  sizes?: string;
  fill?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  showSkeleton?: boolean;
  useIntersection?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
  quality = 75,
  sizes,
  fill = false,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  showSkeleton = true,
  useIntersection = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!useIntersection);
  const imgRef = useRef<HTMLDivElement>(null);

  const imageProps = priority ? { priority: true } : { loading };

  useEffect(() => {
    if (!useIntersection || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [useIntersection]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
    onError?.();
  };

  if (isError) {
    return (
      <div
        className={cn(
          "bg-secondary rounded-lg flex items-center justify-center",
          className
        )}
      >
        <p className="text-secondary-light text-sm">Failed to load image</p>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {!isInView && showSkeleton && (
        <ImageSkeleton
          className="absolute inset-0"
          width={width}
          height={height}
        />
      )}

      {isInView && (
        <>
          {isLoading && showSkeleton && (
            <div className="absolute inset-0 z-10">
              {placeholder === "blur" && blurDataURL ? (
                <BlurPlaceholder src={blurDataURL} className="w-full h-full" />
              ) : (
                <ImageSkeleton
                  className="w-full h-full"
                  width={width}
                  height={height}
                />
              )}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              width={fill ? undefined : width}
              height={fill ? undefined : height}
              fill={fill}
              {...imageProps}
              quality={quality}
              sizes={sizes}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              onLoad={handleLoad}
              onError={handleError}
              className={cn("transition-opacity duration-300", className)}
              {...props}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};
