import { HeaderProvider } from '../../contexts/HeaderProvider'
import { HeroProvider } from '../../contexts/HeroProvider'
import { AboutProvider } from '../../contexts/AboutProvider'
import { ContactProvider } from '../../contexts/ContactProvider'
import { FooterProvider } from '../../contexts/FooterProvider'
import { GrowthProvider } from '../../contexts/GrowthProvider'
import { ProjectsProvider } from '../../contexts/ProjectsProvider'
import { ResourcesProvider } from '../../contexts/ResourcesProvider'
import { ServicesProvider } from '../../contexts/ServicesProvider'
import { StackUsageProvider } from '../../contexts/StackUsageProvider'
import { TechStackProvider } from '../../contexts/TechStackProvider'
import { HeaderSection } from '../../sections/header/HeaderSection'
import { HeroSection } from '../../sections/hero/HeroSection'
import { AboutSection } from '../../sections/about/AboutSection'
import { ContactSection } from '../../sections/contact/ContactSection'
import { FooterSection } from '../../sections/footer/FooterSection'
import { GrowthSection } from '../../sections/growth/GrowthSection'
import { ProjectSection } from '../../sections/project/ProjectSection'
import { ResourceSection } from '../../sections/resource/ResourceSection'
import { ServicesSection } from '../../sections/services/ServicesSection'
import { StackSection } from '../../sections/stack/StackSection'
import { UsageSection } from '../../sections/usage/UsageSection'
// import './Home.css'

export const Home = () => {
    return (
        <HeaderProvider>
            <HeroProvider>
                <AboutProvider>
                    <ContactProvider>
                        <FooterProvider>
                            <GrowthProvider>
                                <ProjectsProvider>
                                    <ResourcesProvider>
                                        <ServicesProvider>
                                            <StackUsageProvider>
                                                <TechStackProvider>
                                                    <HeaderSection />
                                                    {/* <HeroSection />
                                                    <AboutSection />
                                                    <ServicesSection />
                                                    <ProjectSection />
                                                    <StackSection />
                                                    <UsageSection />
                                                    <GrowthSection />
                                                    <ResourceSection />
                                                    <ContactSection />
                                                    <FooterSection /> */}
                                                </TechStackProvider>
                                            </StackUsageProvider>
                                        </ServicesProvider>
                                    </ResourcesProvider>
                                </ProjectsProvider>
                            </GrowthProvider>
                        </FooterProvider>
                    </ContactProvider>
                </AboutProvider>
            </HeroProvider>
        </HeaderProvider>
    )
}