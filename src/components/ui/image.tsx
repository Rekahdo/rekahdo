import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ImageType } from "../../utils/enum";

const mobile = {
    xxs: "max-md:w-20 max-md:data-[fluid=true]:w-[100%] max-md:max-w-20",
    xs: "max-md:w-25 max-md:data-[fluid=true]:w-[100%] max-md:max-w-25",
    sm: "max-md:w-55 max-md:data-[fluid=true]:w-[100%] max-md:max-w-55",
    lg: "max-md:w-80 max-md:data-[fluid=true]:w-[70%] max-md:max-w-80",
    xl: "max-md:w-100 max-md:data-[fluid=true]:w-[70%] max-md:max-w-100",
    xxl: "max-md:w-140 max-md:data-[fluid=true]:w-[90%] max-md:max-w-140",
}

const tablet = {
    xxs: "md:max-lg:w-20 md:max-lg:data-[fluid=true]:w-[100%] md:max-lg:max-w-20",
    xs: "md:max-lg:w-25 md:max-lg:data-[fluid=true]:w-[100%] md:max-lg:max-w-25",
    sm: "md:max-lg:w-55 md:max-lg:data-[fluid=true]:w-[100%] md:max-lg:max-w-55",
    lg: "md:max-lg:w-80 md:max-lg:data-[fluid=true]:w-[70%] md:max-lg:max-w-80",
    xl: "md:max-lg:w-100 md:max-lg:data-[fluid=true]:w-[70%] md:max-lg:max-w-100",
    xxl: "md:max-lg:w-140 md:max-lg:data-[fluid=true]:w-[90%] md:max-lg:max-w-140",
}

const desktop = {
    xxs: "lg:w-25 lg:data-[fluid=true]:w-[100%] lg:max-w-25",
    xs: "lg:w-30 lg:data-[fluid=true]:w-[100%] lg:max-w-30",
    sm: "lg:w-65 lg:data-[fluid=true]:w-[100%] lg:max-w-65",
    lg: "lg:w-100 lg:data-[fluid=true]:w-[100%] lg:max-w-100",
    xl: "lg:w-140 lg:data-[fluid=true]:w-[100%] lg:max-w-140",
    xxl: "lg:w-200 lg:data-[fluid=true]:w-[100%] lg:max-w-200",
}

export const ImageVariants = cva(
    "flex",
    {
        variants: {
            mobile: mobile,
            tablet: tablet,
            desktop: desktop,
            size: {
                xxs: cn(mobile.xxs, tablet.xxs, desktop.xxs),
                xs: cn(mobile.xs, tablet.xs, desktop.xs),
                sm: cn(mobile.sm, tablet.sm, desktop.sm),
                lg: cn(mobile.lg, tablet.lg, desktop.lg),
                xl: cn(mobile.xl, tablet.xl, desktop.xl),
                xxl: cn(mobile.xxl, tablet.xxl, desktop.xxl)
            },
        },
    }
)

export type ImageType = VariantProps<typeof ImageVariants> & {
    name?: string;
    src: string;
    alt: string;
    className?: string;
};

type ImageCompType = ImageType & {
    fluid?: boolean;
}

export function Image({ className, fluid = false, size, mobile, tablet, desktop, ...props }: ImageCompType) {
    return (
        <div data-fluid={fluid}
            className={cn(ImageVariants({ size, mobile, tablet, desktop, className }))}>
            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain" />
        </div>
    )
}


