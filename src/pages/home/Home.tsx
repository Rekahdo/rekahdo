import { HeaderProvider } from '../../contexts/HeaderProvider'
import { HeroProvider } from '../../contexts/HeroProvider'
// import { AboutSection } from '../../sections/about/AboutSection'
import { HeaderSection } from '../../sections/header/HeaderSection'
import { HeroSection } from '../../sections/hero/HeroSection'

export const Home = () => {
    return (
        <HeaderProvider>
            <HeroProvider>
                <HeaderSection />
                <HeroSection />
                {/* <AboutSection /> */}
            </HeroProvider>
        </HeaderProvider>
    )
}