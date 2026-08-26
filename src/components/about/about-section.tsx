"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useTheme } from "next-themes";
import { Reveal } from "@/components/ui/reveal";
import { BorderGlow } from "@/components/ui/border-glow";
import {
  Atom,
  Bird,
  Boxes,
  Braces,
  Briefcase,
  Bug,
  Cloud,
  CloudCog,
  Code2,
  CodeXml,
  Coffee,
  Container,
  Database,
  FileCode,
  FileCode2,
  FileJson,
  GitBranch,
  GitPullRequest,
  GraduationCap,
  Hammer,
  Hexagon,
  Mail,
  MapPin,
  Paintbrush,
  Palette,
  PenTool,
  Rocket,
  Route,
  Search,
  Server,
  SquareCode,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Computer Science Degree",
    org: "University",
    period: "2022 - 2025",
    description: "Graduated with a focus on software engineering and web technologies.",
  },
  {
    icon: Briefcase,
    title: "Freelance Web Developer",
    org: "Self-employed",
    period: "2023 - Present",
    description: "Designing and shipping full-stack applications for clients around the world.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Certification",
    org: "Brocamp",
    period: "2025",
    description: "Intensive program covering the MERN stack and modern DevOps practices.",
  },
  {
    icon: Code2,
    title: "Open Source Contributor",
    org: "GitHub",
    period: "2024 - Present",
    description: "Contributing to open-source projects and maintaining my own libraries.",
  },
];

const skills = [
  { icon: Atom, name: "React" },
  { icon: Hexagon, name: "Next.js" },
  { icon: Boxes, name: "Node.js" },
  { icon: FileCode2, name: "TypeScript" },
  { icon: Database, name: "MongoDB" },
  { icon: Palette, name: "Tailwind" },
  { icon: Container, name: "Docker" },
  { icon: Cloud, name: "AWS" },
  { icon: Braces, name: "Go" },
  { icon: Zap, name: "Redis" },
  { icon: Server, name: "Postgres" },
  { icon: Coffee, name: "Java" },
  { icon: FileJson, name: "JavaScript" },
  { icon: CodeXml, name: "HTML" },
  { icon: Paintbrush, name: "CSS" },
  { icon: Route, name: "Express" },
  { icon: Bird, name: "NestJS" },
  { icon: SquareCode, name: "Python" },
  { icon: FileCode, name: "C" },
  { icon: Terminal, name: "Microservices" },
  { icon: GitBranch, name: "Git" },
  { icon: GitPullRequest, name: "CI/CD" },
  { icon: Workflow, name: "Redux" },
  { icon: CloudCog, name: "Linux" },
];

const approach = [
  {
    step: "01",
    icon: Search,
    title: "Understand",
    description: "Start with the problem, the requirements, and the people using the product.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design",
    description: "Turn ideas into simple, intuitive interfaces before jumping into implementation.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Build",
    description: "Write clean, reusable code, iterating quickly until the product feels right.",
  },
  {
    step: "04",
    icon: Bug,
    title: "Test",
    description: "Verify everything works, catch edge cases, and polish performance end to end.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Ship",
    description: "Deploy, monitor, and keep supporting the product in production.",
  },
];

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

