import { cn } from "cn"
import { Image, ImageVariants, type ImageType } from "./image"
import type { VariantProps } from "class-variance-authority";

export type ClassNameType = {
    className?: string;
}

export function HeroImage({ size, mobile, tablet, desktop, className, src, alt }: ImageType & ClassNameType & VariantProps<typeof ImageVariants>) {
    return (
        <>
            {
                src &&
                <Image src={src} alt={alt} className={cn(ImageVariants({ size, mobile, tablet, desktop, className }))} />
            }
        </>
    )
}