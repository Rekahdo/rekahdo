import { Container } from "../../components/ui/container";
import { useHeader } from "../../hooks/context";
import { navLinksData } from "../../data/navlink";
import { logoData } from "../../data/logo";
import { SideBar } from "../../components/ui/side-bar";
import { Header, HeaderCenter, HeaderLeft, HeaderRight } from "../../components/block/header";
import { Logo } from "../../components/ui/logo";
import { ThemeToggle } from "../../components/ui/toggle";
import { DownloadBtn } from "../../components/ui/download";
import { NavigationBar } from "../../components/ui/navigation-bar";

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data && !data.hidden &&

                <Container variant={"header"}>
                    <Header
                        left={<HeaderLeft 
                            logo={<Logo {...data.logo} />} />}

                        center={<HeaderCenter 
                            navbar={<NavigationBar links={data.navLink}/>}/>}

                        right={<HeaderRight 
                            themeToggle={<ThemeToggle />}
                            downloadBtn={<DownloadBtn {...data.downloadCV} />}/>}

                        sidebar={<SideBar 
                            links={data.navLink} showCloseButton={false} />}
                    />
                </Container>
            }
        </>
    )
}