import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType } from "../../utils/type";

const imgVariants = cva(
    "flex",
    {
        variants: {
            variant: {
                logo: "w-20 min-sm:w-30"
            },
            size: {
                small: "w-20 min-sm:w-25",
                meduim: "w-30 min-sm:w-40",
                large: "w-40 min-sm:w-50",
            }
        },
        defaultVariants: {
            variant: "logo",
            size: "small",
        }
    }
)

export type ImageType = {
    hidden: boolean;
    name: string;
    file_path: string;
};

export type ImageComponentType = ImageType & ClassNameType & {
    alt: string;
};

export function Image({ className, variant, ...props }: ImageComponentType & VariantProps<typeof imgVariants>) {
    return (
        <div className={cn(imgVariants({ variant, className }))}>
            <img src={props.file_path} alt={`${props.alt}`}
                className="w-full"/>
        </div>
    )
}


