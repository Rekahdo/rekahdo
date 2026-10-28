import { AboutSection } from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import FooterSection from "@/components/sections/footer-section"
import { HeaderSection } from "@/components/sections/header-section"
import { HeroSection } from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/project-section"
import { StackSection } from "@/components/sections/stack-section"
import { AdminProvider } from "@/contexts/AdminProvider"

export default function Page() {
    return (
        <>
            <AdminProvider isAdminPage={true}>
                <HeaderSection />
                <HeroSection />
                <AboutSection />
                <StackSection />
                <ProjectsSection />
                <ContactSection />
                <FooterSection />
            </AdminProvider>
        </>
    )
}