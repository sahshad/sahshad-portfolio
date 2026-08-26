import { Rocket, Code, Cpu, GitBranch, GraduationCap, Users, Globe, FolderGit, BadgeCheck, type LucideIcon } from "lucide-react";

export interface HeroStat {
  label: string;
  value: string;
  icon: LucideIcon;
  colorClass: string;
}

// Edit this list to change the stat cards under the hero section.
export const heroStats: HeroStat[] = [
  { label: "Projects", value: "15+", icon: Rocket, colorClass: "text-primary" },
  { label: "Coding Experience", value: "1+", icon: Code, colorClass: "text-green-500" },
  { label: "Technologies", value: "12+", icon: Cpu, colorClass: "text-blue-500" },
  { label: "GitHub Commits", value: "500+", icon: GitBranch, colorClass: "text-purple-500" },
  { label: "Learning Hours", value: "2000+", icon: GraduationCap, colorClass: "text-yellow-500" },
  { label: "Client Projects", value: "10+", icon: Users, colorClass: "text-cyan-500" },
  { label: "Countries", value: "5+", icon: Globe, colorClass: "text-indigo-500" },
  { label: "Open Source", value: "20+", icon: FolderGit, colorClass: "text-orange-500" },
  { label: "Certifications", value: "6+", icon: BadgeCheck, colorClass: "text-emerald-500" },
];
