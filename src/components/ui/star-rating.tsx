"use client";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function StarRating({
  rating,
  maxRating = 5,
  className,
  size = "md",
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={cn("flex gap-0.5", className)}>
      {[...Array(maxRating)].map((_, i) => (
        <Icons.star
          key={i}
          className={cn(
            sizeClasses[size],
            i < rating
              ? "fill-[#38BDF8] text-[#38BDF8]"
              : "fill-[#E5E7EB] text-[#E5E7EB]"
          )}
        />
      ))}
    </div>
  );
}
