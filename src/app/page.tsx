// import { Navbar } from "@/components/home/navbar"
// import { HeroSection } from "@/components/home/hero-section"
// import { SkillsHighlight } from "@/components/home/skills-highlight"
// import { StarsBackground } from "@/components/animate-ui/backgrounds/stars"
// // import { Footer } from "@/components/footer"
// // import { FeaturedProjects } from "@/components/featured-projects"
// // import { CallToAction } from "@/components/call-to-action"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       <StarsBackground >
//       <Navbar />
//       <main>
//         <HeroSection />
//         <SkillsHighlight />
//         {/* <FeaturedProjects />
//         <CallToAction /> */}
//       </main>
//       {/* <Footer /> */}
//         </StarsBackground>
//     </div>
//   )
// }

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsHighlight } from "@/components/home/skills-highlight";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";

export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we're only rendering after the component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or show a loader/skeleton to avoid mismatch

  const content = (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SkillsHighlight />
      </main>
    </>
  );

  return (
    <div className="min-h-screen">
      {resolvedTheme === "dark" ? (
        <StarsBackground>{content}</StarsBackground>
      ) : (
        content
      )}
    </div>
  );
}
