import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Cloud } from "lucide-react";
import SpotlightCard from "../ui/spotlight-card";
import { hexToRGBA } from "@/lib/helper/color";

export function SkillsHighlight() {
  const skills = [
    {
      icon: Code,
      color: "#f97316",
      title: "MERN Stack Development",
      description: "Building full-stack applications with MongoDB, Express, React, and Node.js.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      icon: Layout,
      color: "#3b82f6",
      title: "Frontend Development",
      description: "Creating responsive and interactive UIs using React, Next.js and Tailwind CSS",
      technologies: ["React", "Next.js", "Tailwind", "Redux.js", "ShadCN"],
    },
    {
      icon: Database,
      color: "#22c55e",
      title: "Backend & API Development",
      description: "Designing scalable REST APIs with repository architecture and TypeScript.",
      technologies: ["Node.js", "Express", "TypeScript", "REST API", "Nestjs"],
    },
    {
      icon: Cloud,
      color: "#a855f7",
      title: "Cloud & Deployment",
      description: "Hosting and managing projects with AWS EC2, Docker, and CI/CD pipelines.",
      technologies: ["AWS EC2", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">What I Do</p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={hexToRGBA(skill.color, 0.5)}
              className="py-6 hover:shadow-lg"
            >
              <CardContent className="sm:space-y-5 space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon color={skill.color} className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className=" font-bold text-[17px] text-foreground">{skill.title}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-[11px] rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

