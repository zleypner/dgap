import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl sm:rounded-2xl border border-[#38BDF8]/30 bg-white p-4 sm:p-6 shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  children: ReactNode;
  className?: string;
}

export function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        "mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("mb-2 text-lg font-semibold text-[#1E3A5F]", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("leading-relaxed text-[#1E3A5F]/70", className)}>
      {children}
    </p>
  );
}
