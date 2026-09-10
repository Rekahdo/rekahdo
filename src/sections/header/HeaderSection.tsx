import { Container } from '../../comps/Container';
import { NavBar } from '../../comps/NavBar';
import { useHeader } from '../../hooks/context'
import './HeaderSection.css'

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container className='header-container'>
                    <header className='header-section'>
                        <NavBar logo={data.logo} navLink={data.navLink} ctaButton={data.ctaButton} />
                    </header>
                </Container>
            }
        </>
    )
}
