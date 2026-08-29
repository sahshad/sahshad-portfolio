import { Code2, GraduationCap, Rocket, Briefcase, type LucideIcon } from "lucide-react";

export interface TimelineItem {
  icon: LucideIcon;
  title: string;
  org: string;
  period: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    icon: Code2,
    title: "Tech Journey",
    org: "Self Learning",
    period: "2023",
    description: "Built a strong foundation in programming and software engineering through self-learning, hands-on development, problem solving, and continuous exploration.",
  },
  {
    icon: GraduationCap,
    title: "Development Program",
    org: "Brototype",
    period: "2024 - 2025",
    description: "Completed an intensive software development program covering full-stack development, backend engineering, databases, and modern practices.",
  },
  {
    icon: Rocket,
    title: "Applied Engineering",
    org: "Personal Work",
    period: "2024 - Present",
    description: "Applied engineering skills by designing application architecture, developing backend systems, integrating APIs, and building responsive interfaces.",
  },
  {
    icon: Briefcase,
    title: "Software Engineer",
    org: "Jethur",
    period: "2025 - Present",
    description: "Developing backend systems and enterprise applications, building reliable APIs and scalable solutions with a focus on performance and maintainability.",
  },
];