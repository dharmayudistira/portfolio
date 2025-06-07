"use client";

import { cn } from "@/lib/utils";
import { OptimizedImage } from "./optimized-image";
import { useState } from "react";
import { RiExpandLeftRightFill } from "react-icons/ri";


interface ImageComparisonProps {
  beforeAsset: string;
  afterAsset: string;
}

const ImageComparison = ({ beforeAsset, afterAsset }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getClientX = (e: React.MouseEvent | React.TouchEvent): number => {
    if ("touches" in e) {
      return e.touches[0]?.clientX || 0;
    }
    return e.clientX;
  };

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = getClientX(e);
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full h-full relative touch-none"
      onMouseMove={handleMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <div className="w-full h-full relative select-none">
        <OptimizedImage
          src={beforeAsset}
          width={1000}
          height={1000}
          alt="before"
          className="w-full h-full object-cover xl:object-contain xl:object-center rounded-lg"
          useIntersection={true}
          showSkeleton={true}
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full select-none"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <OptimizedImage
          src={afterAsset}
          width={1000}
          height={1000}
          alt="after"
          className="w-full h-full object-cover xl:object-contain xl:object-center rounded-lg"
          useIntersection={true}
          showSkeleton={true}
        />
      </div>

      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 w-1  cursor-ew-resize z-50 rounded-full select-none bg-[#66D1FF]"
        )}
        style={{
          left: `calc(${sliderPosition}% - 1px)`,
        }}
      >
        <div
          className={cn(
            "absolute -left-[10px] top-[calc(50%-5px)] w-6 h-6 rounded-full bg-[#66D1FF] z-50 flex items-center justify-center"
          )}
        >
          <RiExpandLeftRightFill className="w-5 h-5 text-secondary" />
        </div>
        <div
          className={cn(
            "absolute -left-[10px] top-[calc(50%-5px)] w-6 h-6 rounded-full animate-ping bg-[#66D1FF]"
          )}
        />
      </div>
    </div>
  );
};

export default ImageComparison;
