import { Container } from '../../components/Container';
import { Image } from '../../components/ui/image';
import { Switch } from '../../components/ui/switch';
import { useHeader } from '../../hooks/context'
import { NavBar } from '../../components/ui/navbar';
import { Button } from '../../components/ui/button';

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className='flex w-full items-center justify-between'>
                        <Image {...data.logo} alt={`${data.logo.name} Logo`} />

                        <NavBar {...data.navLink} showCloseBtn={false} side='left' variant={'navLink'}
                            title={<Image {...data.logo} alt={`${data.logo.name} Logo`} />}
                            footer={<Button {...data.ctaButton} variant_type='download-cv' size={'lg'} />}
                        />

                        <div className=''>
                            <Switch variant={'thin'} toggleTheme={true} />
                            <Button {...data.ctaButton} variant_type='download-cv' className='max-md:hidden' />
                        </div>
                    </header>
                </Container>
            }
        </>
    )
}
