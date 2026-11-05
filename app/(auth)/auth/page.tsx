"use client";

import { Container } from "@/components/shared-ui/container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H2 } from "@/components/shared-ui/headings";
import { ArrowLeft, ArrowLeftCircleIcon, Briefcase, CheckCircle2, LayoutDashboard, Loader2, LogIn, LogOut, PersonStanding, ShieldCheck, UserPlus } from "lucide-react";
import Link from "next/link";
import { AppLayout } from "@/components/shared-ui/layout";
import { Authenticated, Unauthenticated } from "convex/react";
import { useState } from "react";
import { LogoutBtn } from "@/components/shared-ui/auth-btn";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { ButtonImpl, buttonImplVariants } from "@/components/shared-ui/button-impl";
import { CardLoginForm, CardSignUpForm, DialogLoginForm, DialogSignUpForm } from "@/components/shared-ui/auth-forms";
import { DASHBOARD_ROUTE, PORTFOLIO_ROUTE } from "@/lib/routes";

export interface PageProps {

}

export default function Page(props: PageProps) {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <Container
            py={"section"}
            px={"section"}
            rootClassName="h-dvh"
            containerClassName="flex items-center justify-center relative"
        >

            <ButtonImpl
                text={"Portfolio"}
                height={'lg'}
                icon={<ArrowLeft />}
                variant={'secondary'}
                render={{
                    type: "page",
                    href: PORTFOLIO_ROUTE,
                }}
                className="fixed top-4 left-4"
            />

            <Unauthenticated>
                <AppLayout
                    className="w-full *:grow"
                    maxLgAxis={'y'}

                    top={
                        <Card className="w-full sm:max-w-xl p-0 gap-8">
                            <CardHeader className="text-center gap-8 p-0 pt-8 px-6">
                                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary/10">
                                    <ShieldCheck className="size-12 text-primary" />
                                </div>

                                <CardTitle>
                                    <H1
                                        title="Admin Portal" titleClassName="justify-center"
                                        subtitle="Sign Up or Login to manage site content and settings."
                                    />
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-col gap-4 w-full">
                                <ButtonImpl
                                    text={"Login"}
                                    icon={<LogIn />}
                                    height={'lg'}
                                    onClick={() => setIsLogin(true)}
                                    className="max-lg:hidden"
                                />

                                <ButtonImpl
                                    text={"Create Account"}
                                    icon={<UserPlus />}
                                    height={'lg'}
                                    variant={'outline'}
                                    onClick={() => setIsLogin(false)}
                                    className="max-lg:hidden"
                                />

                                <DialogLoginForm
                                    buttonProps={{
                                        text: "Login",
                                        icon: <LogIn />,
                                        height: 'lg',
                                        onClick: () => setIsLogin(false),
                                    }}
                                    className="lg:hidden"
                                />

                                <DialogSignUpForm
                                    buttonProps={{
                                        text: "Create Account",
                                        icon: <UserPlus />,
                                        height: 'lg',
                                        variant: 'outline',
                                        onClick: () => setIsLogin(false),
                                    }}
                                    className="lg:hidden"
                                />
                            </CardContent>

                            <CardFooter className="py-4 flex justify-center items-center">
                                <p className="text-center text-sm text-muted-foreground">
                                    Access is restricted to authorized administrators.
                                </p>
                            </CardFooter>
                        </Card>
                    }

                    bottomClassName="max-lg:hidden"
                    bottom={
                        <>
                            {isLogin ? <CardLoginForm /> : <CardSignUpForm />}
                        </>
                    }
                />
            </Unauthenticated>

            <Authenticated>
                <Card className="w-full max-w-md p-8 md:p-10 flex flex-col items-center text-center gap-6 border border-border bg-card shadow-lg rounded-2xl animate-into-view">
                    <div className="size-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                        <CheckCircle2 className="size-8 text-green-500" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">You are logged in!</h2>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <ButtonImpl
                            text={"Portfolio"}
                            height={'lg'}
                            icon={<Briefcase />}
                            render={{
                                type: "page",
                                href: PORTFOLIO_ROUTE,
                            }}
                        />

                        <ButtonImpl
                            text={"Dashboard"}
                            height={'lg'}
                            variant={"secondary"}
                            icon={<LayoutDashboard />}
                            render={{
                                type: "page",
                                href: DASHBOARD_ROUTE,
                            }}
                        />

                        <LogoutBtn height={'lg'} showTextAt="all" />
                    </div>
                </Card>
            </Authenticated>
        </Container>
    );
}
