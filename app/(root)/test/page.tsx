import { AboutSection } from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/project-section"
import StackSection2 from "@/components/sections/stack-section-2"

export default function Page() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <StackSection2 />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}