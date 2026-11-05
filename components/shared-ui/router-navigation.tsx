'use client';

import { ArrowLeft, Home, Lock } from "lucide-react";
import { ButtonImpl, ButtonImplProps } from "./button-impl";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "cn";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";
import { AUTH_ROUTE, PORTFOLIO_ROUTE as HOME_ROUTE } from "@/lib/routes";

interface RouteProps extends ButtonImplProps {
    fixed?: boolean;
    x?: "left" | "right";
    y?: "top" | "bottom";
}

function Route({
    fixed,
    x = "left",
    y = "top",
    ...btnProps
}: RouteProps) {

    return (
        <ButtonImpl
            height={'lg'}
            className={cn(
                fixed && "fixed",
                x === "left" ? "left-4" : "right-4",
                y === "top" ? "top-4" : "bottom-4",
            )}
            {...btnProps}
        />
    );
}

export function BackRoute(props: RouteProps) {
    const router = useRouter();

    return (
        <Route
            icon={<ArrowLeft />}
            text={props.text ?? "Back"}
            onClick={() => router.back()}
            {...props}
        />
    );
}

export function HomeRoute(props: RouteProps) {
    return (
        <Route
            icon={<Home />}
            text={props.text ?? "Home"}
            render={{
                type: "page",
                href: HOME_ROUTE,
            }}
            {...props}
        />
    );
}

export function AuthRoute(props: RouteProps) {
    return (
        <Route
            icon={<Lock />}
            text={props.text ?? "Auth"}
            variant={'ghost'}
            render={{
                type: "page",
                href: AUTH_ROUTE,
            }}
            {...props}
        />
    );
}
