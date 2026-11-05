'use client'

import { AUTH_ROUTE } from "@/lib/routes";
import { Unauthenticated } from "convex/react";
import Link from "next/link";
import { ReactNode } from "react";

export interface AuthRouteProps {
    children?: ReactNode;
}

export default function AuthRoute(props: AuthRouteProps) {
    return (
        <Unauthenticated>
            <Link href={AUTH_ROUTE}>{props.children ?? 'auth'}</Link>
        </Unauthenticated>
    );
}
