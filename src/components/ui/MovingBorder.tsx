"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({
  children,
  className,
  containerClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none",
        containerClassName
      )}
      {...otherProps}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#06b6d4_50%,#8b5cf6_100%)]" />
      {/* Inner content */}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-3xl gap-2 transition-all hover:bg-muted/80",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
};
