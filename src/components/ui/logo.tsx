import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Image } from "./image";
import { themeIsDark } from "../../utils/utils";
import { cn } from "cn";
import { Link } from "./link";

export type LogoType = {
    hidden: boolean;
    name: string;
    light_src: string;
    dark_src: string;
    alt: string;
}

function Logo(data: LogoType) {

    const { listen, stop } = useTheme();
    const [src, setSrc] = useState<string>(themeIsDark() ? data.dark_src : data.light_src);

    useEffect(() => {
        const observer = listen(() => setSrc(data.dark_src), () => setSrc(data.light_src));

        return () => {
            stop(observer);
        }
    }, [])

    const logoStyle = cn(
        "cursor-pointer"
    )

    return (
        <Link variant={"img"} href="/">
            <Image className={logoStyle} variant={"logo"} {...data} src={src}/>
        </Link>
    )
}

export {Logo}