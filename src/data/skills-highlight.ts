import { Cloud, Database, Gauge, GitBranch, Layout, Palette, ShieldCheck, Code, type LucideIcon } from "lucide-react";

export interface SkillHighlight {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export const skills: SkillHighlight[] = [
  {
    icon: Code,
    color: "#f97316",
    title: "MERN Stack Development",
    description: "Building full-stack applications with MongoDB, Express, React, and Node.js.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
  {
    icon: Layout,
    color: "#3b82f6",
    title: "Frontend Development",
    description: "Creating responsive and interactive UIs using React, Next.js and Tailwind CSS.",
    technologies: ["React", "Next.js", "Tailwind", "Redux.js", "ShadCN"],
    featured: true,
  },
  {
    icon: Database,
    color: "#22c55e",
    title: "Backend & API Development",
    description: "Designing scalable REST APIs with repository architecture and TypeScript.",
    technologies: ["Node.js", "Express", "TypeScript", "REST API", "Nestjs"],
    featured: true,
  },
  {
    icon: Cloud,
    color: "#a855f7",
    title: "Cloud & Deployment",
    description: "Hosting and managing projects with AWS EC2, Docker, and CI/CD pipelines.",
    technologies: ["AWS EC2", "Docker", "GitHub Actions"],
  },
  {
    icon: Database,
    color: "#06b6d4",
    title: "Database Design & Optimization",
    description: "Modeling schemas, writing efficient queries, and indexing for performance.",
    technologies: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Palette,
    color: "#ef4444",
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces with Figma, design systems, and prototypes.",
    technologies: ["Figma", "Wireframes", "Design Systems"],
  },
  {
    icon: ShieldCheck,
    color: "#eab308",
    title: "Testing & Code Quality",
    description: "Writing unit and integration tests to ship reliable, maintainable code.",
    technologies: ["Jest", "Vitest", "ESLint"],
  },
  {
    icon: GitBranch,
    color: "#14b8a6",
    title: "Git & Collaboration",
    description: "Managing branches, reviews, and releases with clean workflows.",
    technologies: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    icon: Gauge,
    color: "#f43f5e",
    title: "Performance Optimization",
    description: "Auditing and improving load times, bundles, and Core Web Vitals.",
    technologies: ["Lighthouse", "Lazy Loading", "Caching"],
  },
];
