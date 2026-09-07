import { useHeader } from '../../hooks/portfolio'
import './HeaderSection.css'

export const HeaderSection = () => {

    const { data, reloadHeader } = useHeader();

    return (
        <>
            {
                data && data.visible &&

                <header>
                    <div hidden={data.logo.visible}>
                        <img src="" alt="" />
                    </div>

                    <nav hidden={data.navLink.visible}>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                        <a href='/'>Home</a>
                    </nav>

                    <div>
                        <button hidden={data.ctaButton.visible}></button>
                    </div>
                </header>
            }
        </>
    )
}
