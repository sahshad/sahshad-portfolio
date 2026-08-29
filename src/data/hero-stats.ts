import { Rocket, Code, LucideIcon, Layers, Database, Network, Cloud, Sparkles } from "lucide-react";

export interface HeroStat {
  label: string;
  value: string;
  icon: LucideIcon;
  colorClass: string;
}

export const heroStats: HeroStat[] = [
  { label: "Years Coding", value: "2+", icon: Code, colorClass: "text-green-500" },
  { label: "Projects", value: "10+", icon: Rocket, colorClass: "text-primary" },
  { label: "Features", value: "50+", icon: Sparkles, colorClass: "text-yellow-500" },
  { label: "Languages", value: "5+", icon: Code, colorClass: "text-green-500" },
  { label: "Frameworks", value: "15+", icon: Layers, colorClass: "text-blue-500" },
  { label: "Databases", value: "4+", icon: Database, colorClass: "text-purple-500" },
  { label: "API & Protocols", value: "3+", icon: Network, colorClass: "text-cyan-500" },
  { label: "Cloud & DevOps", value: "4+", icon: Cloud, colorClass: "text-indigo-500" },
];
