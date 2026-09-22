import { cn } from "cn";
import { justify } from "./css-types";
import { Image, ImageVariants, type ImageCompType } from "./image"
import { cva, type VariantProps } from "class-variance-authority";

const heroImageVariants = cva(
    "w-full flex items-center",
    {
        variants: {
            justify: justify,
            xsJustify: {
                start: `max-sm:${justify.start}`,
                center: `max-sm:${justify.center}`,
                end: `max-sm:${justify.end}`,
            },
            smJustify: {
                start: `sm:max-md:${justify.start}`,
                center: `sm:max-md:${justify.center}`,
                end: `sm:max-md:${justify.end}`,
            },
            mdJustify: {
                start: `md:max-lg:${justify.start}`,
                center: `md:max-lg:${justify.center}`,
                end: `md:max-lg:${justify.end}`,
            },
            lgJustify: {
                start: `lg:${justify.start}`,
                center: `lg:${justify.center}`,
                end: `lg:${justify.end}`,
            },
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