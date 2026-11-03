'use client'

import { ReactNode } from "react";
import { Header } from "@/components/shared-ui/header";
import { Logo } from "@/components/shared-ui/logo";
import { Container } from "@/components/shared-ui/container";
import { ModeToggle } from "@/components/shared-ui/toggle";
import { Navigation, NavItem } from "@/components/shared-ui/navigation";
import { SideSheet } from "@/components/shared-ui/side-sheet";
import { useConvexAuth } from "convex/react";
import { redirect, RedirectType } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { isAuthenticated, isLoading } = useConvexAuth()

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Spinner className="size-8" />
            </div>
        );
    }

    if (!isAuthenticated) {
        toast.success("Login to continue to dashboard")
    }

    return (
        <>
            {props.children}
        </>
    );
}
