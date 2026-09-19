import { AboutProvider } from '../../contexts/AboutProvider'
import { HeaderProvider } from '../../contexts/HeaderProvider'
import { HeroProvider } from '../../contexts/HeroProvider'
import { TechStackProvider } from '../../contexts/TechStackProvider'
import { AboutSection } from '../../sections/about/AboutSection'
import { HeaderSection } from '../../sections/header/HeaderSection'
import { HeroSection } from '../../sections/hero/HeroSection'
import { TechStackSection } from '../../sections/stack/StackSection'

export const Home = () => {
    return (
        <HeaderProvider>
            <HeroProvider>
                <AboutProvider>
                    <TechStackProvider>

                    {/* START */}
                    
                    <HeaderSection />
                    <HeroSection />
                    <main>
                        <AboutSection />
                        <TechStackSection />
                    </main>

                    {/* END */}

                    </TechStackProvider>
                </AboutProvider>
            </HeroProvider>
        </HeaderProvider>
    )
}