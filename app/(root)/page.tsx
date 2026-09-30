import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/project-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { AboutProvider } from "@/contexts/AboutProvider"
import { HeroProvider } from "@/contexts/HeroProvider"
import { ProjectsProvider } from "@/contexts/ProjectsProvider"
import { TechStackProvider } from "@/contexts/TechStackProvider"

export default function Home() {
    return (
        <div id='home'>

            <ProjectsProvider>
                <ProjectsSection />
            </ProjectsProvider>
            
            <HeroProvider>
                <HeroSection />
            </HeroProvider>

            <AboutProvider>
                <AboutSection />
            </AboutProvider>

            <TechStackProvider>
                <TechStackSection />
            </TechStackProvider>
        </div>
    )
}