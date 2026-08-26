import { GraduationCap, Briefcase, Rocket, Code2, type LucideIcon } from "lucide-react";

export interface TimelineItem {
  icon: LucideIcon;
  title: string;
  org: string;
  period: string;
  description: string;
}

// Edit this list to change the "My Journey" timeline in the About section.
export const timeline: TimelineItem[] = [
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
