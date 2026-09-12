import { useState } from 'react';
import { Container } from '../../components/Container';
import { Image } from '../../components/ui/image';
import { NavLink } from '../../components/ui/nav';
import { Switch } from '../../components/ui/switch';
import { useHeader } from '../../hooks/context'
import { Button } from '../../components/ui/button';

export const HeaderSection = () => {

    const { data } = useHeader()!;
    const [dark, setDark ] = useState()

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className='flex w-full items-center justify-between'>
                        <Image {...data.logo} alt={`${data.logo.name} Logo`} />

                        <NavLink {...data.navLink} showCloseBtn={false} side='left' variant={'navLink'}
                            title={<Image {...data.logo} alt={`${data.logo.name} Logo`} />}
                            footer={<Button {...data.ctaButton} variantType='download-cv' size={'lg'} />} 
                            />

                        <Switch />
                        <Button {...data.ctaButton} variantType='download-cv' className='max-md:hidden' />
                    </header>
                </Container>
            }
        </>
    )
}
