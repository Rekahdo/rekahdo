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

export const HEADER_ID = "header";

export const HeaderSection = async () => {

    const cv = await fetchQuery(api.document.findByType, { type: 'cv' });

    const navItems: NavItem[] = [
        { link: { type: "scroll", href: "home", label: "Home" } },
        { link: { type: "scroll", href: "aboutMe", label: "About Me" } },
        { link: { type: "scroll", href: "techStack", label: "Tech-Stack" } },
        { link: { type: "scroll", href: "projects", label: "Projects" } },
        { link: { type: "scroll", href: "contact", label: "Contact Me" } },
    ]

    return (
        <Container
            id={HEADER_ID}
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
                        <a href={cv?.href} download={cv?.name} key={`hero-btn-1`}
                            className={cn(buttonVariants({ size: 'lg' }), "shadow-md")}>
                            <Download />
                            Download CV
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