import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans tracking-wide uppercase transition-all duration-300 rounded-md",
        variant === "primary" &&
          "bg-forest text-cream hover:bg-pine",
        variant === "secondary" &&
          "bg-bark text-cream hover:bg-bark/90",
        variant === "outline" &&
          "border border-forest text-forest hover:bg-forest hover:text-cream",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
