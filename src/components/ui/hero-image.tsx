import { cn } from "cn";
import { justify, lgJustify, mdJustify, smJustify, xsJustify } from "./css-types";
import { Image, ImageVariants, type ImageCompType } from "./image"
import { cva, type VariantProps } from "class-variance-authority";

const heroImageVariants = cva(
    "w-full flex items-center",
    {
        variants: {
            justify: justify,
            xsJustify: xsJustify,
            smJustify: smJustify,
            mdJustify: mdJustify,
            lgJustify: lgJustify,
        },
        defaultVariants:{
            justify:'center',
        }
    }
)

type HeroImageCompType = ImageCompType & VariantProps<typeof ImageVariants> 
    & VariantProps<typeof heroImageVariants> & {
    className?: string;
}

export function HeroImage({
    className, src, alt,
    justify, xsJustify, smJustify, mdJustify, lgJustify,
     ...props
}: HeroImageCompType) {
    return (
        <div className={cn(heroImageVariants({
            justify, xsJustify, smJustify, mdJustify, lgJustify
        }))}>
            <Image {...props} src={src} alt={alt} 
                xsSm={"lg"} md={"sm"} lg={"xxl"} fluid />
        </div>
    )
}