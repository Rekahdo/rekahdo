'use client'

import { ReactNode } from "react";

export const ADMIN_ROUTES = {
    auth: "/admin/auth",
    login: "/admin/auth/login",
    signup: "/admin/auth/signup",
    dashboard: {
        root: "/admin/dashboard",
        about: "/admin/dashboard/about",
        contact: "/admin/dashboard/contact",
        footer: "/admin/dashboard/footer",
        header: "/admin/dashboard/header",
        hero: "/admin/dashboard/hero",
        projects: "/admin/dashboard/project",
        stack: "/admin/dashboard/stack",
    },
} as const;

export const ADMIN_AUTH = ADMIN_ROUTES.auth;
export const ADMIN_SIGNUP = ADMIN_ROUTES.signup;
export const ADMIN_LOGIN = ADMIN_ROUTES.login;
export const ADMIN_DASHBOARD = ADMIN_ROUTES.dashboard;

export interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>{props.children}</>
    )
}
