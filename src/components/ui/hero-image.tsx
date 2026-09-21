import { Image, ImageVariants, type ImageCompType } from "./image"
import type { VariantProps } from "class-variance-authority";

type HeroImageCompType = ImageCompType & VariantProps<typeof ImageVariants> & {
    className?: string;
}

export function HeroImage({
    className, src, alt,
    size='xl',  xs='lg',
     ...props
}: HeroImageCompType) {
    return (
        <div className="w-full h-full flex items-center justify-center lg:justify-end">
            <Image src={src} alt={alt} 
                size={size} fluid={true}
                {...props} />
        </div>
    )
}