import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation, NavItem } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Download } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "cn";
import { HERO_ID } from "./hero-section";
import { ABOUT_ID } from "./about-section";
import { STACK_ID } from "./stack-section";
import { PROJECT_ID } from "./project-section";
import { CONTACT_ID } from "./contact-section";

export const HEADER_ID = "header";

export const HeaderSection = async () => {

    const cv = await fetchQuery(api.document.findByType, { type: 'cv' });

    const navItems: NavItem[] = [
        { link: { type: "scroll", href: HERO_ID, label: "Home" } },
        { link: { type: "scroll", href: ABOUT_ID, label: "About Me" } },
        { link: { type: "scroll", href: STACK_ID, label: "Stack" } },
        { link: { type: "scroll", href: PROJECT_ID, label: "Projects" } },
        { link: { type: "scroll", href: CONTACT_ID, label: "Contact Me" } },
    ]

    return (
        <Container
            id={HEADER_ID}
            as={"header"}
            px={'section'}
            width={'w400'}
            height={'header'}
            sticky={'top'}
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
                        <a href={cv?.href} download={cv?.name} key={`hero-btn-1`}
                            className={cn(buttonVariants({ size: 'lg' }), "shadow-md")}>
                            <Download />
                            <span className=" max-sm:hidden">Download CV</span>
                        </a>

                        <ThemeToggle className="max-sm:hidden" />
                        <SideSheet
                            logo={<Logo />}
                            navItems={navItems}
                            bottom={
                                <a href={cv?.href} download={cv?.name} key={`hero-btn-1`}
                                    className={cn(buttonVariants({ size: 'lg' }), "shadow-md")}>
                                    <Download />
                                    Download CV
                                </a>
                            }
                        />
                    </>
                }
            />
        </Container>
    )
}