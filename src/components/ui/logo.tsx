import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Image, ImageVariants, type ImageType } from "./image";
import { themeIsDark } from "../../utils/utils";
import { cn } from "cn";
import { Link } from "./link";
import type { VariantProps } from "class-variance-authority";

export type LogoType = Omit<ImageType, "src"> & VariantProps<typeof ImageVariants> & {
    light_src: string;
    dark_src: string;
    alt: string;
}

export function Logo({light_src, dark_src, alt}: LogoType) {

    const { listen, stop } = useTheme();
    const [src, setSrc] = useState<string>(themeIsDark() ? dark_src : light_src);

    useEffect(() => {
        const observer = listen(() => setSrc(dark_src), () => setSrc(light_src));

        return () => {
            stop(observer);
        }
    }, [])

    const logoStyle = cn(
        "cursor-pointer",
    )

    return (
        <Link href="/">
            <Image className={cn(logoStyle)} src={src} alt={alt} 
                size={"xs"}/>
        </Link>
    )
}