import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation, NavItem } from "../shared-ui/navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "cn";
import { HERO_ID } from "./hero-section";
import { ABOUT_ID } from "./about-section";
import { STACK_ID } from "./stack-section";
import { PROJECT_ID } from "./project-section";
import { CONTACT_ID } from "./contact-section";
import { backDropBlur } from "../shared-ui/_css";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { LogoutBtn, SignUpBtn } from "../shared-ui/auth-btn";
import { DownloadExternalBtn } from "../shared-ui/button-impl";
import { HeaderEditForm } from "../app-ui/edit-forms";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { SERVICE_ID } from "./service-section";

export const HEADER_ID = "header";

export const HeaderSection = async () => {
    const cv = await fetchQuery(api.file.findByType, { type: 'cv' });

    const navItems: NavItem[] = [
        { link: { type: "scroll", href: HERO_ID, label: "Home" } },
        { link: { type: "scroll", href: ABOUT_ID, label: "About Me" } },
        { link: { type: "scroll", href: STACK_ID, label: "Stack" } },
        { link: { type: "scroll", href: SERVICE_ID, label: "Services" } },
        { link: { type: "scroll", href: PROJECT_ID, label: "Projects" } },
        { link: { type: "scroll", href: CONTACT_ID, label: "Contact Me" } },
    ];

    return (
        <Container
            id={HEADER_ID}
            as={"header"}
            width={'w400'}
            height={'header'}
            sticky={'top'}
            containerClassName="px-base"
            rootClassName={cn("border-b border-border/50", backDropBlur.background)}
        >
            <Header
                headerLeft={
                    <Logo variant={'header'} />
                }

                headerCenter={
                    <Navigation
                        navItems={navItems}
                        width={"2xs"}
                        gap={"xs"}
                        className="max-lg:hidden bg-muted/40 p-1 rounded-full border border-border/50"
                    />
                }

                headerRight={
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        {cv?.file && (
                            <DownloadExternalBtn text="Download CV" href={cv.file}
                                filename={cv.name} height={'md'} showTextAt="sm" />
                        )}

                        <LogoutBtn height={'md'} />

                        <div className="h-4 w-px bg-border/60 mx-0.5 max-sm:hidden" />

                        <AnimatedThemeToggler className={cn(
                            buttonVariants({ variant: 'outline' }),
                            "cursor-pointer max-sm:hidden h-10",
                        )} />

                        <SideSheet
                            navItems={navItems}
                            bottom={
                                cv?.file ? (
                                    <DownloadExternalBtn text="Download CV" height={'lg'} href={cv.file} filename={cv.name} />
                                ) : null
                            }
                        />
                    </div>
                }
            />

            <HeaderEditForm />
        </Container>
    );
};
