import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { AboutProvider } from "@/contexts/AboutProvider"
import { HeroProvider } from "@/contexts/HeroProvider"
import { TechStackProvider } from "@/contexts/TechStackProvider"

export default function Home() {
    return (
        <div id='home'>
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