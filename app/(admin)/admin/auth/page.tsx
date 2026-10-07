'use client'

import { Container } from "@/components/shared-ui/container";
import { H1 } from "@/components/shared-ui/headings";
import { ThemeToggle } from "@/components/shared-ui/toggle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ADMIN_DASHBOARD, ADMIN_SIGNUP, ADMIN_LOGIN } from "../layout";
import { cn } from "@/lib/utils";
import { ShieldCheck, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import { useConvexAuth } from "convex/react";

export default function Page() {

    const { isAuthenticated } = useConvexAuth();
    if (isAuthenticated)
        redirect(ADMIN_DASHBOARD.root, RedirectType.push)

    return (
        <Container id="admin" height={'full'} place={"center"} px={'section'}
            className="items-center relative">
            <ThemeToggle className="max-sm:hidden absolute top-4 right-4" />

            <Card className="max-w-2xl w-full p-0 gap-8">
                <CardHeader className="text-center gap-8 p-0 pt-8  px-6">
                    <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary/10">
                        <ShieldCheck className="size-12 text-primary" />
                    </div>

                    <CardTitle>
                        <H1
                            title="Admin Portal" className="justify-center"
                            subtitle="Sign Up or Login to manage site content and settings."
                        />
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex gap-4 justify-center max-sm:items-center max-sm:flex-col *:grow max-sm:*:w-full sm:*:max-w-50 p-0 px-6">
                    <Link href={ADMIN_SIGNUP} className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}>
                        <UserPlus />
                        Create Account
                    </Link>

                    <Link href={ADMIN_LOGIN} className={cn(buttonVariants({ size: 'lg' }))}>
                        <LogIn />
                        Log in
                    </Link>
                </CardContent>

                <CardFooter className="py-4 flex justify-center items-center">
                    <p className="text-center text-sm text-muted-foreground">
                        Access is restricted to authorized administrators.
                    </p>
                </CardFooter>
            </Card>
        </Container>
    );
}