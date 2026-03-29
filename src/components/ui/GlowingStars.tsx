"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const GlowingStarsCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-8",
        className
      )}
    >
      {/* Glowing stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/60 animate-pulse-glow"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
