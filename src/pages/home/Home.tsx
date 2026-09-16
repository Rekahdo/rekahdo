import { HeaderProvider } from '../../contexts/HeaderProvider'
import { HeroProvider } from '../../contexts/HeroProvider'
import { HeaderSection } from '../../sections/header/HeaderSection'
import { HeroSection } from '../../sections/hero/HeroSection'
// import './Home.css'

export const Home = () => {
    return (
        <HeaderProvider>
            <HeroProvider>
                <HeaderSection />
                {/* <HeroSection /> */}
            </HeroProvider>
        </HeaderProvider>
    )
}