'use client'

import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { DownloadType } from "@/lib/prop-types";
import { useHeader } from "@/contexts/HeaderProvider";
import { cn } from "cn";
import { DownloadBtn } from "../shared-ui/button-impl";

export interface HeaderProps {
    downloadCV: DownloadType,
}

export const HeaderSection = () => {

    const { data } = useHeader()!;

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
                            <Navigation width={"sm"} gap={"none"} className="max-mlg:hidden" />
                        }

                        headerRight={
                            <>
                                <DownloadBtn text="Download CV" {...data.downloadCV} showTextAt="sm" />
                                <ThemeToggle className="max-sm:hidden" />
                                <SideSheet
                                    logo={<Logo />}
                                    width="full"
                                    height="lg"
                                    gap="none"
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