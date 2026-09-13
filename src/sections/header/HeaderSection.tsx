import { Container } from '../../components/Container';
import { Image } from '../../components/ui/image';
import { Switch } from '../../components/ui/switch';
import { useHeader } from '../../hooks/context'
import { NavBar } from '../../components/ui/navbar';
import { Button } from '../../components/ui/button';
import { cn } from 'cn';
import { useEffect, useState } from 'react';
import { themeIsDark } from '../../utils/utils';
import { useTheme } from '../../hooks/useTheme';

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
    
    const headerStyle = cn(
        "flex w-full items-center"
    )
    
    const rightStyle = cn(
        "flex items-center md:space-x-10 max-md:hidden"
    )

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className={cn(headerStyle)}>
                        <NavBar
                            links={data.navLink.links} cta={{button: data.ctaButton, variant: 'download-cv'}}
                            logo={<Image {...data.logo} file_path={src} alt={`${data.logo.name} Logo`} />}
                            theme_toggle={<Switch variant={"thin"} size={"lg"}/>}
                        />
                    </header>
                </Container>
            }
        </>
    )
}
