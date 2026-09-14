import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType } from "../../utils/type";

const imgVariants = cva(
    "flex",
    {
        variants: {
            variant: {
                default: "",
                logo: "w-20 min-sm:w-30"
            },
            size: {
                default: "",
                small: "w-20 min-sm:w-25",
                meduim: "w-30 min-sm:w-40",
                large: "w-40 min-sm:w-50",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export type ImageType = {
    hidden?: boolean;
    name?: string;
    src: string;
    alt: string;
};

export type ImageComponentType = ImageType & ClassNameType

export function Image({ className, variant, ...props }: ImageComponentType & VariantProps<typeof imgVariants>) {
    return (
        <div className={cn(imgVariants({ variant, className }))}>
            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain"/>
        </div>
    )
}


