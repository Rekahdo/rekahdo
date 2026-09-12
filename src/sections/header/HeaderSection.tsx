import { Container } from '../../components/Container';
import { ButtonVariant } from '../../components/ui/button';
import { Image } from '../../components/ui/image';
import { NavLink } from '../../components/ui/nav';
import { useHeader } from '../../hooks/context'

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className='flex w-full items-center justify-between'>
                        <Image {...data.logo} alt={`${data.logo.name} Logo`} />

                        <NavLink {...data.navLink} showCloseBtn={false} side='left' variant={'navLink'}
                            title={<Image {...data.logo} alt={`${data.logo.name} Logo`} />}
                            footer={
                                <ButtonVariant {...data.ctaButton} type='download_cv' size={'lg'} />
                            } 
                            />

                        <ButtonVariant {...data.ctaButton} className='max-md:hidden' 
                            type='download_cv' />
                    </header>
                </Container>
            }
        </>
    )
}
