import { useAbout } from '../../hooks/context'
import './AboutSection.css'

export const AboutSection = () => {

    const {data} = useAbout();

    return (
        <>
            {
                <section>
                    <h2>About Section</h2>
                </section>
            }
        </>
    )
}
