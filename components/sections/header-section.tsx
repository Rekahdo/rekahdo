'use client'

import { SideSheet } from "../shared-ui/side-sheet";
import { DownloadBtn } from "../shared-ui/buttons";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { DownloadType } from "@/lib/prop-types";
import { useHeader } from "@/contexts/HeaderProvider";
import { cn } from "cn";

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
                    height={'header'}
                    sticky={'top'}
                    background={'background'}
                    innerClassName={cn(
                        "max-w-400",
                    )}
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
                                <DownloadBtn text="Download CV" {...data.downloadCV} />
                                <ThemeToggle />
                            </>
                        }

                        sidebar={
                            <SideSheet
                                logo={<Logo />}
                                width="full"
                                height="lg"
                                gap="none"
                                bottom={<DownloadBtn size={"lg"}
                                    text="Download CV"
                                    href={data.downloadCV.href}
                                    name={data.downloadCV.name} />
                                }
                            />
                        }
                    />
                </Container>
            }
        </>
    )
}