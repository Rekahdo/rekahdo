import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    
    return (
        <>
            {props.children}
        </>
    );
}
