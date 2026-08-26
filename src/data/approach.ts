import { Search, PenTool, Hammer, Bug, Rocket, type LucideIcon } from "lucide-react";

export interface ApproachStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Edit this list to change the "My Approach" terminal steps in the About section.
export const approach: ApproachStep[] = [
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
