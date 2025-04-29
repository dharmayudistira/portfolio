import { cn } from "@/lib/utils";

type GapSize = "sm" | "md" | "lg";
type GapPattern = "diagonal" | "dots" | "none";

interface GapProps {
  size?: GapSize;
  pattern?: GapPattern;
}

const Gap = ({ size = "md", pattern = "none" }: GapProps) => {
  const sizeMap: Record<GapSize, number> = {
    sm: 8,
    md: 16,
    lg: 24,
  };

  const patternMap: Record<GapPattern, string> = {
    diagonal: "diagonal-pattern",
    dots: "dots-pattern",
    none: "",
  };

  return (
    <div
      className={cn("border-t", `h-${sizeMap[size]}`, patternMap[pattern])}
    />
  );
};

export default Gap;
