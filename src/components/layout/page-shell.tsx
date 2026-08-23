"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/layout/footer";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";

export function PageShell({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const content = (
    <>
      <Navbar />
      <div className="pb-24 md:pb-0">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );

  return (
    <div className="min-h-screen">
      {resolvedTheme === "dark" ? <StarsBackground>{content}</StarsBackground> : content}
    </div>
  );
}