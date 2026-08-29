"use client";

import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { BorderGlow } from "@/components/ui/border-glow";
import { skills } from "@/data/skills-highlight";

export function SkillsHighlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActive(Math.round(ratio * (skills.length - 1)));
  };

  return (
    <section className="pt-16 pb-8 md:py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm">What I Do</p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining strong engineering fundamentals with thoughtful design to build scalable, reliable, and user-focused software that delivers a seamless experience across every interaction.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto overflow-y-hidden md:overflow-y-visible scroll-smooth scrollbar-hide snap-x snap-mandatory md:snap-proximity h-[320px] md:h-auto py-0 md:py-8 px-1 md:px-6 scroll-px-1 md:scroll-px-0"
        >
          {skills.map((skill, index) => (
            <BorderGlow
              key={index}
              borderRadius={24}
              glowRadius={28}
              className={`snap-start shrink-0 py-6 w-full md:w-[320px] h-[300px] md:h-auto`}
            >
              <CardContent className="h-full flex flex-col sm:space-y-5 space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <skill.icon color={skill.color} className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-[17px] text-foreground">{skill.title}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-[11px] rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </BorderGlow>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 pt-2 md:hidden">
          {skills.map((_, i) => (
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