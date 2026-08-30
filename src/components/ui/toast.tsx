"use client";

import { X, Info } from "lucide-react";

export function CustomToast({
  title,
  description,
  icon,
  close,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  close?: () => void;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-muted/95 backdrop-blur-xl border border-white/10 border-l-4 border-l-primary px-4 py-3 shadow-2xl shadow-black/30 min-w-[360px] max-w-sm w-full">
      <div className="flex-shrink-0 mt-0.5">
        {icon || <Info className="h-5 w-5 text-primary" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
      {close && (
        <button
          type="button"
          onClick={close}
          className="flex-shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
