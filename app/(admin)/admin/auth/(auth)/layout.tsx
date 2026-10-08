'use client'

import { Container } from "@/components/shared-ui/container";
import { buttonVariants } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { redirect, RedirectType } from "next/navigation";
import { ADMIN_AUTH, ADMIN_DASHBOARD } from "../../layout";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {

    const { isAuthenticated } = useConvexAuth()
    if (isAuthenticated)
        redirect(ADMIN_DASHBOARD.root, RedirectType.push);

    return (
        <Container
            id="signup"
            px={'section'}
            className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href={ADMIN_AUTH} className={buttonVariants()}>
                    <ArrowLeft /> Home
                </Link>
            </div>

            <div className="w-full max-w-md mx-auto">
                {props.children}
            </div>
        </Container>
    );
}
