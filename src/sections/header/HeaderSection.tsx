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
        "flex w-full items-center justify-between"
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
                        <Image {...data.logo} file_path={src} alt={`${data.logo.name} Logo`} />

                        <NavBar {...data.navLink} showCloseBtn={false} side='left' variant={'navLink'}
                            title={<Image {...data.logo} file_path={src} alt={`${data.logo.name} Logo`} />}
                            footer={<Button {...data.ctaButton} variant_type='download-cv' size={'lg'} />}
                        />

                        <div className={cn(rightStyle)}>
                            <Switch variant={'thin'} size={'lg'} toggleTheme={true} />
                            <Button {...data.ctaButton} variant_type='download-cv' />
                        </div>
                    </header>
                </Container>
            }
        </>
    )
}
