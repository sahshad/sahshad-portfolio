import { Navbar } from "@/components/home/navbar"
import { HeroSection } from "@/components/home/hero-section"
// import { Footer } from "@/components/footer"
// import { SkillsHighlight } from "@/components/skills-highlight"
// import { FeaturedProjects } from "@/components/featured-projects"
// import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* <SkillsHighlight />
        <FeaturedProjects />
        <CallToAction /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
