import { Container } from "../../components/ui/container";
import { useHeader } from "../../hooks/context";
import { SideBar } from "../../components/ui/side-bar";
import { Header, HeaderCenter, HeaderLeft, HeaderRight } from "../../components/block/header";
import { Logo, type LogoType } from "../../components/ui/logo";
import { ThemeToggle } from "../../components/ui/toggle";
import { NavigationBar } from "../../components/ui/navigation-bar";
import { DownloadBtn, type DownloadBtnType, type PageBtnType } from "../../components/ui/button";

export type HeaderType = {
  logo: LogoType;
  links: PageBtnType[];
  downloadCV: DownloadBtnType;
};

export const HeaderSection = () => {

    const { data } = useHeader()!;

    return (
        <>
            {
                data &&

                <Container 
                    id="header"
                    bd={"bottom"} 
                    sticky={"top"} 
                    bg={"background"}
                    h={"header"}
                    align={"center"}
                    maxWidth={"w1500"}>
                        
                    <Header
                        left={<HeaderLeft 
                            logo={<Logo {...data.logo} />} />}

                        center={<HeaderCenter 
                            navbar={<NavigationBar 
                                    links={data.links}/>}/>}

                        right={<HeaderRight 
                            themeToggle={<ThemeToggle />}
                            downloadBtn={<DownloadBtn {...data.downloadCV} showTextAt="sm"/>}/>}

                        sidebar={<SideBar side="left"
                            logo={<Logo {...data.logo} />}
                            links={data.links}
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