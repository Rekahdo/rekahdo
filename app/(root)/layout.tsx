import { HeaderSection } from "@/components/sections/header-section";
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {

    return (
        <>
            <HeaderSection />

            <main>{children}</main>

            <footer>FOOTER</footer>
        </>
    );
}
