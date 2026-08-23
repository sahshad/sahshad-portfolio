import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-4 mb-16", className)}>
      <p className="text-accent font-medium tracking-wide uppercase text-sm">{label}</p>
      <h2 className="font-serif font-black text-3xl sm:text-4xl text-foreground">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}