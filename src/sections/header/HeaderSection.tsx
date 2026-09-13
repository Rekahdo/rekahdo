import { Container } from '../../components/Container';
import { Image } from '../../components/ui/image';
import { useHeader } from '../../hooks/context'
import { NavBar } from '../../components/ui/navbar';
import { useEffect, useState } from 'react';
import { themeIsDark } from '../../utils/utils';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../../components/ui/toggle';

export const HeaderSection = () => {

    const { data } = useHeader()!;
    const {listen, stop} = useTheme();

    const dark = "/images/logos/logo-dark.svg";
    const light = "/images/logos/logo-light.svg";

    const [src, setSrc] = useState<string>(themeIsDark() ? dark : light);
    
    useEffect(() => {
        const observer = listen(() => setSrc(dark), () => setSrc(light));

        return () => {
            stop(observer);
        }
    }, [])

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className={"flex w-full items-center"}>
                        <NavBar
                            links={data.navLink.links} cta={{button: data.ctaButton, variant: 'download-cv'}}
                            logo={<Image {...data.logo} file_path={src} alt={`${data.logo.name} Logo`} />}
                            theme_toggle={<ThemeToggle />}
                        />
                    </header>
                </Container>
            }
        </>
    )
}
