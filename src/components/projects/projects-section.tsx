"use client";

import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BorderGlow } from "@/components/ui/border-glow";
import { RotatingText } from "@/components/animate-ui/text/rotating";
import { CustomToast } from "@/components/ui/toast";
import { toast } from "sonner";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const isHorizontal = el.scrollWidth > el.clientWidth + 10;
    const ratio = isHorizontal
      ? el.scrollLeft / (el.scrollWidth - el.clientWidth)
      : el.scrollTop / (el.scrollHeight - el.clientHeight);
    setActive(Math.round(ratio * (projects.length - 1)));
  };

  return (
    <section id="projects" className="relative overflow-hidden pt-16 pb-8 md:pt-20 px-2 sm:px-6 lg:px-8">
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/4 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-16 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeading
            label="Selected Work"
            title={
              <span className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl">
                Built With Purpose
              </span>
            }
            description="A selection of applications, backend systems, and developer tools built with a focus on thoughtful design, solid engineering, scalability, and real-world usability."
          />
          <div className="text-center -mt-8 mb-8 md:mb-16">
            <RotatingText
              text={["Full-Stack Applications", "Responsive Frontends", "Scalable REST APIs", "Cloud Deployments"]}
              duration={2500}
              className="text-lg sm:text-xl text-muted-foreground font-semibold"
            />
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto lg:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory md:snap-none h-[320px] md:h-auto md:min-h-[540px] md:max-h-[720px] lg:max-h-none lg:min-h-0 px-1 md:px-6 scroll-px-1 md:scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="h-[300px] w-full shrink-0 snap-start md:h-auto md:w-auto md:min-w-0 md:snap-none"
            >
              <BorderGlow borderRadius={24} glowRadius={28} className="h-full p-6">
                <div className="flex flex-col gap-5 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon color={project.color} className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="w-9 h-9 rounded-full bg-black/2 dark:bg-white/7 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="w-9 h-9 rounded-full bg-black/2 dark:bg-white/7 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            toast.custom((id) => (
                              <CustomToast
                                title="Coming Soon"
                                description="Live demo isn't available yet. Stay tuned!"
                                icon={<ExternalLink className="h-5 w-5 text-primary" />}
                                close={() => toast.dismiss(id)}
                              />
                            ));
                          }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-[17px] text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[11px] rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 pt-2 md:hidden">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
