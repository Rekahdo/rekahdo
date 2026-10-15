"use client";

import { useRouter } from "next/navigation";
import AppImage from "./image";

export function Logo() {
    const router = useRouter();

    const light = "/images/logo/logo.svg";
    const dark = "/images/logo/logo-dark.svg";
    const alt = "Rekahdo.dev Logo";

    return (
        <a href="/">
            <AppImage src={light} alt={alt} width={100} height={100} eager/>
        </a>
    );
}