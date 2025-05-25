import { cn } from "@/lib/utils";

type GapSize = "sm" | "md" | "lg";
type GapPattern = "diagonal" | "dots" | "none";

interface GapProps {
  size?: GapSize;
  pattern?: GapPattern;
}

const Gap = ({ size = "md", pattern = "none" }: GapProps) => {
  const sizeMap: Record<GapSize, string> = {
    sm: "h-4 xl:h-8",
    md: "h-8 xl:h-16",
    lg: "h-12 xl:h-24",
  };

  const patternMap: Record<GapPattern, string> = {
    diagonal: "diagonal-pattern",
    dots: "dots-pattern",
    none: "",
  };

  return (
    <div
      className={cn(
        "border-b-across w-full",
        sizeMap[size],
        patternMap[pattern]
      )}
    />
  );
};

export default Gap;
