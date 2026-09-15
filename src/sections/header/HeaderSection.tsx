import { Container } from "../../components/ui/container";
import { Logo } from "../../components/ui/logo";
import { NavBar } from "../../components/ui/navigation-bar";
import { ThemeToggle } from "../../components/ui/toggle";
import { useHeader } from "../../hooks/context";

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container variant={"header"}>
                    <header className={"flex items-center w-full"}>
                        <NavBar
                            links={data.navLink.links} cta={{button: data.ctaButton, variant: 'download-cv'}}
                            logo={<Logo  {...data.logo} />}
                            theme_toggle={<ThemeToggle />}
                        />
                    </header>
                </Container>
            }
        </>
    )
}