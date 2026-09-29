import { Image } from "./image";
import { cn } from "cn";
import Link from "next/link";

export function Logo() {

    const light = "/images/logo/logo.svg";
    const dark = "/images/logo/logo-dark.svg";
    const alt = "Rekahdo.dev Logo";
    
    return (
        <Link href="/" tabIndex={1}>
            <Image className={cn("cursor-pointer text-foreground")}
                src={light} darkSrc={dark} alt={alt} size={"xs"} />
        </Link>
    )
}