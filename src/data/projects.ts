import {
  GraduationCap,
  ShoppingBag,
  Terminal,
  Network,
  Link,
  Film,
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

export const projects: Project[] = [
  {
    icon: Network,
    color: "#a855f7",
    title: "Cosmix",
    description:
      "A microservices-based social media platform with a Next.js frontend and distributed backend services communicating through gRPC.",
    technologies: ["Go", "TypeScript", "Next.js", "gRPC", "Microservices"],
    github: "https://github.com/sahshad/cosmix-api",
    live: "#",
  },
  {
    icon: GraduationCap,
    color: "#f97316",
    title: "Tutoriam",
    description:
      "A full-stack e-learning platform with course management, user authentication, interactive learning features, and real-time communication.",
    technologies: ["React", "TypeScript", "WebSocket", "Docker", "CI/CD"],
    github: "https://github.com/sahshad/tutoriam",
    live: "#",
  },
  {
    icon: ShoppingBag,
    color: "#3b82f6",
    title: "Shoezie",
    description:
      "A server-side rendered e-commerce platform for shoes with product management, shopping cart, AJAX interactions, and API integrations.",
    technologies: ["Node.js", "JavaScript", "EJS", "AJAX", "REST API"],
    github: "https://github.com/sahshad/shoezie",
    live: "#",
  },

  {
    icon: Terminal,
    color: "#22c55e",
    title: "APIX",
    description:
      "A command-line HTTP client built in Go for making and managing HTTP requests through an intuitive CLI interface.",
    technologies: ["Go", "Cobra", "HTTP"],
    github: "https://github.com/sahshad/apix",
    live: "#",
  },
  {
    icon: Link,
    color: "#06b6d4",
    title: "SnapURL",
    description:
      "A URL shortening application that generates compact, shareable links from long URLs with a simple and efficient interface.",
    technologies: ["TypeScript", "REST API", "Database"],
    github: "https://github.com/sahshad/snapurl",
    live: "#",
  },
  {
    icon: Film,
    color: "#ef4444",
    title: "FilmSpot",
    description:
      "A movie discovery application that retrieves and displays movie information using the OMDb API.",
    technologies: ["React", "OMDb API", "REST API"],
    github: "https://github.com/sahshad/filmspot",
    live: "#",
  },
];