import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ImageType } from "../../utils/enum";

let mobile = {
    xxs: "max-md:w-20 max-md:data-[fluid=true]:w-[10%]",
    xs: "max-md:w-25 max-md:data-[fluid=true]:w-[20%]",
    sm: "max-md:w-55 max-md:data-[fluid=true]:w-[40%]",
    lg: "max-md:w-80 max-md:data-[fluid=true]:w-[60%]",
    xl: "max-md:w-100 max-md:data-[fluid=true]:w-[80%]",
    xxl: "max-md:w-140 max-md:data-[fluid=true]:w-[100%]",
}

let tablet = {
    xxs: "md:max-lg:w-20 md:max-lg:data-[fluid=true]:w-[10%]",
    xs: "md:max-lg:w-25 md:max-lg:data-[fluid=true]:w-[20%]",
    sm: "md:max-lg:w-55 md:max-lg:data-[fluid=true]:w-[40%]",
    lg: "md:max-lg:w-80 md:max-lg:data-[fluid=true]:w-[60%]",
    xl: "md:max-lg:w-100 md:max-lg:data-[fluid=true]:w-[80%]",
    xxl: "md:max-lg:w-140 md:max-lg:data-[fluid=true]:w-[100%]", 
}

let desktop = {
    xxs: "lg:w-25 lg:data-[fluid=true]:w-[10%]",
    xs: "lg:w-30 lg:data-[fluid=true]:w-[20%]",
    sm: "lg:w-65 lg:data-[fluid=true]:w-[40%]",
    lg: "lg:w-100 lg:data-[fluid=true]:w-[60%]",
    xl: "lg:w-140 lg:data-[fluid=true]:w-[80%]",
    xxl: "lg:w-200 lg:data-[fluid=true]:w-[100%]",
}

const size = {
    xxs: cn(mobile.xxs, tablet.xxs, desktop.xxs),
    xs: cn(mobile.xs, tablet.xs, desktop.xs),
    sm: cn(mobile.sm, tablet.sm, desktop.sm),
    lg: cn(mobile.lg, tablet.lg, desktop.lg),
    xl: cn(mobile.xl, tablet.xl, desktop.xl),
    xxl: cn(mobile.xxl, tablet.xxl, desktop.xxl),
}

export const ImageVariants = cva(
    "flex overflow-hidden rounded-3xl",
    {
        variants: {
            mobile: mobile,
            tablet: tablet,
            desktop: desktop,
            size: size,
            nonMobile: {
                xxs: cn(tablet.xxs, desktop.xxs),
                xs: cn(tablet.xs, desktop.xs),
                sm: cn(tablet.sm, desktop.sm),
                lg: cn(tablet.lg, desktop.lg),
                xl: cn(tablet.xl, desktop.xl),
                xxl: cn(tablet.xxl, desktop.xxl),
            },
            nonTablet: {
                xxs: cn(mobile.xxs, desktop.xxs),
                xs: cn(mobile.xs, desktop.xs),
                sm: cn(mobile.sm, desktop.sm),
                lg: cn(mobile.lg, desktop.lg),
                xl: cn(mobile.xl, desktop.xl),
                xxl: cn(mobile.xxl, desktop.xxl),
            },
            nonDesktop: {
                xxs: cn(mobile.xxs, tablet.xxs),
                xs: cn(mobile.xs, tablet.xs),
                sm: cn(mobile.sm, tablet.sm),
                lg: cn(mobile.lg, tablet.lg),
                xl: cn(mobile.xl, tablet.xl),
                xxl: cn(mobile.xxl, tablet.xxl),
            }
        },
    }
)

export type ImageType = {
    name?: string;
    src: string;
    alt: string;
};

type ImageCompType = ImageType & VariantProps<typeof ImageVariants> & {
    className?: string;
    fluid?: boolean;
}

export function Image({
    className,
    fluid = false,
    size,
    mobile,
    tablet,
    desktop,
    nonMobile,
    nonTablet,
    nonDesktop,
    ...props
}: ImageCompType) {
    return (
        <div data-fluid={fluid}
            className={cn(ImageVariants({
                size, mobile, tablet, desktop,
                nonMobile, nonTablet, nonDesktop,
                className
            }))}>

            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain" />
        </div>
    )
}


