"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-full px-4 py-2 cursor-pointer w-fit";

  const variantStyles = {
    primary: "bg-color text-white outline text-xs xl:text-sm hover:opacity-80",
    secondary: "bg-secondary text-white text-xs xl:text-sm hover:opacity-80",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
