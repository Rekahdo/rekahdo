import { useHeader } from '../../hooks/portfolio'
import './HeaderSection.css'

export const HeaderSection = () => {

    const { data, reloadHeader } = useHeader();

    return (
        <>
            {
                data && !data.hidden &&

                <header>
                    <div hidden={data.logo.hidden}>
                        <img src={data.logo.url} alt={`${data.logo.name} Logo`} />
                    </div>

                    <nav hidden={data.navLink.hidden}>
                        {data.navLink.links.map((link) => (
                            <a href={link.path} hidden={link.hidden} key={link.id}>{link.text}</a>
                        ))}
                    </nav>

                    <div hidden={data.ctaButton.hidden}>
                        <a href={data.ctaButton.path} download={data.ctaButton.name}>
                            {data.ctaButton.text}
                        </a>
                    </div>
                </header>
            }
        </>
    )
}
