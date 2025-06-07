"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { VideoSkeleton } from "./loading";

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  preload?: "auto" | "metadata" | "none";
  onLoad?: () => void;
  onError?: () => void;
  showSkeleton?: boolean;
  useIntersection?: boolean;
}

export const OptimizedVideo = ({
  src,
  className,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = false,
  poster,
  preload = "metadata",
  onLoad,
  onError,
  showSkeleton = true,
  useIntersection = false,
  ...props
}: OptimizedVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!useIntersection);
  const [loadProgress, setLoadProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!useIntersection || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [useIntersection]);

  const handleLoadStart = () => {
    setIsLoading(true);
    setLoadProgress(0);
  };

  const handleProgress = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const duration = video.duration;
      const progress = (bufferedEnd / duration) * 100;
      setLoadProgress(progress);
    }
  };

  const handleCanPlay = () => {
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
        <p className="text-secondary-light text-sm">Failed to load video</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {!isInView && showSkeleton && (
        <VideoSkeleton className="absolute inset-0" />
      )}

      {isInView && (
        <>
          {isLoading && showSkeleton && (
            <div className="absolute inset-0 z-10">
              <VideoSkeleton className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-secondary h-1">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <video
              ref={videoRef}
              src={src}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls}
              poster={poster}
              preload={preload}
              onLoadStart={handleLoadStart}
              onProgress={handleProgress}
              onCanPlay={handleCanPlay}
              onError={handleError}
              className="w-full h-full object-cover"
              {...props}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};
