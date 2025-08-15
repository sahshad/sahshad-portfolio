"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 dark:bg-black/30 backdrop-blur-xl shadow-md border-b border-white/20 dark:border-white/10"
          : "bg-white/10 dark:bg-black/10 backdrop-blur-md"
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
              className="text-xl font-semibold text-primary transition-transform hover:scale-105 hidden md:block"
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : "w-0"
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
        <div className="h-full w-55 bg-white/50 dark:bg-black/30 backdrop-blur-sm border-r border-white/20 dark:border-white/10 shadow-md py-4 px-4 space-y-2 transition-all duration-300">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm font-medium rounded-md transition-all relative group ${
                pathname === item.href
                  ? "text-primary bg-primary/2 border-l-4 border-primary pl-3"
                  : "text-foreground hover:bg-white/20 dark:hover:bg-black/20"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute inset-0 rounded-md blur-sm opacity-10 bg-primary -z-10" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
