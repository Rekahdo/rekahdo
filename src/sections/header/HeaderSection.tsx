import { NavBar } from '../../comps/NavBar';
import { useHeader } from '../../hooks/portfolio'
import './HeaderSection.css'

export const HeaderSection = () => {

    const { data } = useHeader();

    return (
        <>
            {
                data && !data.hidden &&

                <header className='header-section'>
                    <NavBar logo={data.logo} navLink={data.navLink} ctaButton={data.ctaButton} />
                </header>
            }
        </>
    )
}
