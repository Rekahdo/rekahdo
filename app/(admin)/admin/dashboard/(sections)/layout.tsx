'use client'

import { ReactNode } from "react";
import { Container } from "@/components/shared-ui/container";

export interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {

    return (
        <Container id="" py={'section'} px={'section'} height={'hero'}
            place={'center'} className="*:w-full">

            {props.children}
        </Container>
    );
}
