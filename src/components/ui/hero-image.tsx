import { Image, ImageVariants, type ImageType } from "./image"
import type { VariantProps } from "class-variance-authority";

type HeroImageCompType = ImageType & VariantProps<typeof ImageVariants> &{
    className?: string;
}

export function HeroImage({
    className, src, alt,
    ...props
}: HeroImageCompType) {
    return (
        <>
            {
                src &&
                <Image src={src} alt={alt} fluid={true} {...props} />
            }
        </>
    )
}