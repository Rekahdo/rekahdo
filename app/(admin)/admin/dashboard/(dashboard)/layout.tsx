'use client'

import { ReactNode } from "react";
import { Container } from "@/components/shared-ui/container";

export interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {

    return (
        <Container id="" py={'section'}>
            {props.children}
        </Container>
    );
}
