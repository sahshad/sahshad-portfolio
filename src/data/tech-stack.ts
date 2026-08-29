import {
  Braces,
  FileJson,
  Atom,
  Hexagon,
  Boxes,
  Route,
  Bird,
  Network,
  Database,
  Zap,
  Globe,
  Workflow,
  Palette,
  CodeXml,
  Paintbrush,
  Server,
  Terminal,
  Container,
  Cloud,
  CloudCog,
  GitBranch,
  GitPullRequest,
  Coffee,
  SquareCode,
  FileCode,
  type LucideIcon,
} from "lucide-react";

export interface TechStackItem {
  icon: LucideIcon;
  name: string;
}

export const techStack: TechStackItem[] = [
  // Languages
  { icon: Braces, name: "Go" },
  { icon: FileJson, name: "TypeScript" },
  { icon: FileJson, name: "JavaScript" },
  { icon: Coffee, name: "Java" },
  { icon: SquareCode, name: "Python" },
  { icon: FileCode, name: "C" },

  // Frontend
  { icon: Atom, name: "React" },
  { icon: Hexagon, name: "Next.js" },
  { icon: Workflow, name: "Redux" },
  { icon: Palette, name: "Tailwind" },
  { icon: Palette, name: "shadcn/ui" },
  { icon: Globe, name: "AJAX" },
  { icon: CodeXml, name: "HTML" },
  { icon: Paintbrush, name: "CSS" },

  // Backend
  { icon: Boxes, name: "Node.js" },
  { icon: Route, name: "Express" },
  { icon: Bird, name: "NestJS" },
  { icon: Network, name: "gRPC" },
  { icon: Network, name: "WebSockets" },

  // Databases & Caching
  { icon: Database, name: "PostgreSQL" },
  { icon: Database, name: "MSSQL" },
  { icon: Database, name: "MongoDB" },
  { icon: Zap, name: "Redis" },

  // Architecture
  { icon: Terminal, name: "Microservices" },

  // DevOps & Infrastructure
  { icon: Container, name: "Docker" },
  { icon: Cloud, name: "AWS" },
  { icon: CloudCog, name: "Linux" },
  { icon: GitPullRequest, name: "CI/CD" },

  // Version Control
  { icon: GitBranch, name: "Git" },
];