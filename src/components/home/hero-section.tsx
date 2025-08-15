"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Download, GitBranch, GraduationCap, Mail, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-200">
          <p className="text-sm uppercase font-medium tracking-wide text-accent">Welcome to my portfolio</p>

          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text animate-gradient">
              Muhammed Sahshad
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-muted-foreground font-semibold">
            Full-Stack Developer & UI/UX Designer
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I build fast, modern, and accessible websites using React, Next.js, and TypeScript. Focused on clean code &
            great design.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="hover:bg-black/5 group rounded-full bg-black/4 dark:bg-white/7 backdrop-blur-3xl border border-white/10 text-primary hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="hover:bg-black/5 group rounded-full bg-black/4 dark:bg-white/7 backdrop-blur-3xl border border-white/10 text-primary hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Get In Touch
              </Link>
            </Button>

            <Button
              size="lg"
              className="hover:bg-black/5 group rounded-full bg-black/4 dark:bg-white/7 backdrop-blur-3xl border border-white/10 text-primary hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-400">
          <div className="relative mx-auto w-72 sm:w-96 aspect-square rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 p-4 backdrop-blur-md group hover:shadow-2xl transition-all duration-500">
            <Image
              src="/developer-light.jpg"
              alt="Muhammed Sahshad"
              fill
              priority
              className="object-cover p-4 rounded-4xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                label: "Projects Completed",
                value: "15+",
                icon: <Rocket className="h-6 w-6 text-primary" />,
              },
              {
                label: "Years of Coding Experience",
                value: "1+",
                icon: <Code className="h-6 w-6 text-green-500" />,
              },
              {
                label: "Technologies Mastered",
                value: "12+",
                icon: <Cpu className="h-6 w-6 text-blue-500" />,
              },
              {
                label: "GitHub Contributions",
                value: "500+",
                icon: <GitBranch className="h-6 w-6 text-purple-500" />,
              },
              {
                label: "Hours Spent Learning",
                value: "2000+",
                icon: <GraduationCap className="h-6 w-6 text-yellow-500" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-black/2 dark:bg-white/7 backdrop-blur-3xl border border-white/10 dark:border-white/10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
