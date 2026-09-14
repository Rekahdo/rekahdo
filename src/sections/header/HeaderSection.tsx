import { Container } from '../../components/ui/container';
import { useHeader } from '../../hooks/context'
import { NavBar } from '../../components/ui/navigation-bar';
import { ThemeToggle } from '../../components/ui/toggle';
import { Logo } from '../../components/ui/logo';

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container>
                    <header className={"flex w-full items-center"}>
                        <NavBar
                            links={data.navLink.links} cta={{button: data.ctaButton, variant: 'download-cv'}}
                            logo={<Logo {...data.logo} />}
                            theme_toggle={<ThemeToggle />}
                        />
                    </header>
                </Container>
            }
        </>
    )
}
