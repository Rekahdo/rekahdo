import { AboutSection } from '../../sections/about/AboutSection'
import { HeaderSection } from '../../sections/header/HeaderSection'
import { HeroSection } from '../../sections/hero/HeroSection'
import './Home.css'

export const Home = () => {
    return (
        <>
            <HeaderSection />
            <HeroSection />
            <AboutSection />
        </>
    )
}