import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return format(new Date(dateString), "MMM d, yyyy");
}
