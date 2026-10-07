'use client'

import { ReactNode } from "react";
import { Header } from "@/components/shared-ui/header";
import { Logo } from "@/components/shared-ui/logo";
import { Container } from "@/components/shared-ui/container";
import { ThemeToggle } from "@/components/shared-ui/toggle";
import { Navigation, NavItem } from "@/components/shared-ui/navigation";
import { LogoutBtn } from "@/components/shared-ui/button-impl";
import { SideSheet } from "@/components/shared-ui/side-sheet";
import { useConvexAuth } from "convex/react";
import { redirect, RedirectType } from "next/navigation";
import { toast } from "sonner";
import { ADMIN_AUTH, ADMIN_DASHBOARD } from "../layout";

export interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { isAuthenticated } = useConvexAuth()
    if (!isAuthenticated) {
        toast.success("Login to continue to dashboard")
        redirect(ADMIN_AUTH, RedirectType.push);
    }

    const navItems: NavItem[] = [
        {
            link: { type: "page", href: ADMIN_DASHBOARD.root, label: "Dashboard" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.header, label: "Header" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.hero, label: "Hero" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.about, label: "About" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.stack, label: "Tech Stack" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.projects, label: "Projects" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.contact, label: "Contact" },
        },
        {
            link: { type: "page", href: ADMIN_DASHBOARD.footer, label: "Footer" },
        },
    ]

    return (
        <>
            <Container id="admin-header" width={'w400'} height={'header'}
                sticky={'top'} >
                <Header
                    headerLeft={<Logo />}

                    headerCenter={
                        <>
                            <Navigation
                                className="max-md:hidden"
                                navItems={navItems}
                                width={'lg'}
                                height={'lg'}
                            />
                        </>
                    }

                    headerRight={
                        <>
                            <LogoutBtn />
                            <ThemeToggle />
                            <SideSheet
                                navItems={navItems}
                            />
                        </>
                    }
                />
            </Container>

            {props.children}
        </>
    );
}
