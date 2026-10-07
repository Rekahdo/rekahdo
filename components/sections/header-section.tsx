'use client'

import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation, NavItem } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { DownloadType } from "@/lib/types";
import { useHeader } from "@/contexts/HeaderProvider";
import { DownloadBtn } from "../shared-ui/button-impl";

export interface HeaderProps {
    downloadCV: DownloadType,
}

export const HeaderSection = () => {

    const { data } = useHeader()!;

    const navItems: NavItem[] = [
        { link: { type: "scroll", href: "home", label: "Dashboard" } },
        { link: { type: "scroll", href: "aboutMe", label: "About Me" } },
        { link: { type: "scroll", href: "techStack", label: "Tech-Stack" } },
        { link: { type: "scroll", href: "projects", label: "Projects" } },
        { link: { type: "scroll", href: "contact", label: "Contact Me" } },
    ]

    return (
        <>
            {
                data &&

                <Container
                    id="header"
                    as={"header"}
                    width={'w400'}
                    height={'header'}
                    sticky={'top'}
                    background={'background'}
                >

                    <Header
                        headerLeft={
                            <Logo />
                        }

                        headerCenter={
                            <Navigation navItems={navItems} width={"sm"} gap={"none"} className="max-mlg:hidden" />
                        }

                        headerRight={
                            <>
                                <DownloadBtn text="Download CV" {...data.downloadCV} showTextAt="sm" />
                                <ThemeToggle className="max-sm:hidden" />
                                <SideSheet
                                    logo={<Logo />}
                                    navigation={<Navigation navItems={navItems} width={"sm"} gap={"none"} className="max-mlg:hidden" />}
                                    bottom={<DownloadBtn size={"lg"} text="Download CV" {...data.downloadCV} />}
                                />
                            </>
                        }
                    />
                </Container>
            }
        </>
    )
}