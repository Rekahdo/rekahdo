import { useHero } from '../../hooks/context'
import './HeroSection.css'

export const HeroSection = () => {

    const {data, reload} = useHero()!;

    return (
        <section>
            {data?.fullName}
        </section>
    )
}