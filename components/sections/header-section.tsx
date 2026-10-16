import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation, NavItem } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { Download } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "cn";
import { HERO_ID } from "./hero-section";
import { ABOUT_ID } from "./about-section";
import { STACK_ID } from "./stack-section";
import { PROJECT_ID } from "./project-section";
import { CONTACT_ID } from "./contact-section";
import { documentData } from "@/data/document";

export const HEADER_ID = "header";

export const HeaderSection = async () => {
    const cv = (await documentData).cv;

    const navItems: NavItem[] = [
        { link: { type: "scroll", href: HERO_ID, label: "Home" } },
        { link: { type: "scroll", href: ABOUT_ID, label: "About Me" } },
        { link: { type: "scroll", href: STACK_ID, label: "Stack" } },
        { link: { type: "scroll", href: PROJECT_ID, label: "Projects" } },
        { link: { type: "scroll", href: CONTACT_ID, label: "Contact Me" } },
    ];

    return (
        <Container
            id={HEADER_ID}
            as={"header"}
            px={'section'}
            width={'w400'}
            height={'header'}
            sticky={'top'}
            wrapperClassName="border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all"
        >
            <Header
                headerLeft={
                    <Logo variant={'header'} />
                }
                headerCenter={
                    <Navigation
                        navItems={navItems}
                        width={"sm"}
                        gap={"xs"}
                        className="max-mlg:hidden bg-muted/40 p-1 rounded-full border border-border/50"
                    />
                }
                headerRight={
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <a
                            href={cv?.href}
                            download={cv?.name}
                            key={`hero-btn-1`}
                            className={cn(
                                buttonVariants({ size: 'sm' }),
                                "h-9 gap-2 rounded-full px-4 text-xs font-medium shadow-xs hover:shadow-primary/20 hover:shadow-md transition-all"
                            )}
                        >
                            <Download className="size-3.5" />
                            <span className="max-sm:hidden">Download CV</span>
                        </a>

                        <div className="h-4 w-px bg-border/60 mx-0.5 max-sm:hidden" />

                        <ThemeToggle />

                        <SideSheet
                            logo={<Logo />}
                            navItems={navItems}
                            bottom={
                                <a
                                    href={cv?.href}
                                    download={cv?.name}
                                    key={`hero-btn-1`}
                                    className={cn(
                                        buttonVariants({ size: 'default' }),
                                        "w-full h-11 gap-2 rounded-xl text-sm font-medium shadow-sm"
                                    )}
                                >
                                    <Download className="size-4" />
                                    Download CV
                                </a>
                            }
                        />
                    </div>
                }
            />
        </Container>
    );
};
