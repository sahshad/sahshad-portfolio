import {
  Server,
  Code2,
  Network,
  Database,
  Container,
  TestTube,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

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
    icon: Server,
    color: "#f97316",
    title: "Backend Development",
    description: "Building scalable and maintainable backend systems with the right technology stack and architecture.",
    technologies: ["TypeScript", "Go", "Java", "Python"],
    featured: true,
  },
  {
    icon: Network,
    color: "#3b82f6",
    title: "API & Real-Time Systems",
    description: "Designing APIs and real-time communication systems for reliable and responsive applications.",
    technologies: ["REST", "gRPC", "WebSockets", "Socket.IO"],
    featured: true,
  },
  {
    icon: Code2,
    color: "#22c55e",
    title: "Full-Stack Development",
    description: "Building modern web applications across the backend and frontend with a focus on clean architecture.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    featured: true,
  },
  {
    icon: Database,
    color: "#a855f7",
    title: "Database Engineering",
    description: "Designing data models, writing efficient queries, and working with both SQL and NoSQL databases.",
    technologies: ["PostgreSQL", "MSSQL", "MongoDB", "Redis"],
    featured: true,
  },
  {
    icon: Server,
    color: "#06b6d4",
    title: "Microservices",
    description: "Developing distributed services with clear boundaries and efficient inter-service communication.",
    technologies: ["Go", "gRPC", "Microservices", "Docker"],
  },
  {
    icon: Container,
    color: "#ef4444",
    title: "DevOps & Deployment",
    description: "Containerizing applications and automating build, test, and deployment workflows.",
    technologies: ["Docker", "GitHub Actions", "CI/CD", "AWS"],
  },
  {
    icon: Code2,
    color: "#eab308",
    title: "Frontend Development",
    description: "Creating responsive and interactive interfaces with modern React-based technologies.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    icon: TestTube,
    color: "#14b8a6",
    title: "Testing & Code Quality",
    description: "Writing reliable tests and maintaining clean, consistent, and maintainable code.",
    technologies: ["Jest", "Vitest", "ESLint"],
  },
  {
    icon: GitBranch,
    color: "#f43f5e",
    title: "Git & CI/CD",
    description: "Managing source code, branching strategies, and automated development workflows.",
    technologies: ["Git", "GitHub", "GitHub Actions"],
  },
];