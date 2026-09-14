import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType } from "../../utils/type";


type TextArrayType = {
    texts: string[] | undefined
};

const TagVariant = cva(
    "text-xs font-bold",
    {
        variants: {
            variant: {
                default: cn(
                    "py-2 px-4 border-2 border-border rounded-full"
                )
            },
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

const tagConStyle = cn(
    "flex flex-col items-center gap-3",
    "md:flex-row lg:gap-3"
)

export function Tag({ texts, variant, className }: TextArrayType & ClassNameType & VariantProps<typeof TagVariant>) {
    return (
        <>
            {
                texts &&
                <div className={tagConStyle}>
                    {
                        texts.map(text => (
                            <p className={cn(TagVariant({ variant, className }))}>
                                {text}
                            </p>
                        ))
                    }
                </div>
            }
        </>
    )
}