function Spinner({ className }: { className?: string }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % SPINNER_FRAMES.length);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return <span className={className}>{SPINNER_FRAMES[frame]}</span>;
}

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const current = hovered ?? active;

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (hovered === null) {
        setActive((prev) => (prev + 1) % approach.length);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section id="about" className="relative pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 1. About Me */}
        <Reveal>
          <div className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-2">
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4 text-center sm:text-left">About Me</p>
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl">
                I turn ideas into polished digital experiences.
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm a Full-Stack Developer from Kerala, India, focused on building modern web applications from idea
                  to production. I work across the frontend, backend, and deployment — turning complex requirements into
                  fast, reliable, and intuitive products.
                </p>
                <p>
                  My core stack is React, Next.js, Node.js, TypeScript, and MongoDB. But good software isn't just about
                  the technology behind it. I care about thoughtful design, responsive interfaces, performance, and the
                  small details that make a product genuinely enjoyable to use.
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-6 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-6px_8px_-6px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.18)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-6px_8px_-6px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.4),0_0_28px_rgba(255,255,255,0.1)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={!mounted ? "/logo_light.svg" : theme === "dark" ? "/logo_dark.svg" : "/logo_light.svg"}
                    alt="Sahshad"
                    className="h-5 w-auto"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Muhammed Sahshad</div>
                  <div className="text-xs text-muted-foreground">Full-Stack Developer</div>
                </div>
              </div>
              <div className="mt-6 border-t border-border/60 pt-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wide">
                    <MapPin className="h-4 w-4 text-primary" />
                    Location
                  </span>
                  <span className="font-medium text-foreground">Kerala, India</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wide">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </span>
                  <span className="font-medium text-foreground">sahshad.dev@gmail.com</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wide">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Status
                  </span>
                  <span className="font-medium text-foreground">Open for freelance</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 + 4. My Journey | Skills & Tools + A Few Things */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <Reveal>
            <div>
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-6 text-center sm:text-left">My Journey</p>
              <div ref={timelineRef} className="relative">
                <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-border/60" />
                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-primary via-accent to-primary"
                />

                <div className="space-y-10">
                  {timeline.map((item) => (
                    <div key={item.title} className="relative pl-12 sm:pl-16">
                      <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-background flex items-center justify-center">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <BorderGlow
                        borderRadius={16}
                        glowRadius={28}
                      >
                        <div className="p-5 sm:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs text-muted-foreground font-medium tracking-wide">{item.period}</span>
                            <span className="text-xs text-accent font-medium uppercase tracking-wide">{item.org}</span>
                          </div>
                          <h4 className="font-semibold text-[15px] text-foreground">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </BorderGlow>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:space-y-8">
            <Reveal delay={100}>
              <div>
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-6 text-center sm:text-left">
                  My Approach
                </p>
                {/* <p className="text-xs text-muted-foreground mb-6 text-center sm:text-left">
                  How I turn ideas into reliable products.
                </p> */}

                <div className="relative rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/25 ring-1 ring-black/5 overflow-hidden font-mono">
                  {/* CRT scanline texture */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
                    }}
                  />

                  {/* window chrome */}
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-[11px] text-white/40">approach.sh — zsh</span>
                  </div>

                  <div
                    className="p-3 sm:p-4 lg:p-5"
                    onMouseLeave={() => {
                      setActive(hoverRef.current ?? 0);
                      setHovered(null);
                    }}
                  >
                    <div className="mb-2 lg:mb-3 flex items-center gap-2 text-[12px]">
                      <span className="text-white/40">➜</span>
                      <span className="text-white/50">~/sahshad</span>
                      <span className="text-white/80">./approach.sh</span>
                    </div>

                    <motion.div
                      className="space-y-0 lg:space-y-0.5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
                    >
                      {approach.map((item, i) => {
                        const isDone = i < current;
                        const isCurrent = current === i;
                        return (
                          <motion.button
                            key={item.step}
                            variants={{
                              hidden: { opacity: 0, x: -8 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
                            }}
                            onMouseEnter={() => {
                              hoverRef.current = i;
                              setHovered(i);
                            }}
                            onFocus={() => {
                              hoverRef.current = i;
                              setHovered(i);
                            }}
                            onBlur={() => setHovered(null)}
                            onClick={() => setHovered(i)}
                            aria-label={item.title}
                            className={`flex w-full items-center gap-2.5 rounded px-2 py-1 lg:py-1.5 text-left transition-colors duration-200 ${
                              isCurrent ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                            }`}
                          >
                            <span
                              className={`w-3.5 shrink-0 text-[11px] ${
                                isDone ? "text-white/50" : isCurrent ? "text-white" : "text-white/20"
                              }`}
                            >
                              {isDone ? "✓" : isCurrent ? <Spinner /> : "·"}
                            </span>
                            <span className="shrink-0 text-[10px] text-white/25">{item.step}</span>
                            <item.icon
                              className={`h-3.5 w-3.5 shrink-0 ${isCurrent ? "text-white" : "text-white/30"}`}
                            />
                            <span
                              className={`text-[13px] ${
                                isCurrent
                                  ? "text-white font-medium"
                                  : isDone
                                    ? "text-white/55"
                                    : "text-white/30"
                              }`}
                            >
                              {item.title.toLowerCase()}
                            </span>
                            {isCurrent && (
                              <span
                                className="ml-auto h-3.5 w-[7px] animate-terminal-blink bg-white/80"
                                aria-hidden
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </motion.div>

                    <div className="mt-2 lg:mt-3 border-t border-white/10 pt-2 lg:pt-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={current}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] leading-relaxed"
                        >
                          <span className="text-white/35">
                            $ cat {approach[current].step}_{approach[current].title.toLowerCase()}.md
                          </span>
                          <p className="mt-1 text-white/65">{approach[current].description}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="mt-2 lg:mt-3 flex items-center gap-2 text-[10px] text-white/35">
                      <span>
                        [{"█".repeat(current + 1)}
                        {"░".repeat(approach.length - current - 1)}]
                      </span>
                      <span>
                        {String(current + 1).padStart(2, "0")}/{String(approach.length).padStart(2, "0")}
                      </span>
                      <span className="ml-auto h-3 w-[6px] animate-terminal-blink bg-white/50" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl mt-10">
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-6 text-center sm:text-left">TECHNOLOGY I WORK WITH</p>
                <div className="grid grid-cols-4 py-3 sm:grid-cols-6 gap-2 max-h-[270px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-black/10 dark:border-white/15 bg-card p-4 flex flex-col items-center gap-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),inset_0_-10px_14px_-10px_rgba(0,0,0,0.16)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),inset_0_-10px_14px_-10px_rgba(0,0,0,0.85)] hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-10px_14px_-10px_rgba(0,0,0,0.2)] dark:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-10px_14px_-10px_rgba(0,0,0,0.95)] transition-all duration-300"
                    >
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="text-xs font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
