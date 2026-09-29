import { HeaderSection } from "@/components/sections/header-section";
import { HeaderProvider } from "@/contexts/HeaderProvider";
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {

    return (
        <>
            <HeaderProvider>
                <HeaderSection />
            </HeaderProvider>

            <main>{children}</main>

            <footer>FOOTER</footer>
        </>
    );
}
