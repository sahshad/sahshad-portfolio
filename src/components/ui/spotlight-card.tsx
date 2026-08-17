"use client"
import { useRef, useState, ReactNode, MouseEvent, FocusEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = (_e: FocusEvent<HTMLDivElement>) => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = (_e: FocusEvent<HTMLDivElement>) => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = (_e: MouseEvent<HTMLDivElement>) => {
    setOpacity(0.6);
  };

  const handleMouseLeave = (_e: MouseEvent<HTMLDivElement>) => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-black/10 bg-black/2 dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden ${className}`}
      tabIndex={0}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
