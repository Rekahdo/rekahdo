import { cn } from "cn";
import AppImage from "./image";
import { NavigationLink } from "./navigation";
import { HERO_ID } from "../sections/hero-section";

export function Logo() {

    const light = "/images/logo/logo.svg";
    const dark = "/images/logo/logo-dark.svg";
    const alt = "Rekahdo.dev Logo";

    return (
        <NavigationLink
            className={cn(
                "w-25 sm:w-30 aspect-10/4 select-none"
            )}
            key={"hero-btn-3"}
            link={{
                href: HERO_ID,
                type: 'scroll',
                label: <AppImage src={light} srcDark={dark} alt={alt}
                    width={100} />,
            }}
        />
    )
}