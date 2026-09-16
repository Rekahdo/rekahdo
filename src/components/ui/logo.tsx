import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Image, type ImageType } from "./image";
import { themeIsDark } from "../../utils/utils";
import { cn } from "cn";
import { Link } from "./link";

export type LogoType = ImageType & {
    name: string;
    light_src: string;
    dark_src: string;
    alt: string;
}

function Logo({name, light_src, dark_src, alt, ...props}: LogoType) {

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
        "w-20 min-sm:w-30"
    )

    return (
        <Link href="/">
            <Image className={logoStyle} src={src} alt={alt} size={props.size}/>
        </Link>
    )
}

export {Logo}