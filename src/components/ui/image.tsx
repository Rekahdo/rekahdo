import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const imgVariants = cva(
    "flex",
    {
        variants: {
            size: {
                default: "",
                small: "w-20 min-sm:w-25",
                meduim: "w-30 min-sm:w-40",
                large: "w-40 min-sm:w-50",
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


