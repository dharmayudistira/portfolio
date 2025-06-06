"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ImageComparisonProps {
  beforeAsset: string;
  afterAsset: string;
  sliderColor?: string;
}

const ImageComparison = ({
  beforeAsset,
  afterAsset,
  sliderColor = "#66D1FF",
}: ImageComparisonProps) => {
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
        <Image
          src={beforeAsset}
          width={1000}
          height={1000}
          alt="before"
          className="w-full h-full object-fill xl:object-contain xl:object-center rounded-lg"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full select-none"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <Image
          src={afterAsset}
          width={1000}
          height={1000}
          alt="after"
          className="w-full h-full object-fill xl:object-contain xl:object-center rounded-lg"
        />
      </div>

      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 w-1  cursor-ew-resize z-50 rounded-full select-none",
          `bg-[${sliderColor}]`
        )}
        style={{
          left: `calc(${sliderPosition}% - 1px)`,
        }}
      >
        <div
          className={cn(
            "absolute -left-1 top-[calc(50%-5px)] w-3 h-3 rounded-full",
            `bg-[${sliderColor}]`
          )}
        />
        <div
          className={cn(
            "absolute -left-1 top-[calc(50%-5px)] w-3 h-3 rounded-full animate-ping",
            `bg-[${sliderColor}]`
          )}
        />
      </div>
    </div>
  );
};

export default ImageComparison;
