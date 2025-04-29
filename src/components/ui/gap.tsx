import { cn } from "@/lib/utils";

const Gap = ({ className }: { className?: string }) => {
  return <div className={cn("border-t h-8", className)} />;
};

export default Gap;
