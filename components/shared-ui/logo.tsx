import { cn } from "cn";
import Link from "next/link";
import Image from "./image";

export function Logo() {

    const light = "/images/logo/logo.svg";
    const dark = "/images/logo/logo-dark.svg";
    const alt = "Rekahdo.dev Logo";

    return (
        <Link href="/" className="w-25 sm:w-30 aspect-10/4">
            <Image src={light} srcDark={dark} alt={alt} 
                width={100} />
        </Link>
    )
}