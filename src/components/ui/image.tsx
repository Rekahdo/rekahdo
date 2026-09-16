import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const imgVariants = cva(
    "flex",
    {
        variants: {
            size: {
                sm: "w-20 sm:w-25",
                default: "",
                lg: "w-40 sm:w-50",
                xl: "w-30 sm:w-40",
            }
        },
        defaultVariants: {
            size: "default",
        }
    }
)

export type ImageType = VariantProps<typeof imgVariants> & {
    hidden?: boolean;
    name?: string;
    src: string;
    alt: string;
    className?: string
};

export function Image({ className, size, ...props }: ImageType) {
    return (
        <div className={cn(imgVariants({size, className }))}>
            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain"/>
        </div>
    )
}


