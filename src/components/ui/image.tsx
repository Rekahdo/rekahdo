import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

export const ImageVariants = cva(
    "flex",
    {
        variants: {
            size: {
                xxs: "w-15 md:w-20 lg:w-25",
                xs: "w-20 md:w-25 lg:w-30",
                sm: "w-40 md:w-55 lg:w-65",
                default: "w-50 md:w-65 lg:w-80",
                lg: "w-60 md:w-80 lg:w-100",
                xl: "w-70 md:w-100 lg:w-120",
                xxl: "w-80 md:w-120 lg:w-160",
            },
            mobile: {
                xxs: "max-md:w-15",
                xs: "max-md:w-20",
                sm: "max-md:w-40",
                default: "",
                lg: "max-md:w-60",
                xl: "max-md:w-70",
                xxl: "max-md:w-80",
            },
            tablet: {
                xxs: "md:max-lg:w-20",
                xs: "md:max-lg:w-25",
                sm: "md:max-lg:w-55",
                default: "",
                lg: "md:max-lg:w-80",
                xl: "md:max-lg:w-100",
                xxl: "md:max-lg:w-120",
            },
            desktop: {
                xxs: "lg:w-25",
                xs: "lg:w-30",
                sm: "lg:w-65",
                default: "",
                lg: "lg:w-100",
                xl: "lg:w-120",
                xxl: "lg:w-160",
            }
        },
        defaultVariants: {
            size: "default",
            mobile: "default",
            tablet: "default",
            desktop: "default"
        }
    }
)

export type ImageType = VariantProps<typeof ImageVariants> & {
    name?: string;
    src: string;
    alt: string;
    className?: string
};

export function Image({ className, size, mobile, tablet, desktop, ...props }: ImageType) {
    return (
        <div className={cn(ImageVariants({size, mobile, tablet, desktop, className}))}>
            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain"/>
        </div>
    )
}


