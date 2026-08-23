import { HeroSection } from "@/components/home/hero-section";
import { SkillsHighlight } from "@/components/home/skills-highlight";
import { AboutSection } from "@/components/about/about-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";
import { PageShell } from "@/components/layout/page-shell";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <SkillsHighlight />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </PageShell>
  );
}