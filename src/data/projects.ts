import {
  Code2,
  Folder,
  ShoppingBag,
  Terminal,
  Container,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

// Edit this list to change what shows up in the Projects section.
export const projects: Project[] = [
  {
    icon: Code2,
    color: "#f97316",
    title: "Task Manager App",
    description:
      "A full-stack task management application with user authentication, drag-and-drop boards, and real-time updates.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/sahshad",
    live: "#",
  },
  {
    icon: ShoppingBag,
    color: "#3b82f6",
    title: "E-Commerce Store",
    description:
      "A modern online store with product catalog, cart, payment integration, and an admin dashboard built with Next.js.",
    technologies: ["Next.js", "Redux", "Stripe", "Tailwind", "TypeScript"],
    github: "https://github.com/sahshad",
    live: "#",
  },
  {
    icon: Terminal,
    color: "#22c55e",
    title: "REST API Service",
    description:
      "A scalable REST API with repository architecture, JWT authentication, rate limiting, and comprehensive tests.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Jest"],
    github: "https://github.com/sahshad",
    live: "#",
  },
  {
    icon: Container,
    color: "#a855f7",
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD pipeline that builds, tests, and deploys containers to AWS EC2 with zero-downtime rollouts.",
    technologies: ["Docker", "GitHub Actions", "AWS EC2", "Nginx"],
    github: "https://github.com/sahshad",
    live: "#",
  },
  {
    icon: Folder,
    color: "#06b6d4",
    title: "Portfolio Website",
    description:
      "A personal portfolio with animated UI components, dark mode, and a fully responsive layout built in Next.js.",
    technologies: ["Next.js", "Tailwind", "Motion", "ShadCN"],
    github: "https://github.com/sahshad",
    live: "/",
  },
  {
    icon: Code2,
    color: "#ef4444",
    title: "Chat Application",
    description: "A real-time chat application with rooms, direct messages, typing indicators, and message history.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/sahshad",
    live: "#",
  },
];
