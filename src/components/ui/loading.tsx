"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ImageSkeletonProps {
  className?: string;
  width?: number;
  height?: number;
}

interface VideoSkeletonProps {
  className?: string;
}

interface BlurPlaceholderProps {
  src: string;
  className?: string;
}

export const ImageSkeleton = ({
  className,
  width,
  height,
}: ImageSkeletonProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary rounded-lg animate-pulse",
        className
      )}
      style={{
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </div>
  );
};

export const VideoSkeleton = ({ className }: VideoSkeletonProps) => {
  return (
    <div
      className={cn(
        "relative bg-secondary rounded-lg overflow-hidden animate-pulse",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
        </motion.div>
      </div>
    </div>
  );
};

export const BlurPlaceholder = ({ src, className }: BlurPlaceholderProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};
