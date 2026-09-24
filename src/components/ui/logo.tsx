import { Image, ImageVariants, type ImageType} from "./image";
import { cn } from "cn";
import { Link } from "./link";
import type { VariantProps } from "class-variance-authority";

export type LogoType = Omit<ImageType, "src"> & {
    light_src: string;
    dark_src: string;
    alt: string;
}

type LogoCompType = LogoType & VariantProps<typeof ImageVariants>

export function Logo({
    light_src, dark_src, alt,
    ...props
}: LogoCompType) {

    return (
        <Link href="/">
            <Image {...props} className={cn("cursor-pointer text-foreground")} 
                src={light_src} darkSrc={dark_src} alt={alt} 
                size={"xs"}/>
        </Link>
    )
}