"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "home", href: "/" },
  { id: "about", href: "/about" },
  { id: "projects", href: "/projects" },
  { id: "contact", href: "/contact" },
];

export function useScrollSpy() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = SECTIONS.find((s) => s.id === entry.target.id);
            if (match) setActive(match.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}