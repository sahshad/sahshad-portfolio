"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { Menu, X, Home, User, FolderGit, Mail, Sun, Moon, SunMoon } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useScrollSpy, SECTIONS } from "@/lib/hooks/use-scroll-spy";
import Dock from "@/components/ui/Dock";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const active = useScrollSpy();

  const navItems = SECTIONS.map((section) => ({
    href: section.href,
    label: section.id.charAt(0).toUpperCase() + section.id.slice(1),
    id: section.id,
  }));

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeIcon = !mounted ? (
    <SunMoon size={18} />
  ) : theme === "dark" ? (
    <Moon size={18} />
  ) : (
    <Sun size={18} />
  );

  const dockItems = [
    { icon: <Home size={18} />, label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { icon: <User size={18} />, label: "About", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <FolderGit size={18} />, label: "Projects", onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <Mail size={18} />, label: "Contact", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: themeIcon, label: "Theme", onClick: () => setTheme(theme === "dark" ? "light" : "dark") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
        isScrolled
          ? "bg-background/40 backdrop-blur-xl shadow-md border-b border-border"
          : "bg-background/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden rounded-full hover:bg-white/10 dark:hover:bg-white/5 relative"
            >
              <Menu
                className={`absolute w-5 h-5 transition-all duration-300 transform ${
                  isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute w-5 h-5 transition-all duration-300 transform ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </Button>

            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-xl font-semibold text-primary transition-transform hover:scale-105"
            >
              Sahshad
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  active === item.id ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-16 left-0 transition-all duration-300 ease-in-out z-40 h-[calc(100vh-4rem)] ${
          isOpen ? "w-55 opacity-100" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="h-full w-55 border-r border-border bg-background/50 backdrop-blur-sm shadow-md py-4 px-4 space-y-2 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block px-4 py-2 text-sm font-medium rounded-md transition-all relative group ${
                active === item.id
                  ? "text-primary bg-primary/2 border-l-4 border-primary pl-3"
                  : "text-foreground hover:bg-white/20 dark:hover:bg-black/20"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-0 rounded-md blur-sm opacity-10 bg-primary -z-10" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>

      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-2 md:hidden pointer-events-none">
        <div className="pointer-events-auto">
          <Dock items={dockItems} />
        </div>
      </div>
    </>
  );
}