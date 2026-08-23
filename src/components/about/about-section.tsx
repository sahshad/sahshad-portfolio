"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
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
  FlaskConical,
  Gauge,
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
  RefreshCw,
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
    icon: FlaskConical,
    title: "Prototype",
    description: "Build a quick, lightweight version to validate the core concept early.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Iterate",
    description: "Test, refine, and keep improving until the product feels right.",
  },
  {
    step: "05",
    icon: Hammer,
    title: "Build",
    description: "Write clean, reusable code with performance and maintainability in mind.",
  },
  {
    step: "06",
    icon: Bug,
    title: "Test",
    description: "Verify everything works, catch edge cases, and make it dependable.",
  },
  {
    step: "07",
    icon: Gauge,
    title: "Optimize",
    description: "Profile and polish performance, accessibility, and the small details.",
  },
  {
    step: "08",
    icon: Rocket,
    title: "Ship",
    description: "Deploy, monitor, and keep supporting the product in production.",
  },
];

const APPROACH_NODES = [
  { x: 50, y: 12 },
  { x: 77, y: 23 },
  { x: 88, y: 50 },
  { x: 77, y: 77 },
  { x: 50, y: 88 },
  { x: 23, y: 77 },
  { x: 12, y: 50 },
  { x: 23, y: 23 },
];

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<number | null>(null);
  const lastCurrent = useRef(0);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const current = hovered ?? active;
  const tipStep = hovered === null ? current + 1 : current;
  const isWrapReset = current === 0 && lastCurrent.current === approach.length - 1;
  lastCurrent.current = current;

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
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">About Me</p>
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
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-black text-lg shrink-0">
                  MS
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
                  <span className="font-medium text-foreground">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 + 4. My Journey | Skills & Tools + A Few Things */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <Reveal>
            <div>
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-8">My Journey</p>
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
              <div className="relative overflow-hidden  border-border/60 ">
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-2 text-center sm:text-left">
                  My Approach
                </p>
                <p className="text-xs text-muted-foreground mb-6 text-center sm:text-left">
                  How I turn ideas into reliable products.
                </p>

                <div className="mb-2 h-10 text-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="text-[10px] tracking-[0.2em] text-primary font-bold">
                        {approach[current].step}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">{approach[current].title}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  className="relative aspect-square w-full max-w-[280px] mx-auto"
                  onMouseLeave={() => {
                    setActive(hoverRef.current ?? 0);
                    setHovered(null);
                  }}
                >
                  <svg className="absolute inset-[8%] w-[84%] h-[84%] -rotate-90" viewBox="0 0 100 100" aria-hidden>
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-border/40"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="url(#approach-gradient)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeDasharray="289"
                      initial={{ strokeDashoffset: 289 }}
                      animate={{
                        strokeDashoffset: 289 * (1 - tipStep / approach.length),
                      }}
                      transition={
                        hovered !== null
                          ? { duration: 0 }
                          : isWrapReset
                            ? { duration: 0.3 }
                            : { duration: 3.4, ease: "easeInOut" }
                      }
                    />
                    <defs>
                      <linearGradient id="approach-gradient">
                        <stop stopColor="var(--primary)" />
                        <stop offset="1" stopColor="var(--accent)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.span
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
                    />
                  </div>

                  {APPROACH_NODES.map((node, i) => {
                    const item = approach[i];
                    const isCurrent = current === i;
                    const isHovered = hovered === i;
                    return (
                      <button
                        key={item.step}
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
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        aria-label={item.title}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-10`}
                      >
                        <motion.span
                          animate={{ scale: isCurrent ? 1.15 : 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 22 }}
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 ${
                            isCurrent
                              ? "bg-primary text-primary-foreground shadow-[0_0_24px_var(--primary)]"
                              : "bg-background text-muted-foreground border border-border/60"
                          }`}
                        >
<item.icon className="h-4 w-4" />
                        </motion.span>
                        <AnimatePresence>
                          {isHovered && (
                            <motion.span
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-primary"
                            >
                              {item.title}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 h-6 text-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={current}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-muted-foreground leading-relaxed"
                    >
                      {approach[current].description}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground font-medium tracking-wide">
                    <span>PROCESS</span>
                    <span>
                      {String(current + 1).padStart(2, "0")} / {String(approach.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-2 h-px bg-border/50 overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      animate={{ width: `${((current + 1) / approach.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl">
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-6">TECHNOLOGY I WORK WITH</p>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 max-h-[220px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-black/10 dark:border-neutral-800 bg-black/2 dark:bg-white/2 p-4 flex flex-col items-center gap-2.5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
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
