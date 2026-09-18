import { Container } from "../../components/ui/container";
import { useHeader } from "../../hooks/context";
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

                <Container section={"header"}>
                    <Header
                        left={<HeaderLeft 
                            logo={<Logo {...data.logo} />} />}

                        center={<HeaderCenter 
                            navbar={<NavigationBar 
                                    links={data.navLink}/>}/>}

                        right={<HeaderRight 
                            themeToggle={<ThemeToggle />}
                            downloadBtn={<DownloadBtn {...data.downloadCV} showTextAt="md"/>}/>}

                        sidebar={<SideBar side="left"
                            logo={<Logo {...data.logo} />}
                            links={data.navLink}
                            navClassName="divide-y flex flex-col gap-2"
                            linkTextHeight={'lg'}
                            linkTextWidth={"full"}
                            linksPosition="left"
                            bottom={<DownloadBtn {...data.downloadCV} size={"lg"} />}
                        />}
                    />
                </Container>
            }
        </>
    )
}