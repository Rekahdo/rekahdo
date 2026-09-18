import { cn } from "cn"
import { Image, ImageVariants, type ImageType } from "./image"
import type { VariantProps } from "class-variance-authority";

type ClassNameType = {
    className?: string;
}

export function HeroImage({ size, mobile, tablet, desktop, className, src, alt }: ImageType & ClassNameType & VariantProps<typeof ImageVariants>) {
    return (
        <>
            {
                src &&
                <Image src={src} alt={alt} fluid={true} className={cn(ImageVariants({ size, mobile, tablet, desktop, className }))} />
            }
        </>
    )
}