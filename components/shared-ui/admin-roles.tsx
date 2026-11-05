'use client'

import { AdminProvider, useAdmin } from "@/contexts/AdminProvider";
import { ReactNode } from "react";

export interface RoleProps {
    role: string;
    children: ReactNode;
}

export function Role(props: RoleProps) {
    const authRole = "admin";

    if (!authRole)
        return null;

    if (props.role !== "admin")
        if (props.role !== authRole)
            return null

    return (
        <>{props.children}</>
    );
}

export interface AccessProps {
    className?: string;
    children: ReactNode;
}

export function Admin(props: AccessProps) {
    return (
        <Role role="admin">
            {props.children}
        </Role>
    );
}

export function Editor(props: AccessProps) {
    return (
        <Role role="editor">
            {props.children}
        </Role>
    );
}