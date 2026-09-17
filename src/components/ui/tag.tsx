import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType } from "../../data/type";


type TextArrayType = {
    texts: string[] | undefined
};

const TagChildVariant = cva(
    "text-[0.6rem] sm:text-xs sm:font-bold",
    {
        variants: {
            variant: {
                default: cn(
                    "py-1 px-4 sm:py-2 border-2 border-border rounded-full"
                )
            },
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

const TagVariant = cva(
    cn(
        "flex flex-wrap items-center gap-3",
        "max-lg:justify-center"
    ),
    {
        variants: {
            section: {
                hero: ""
            }
        },
    }
)

export function Tag({ texts, variant, section, className }: TextArrayType & ClassNameType & VariantProps<typeof TagVariant> & VariantProps<typeof TagChildVariant>) {
    return (
        <>
            {
                texts &&
                <div className={cn(TagVariant({ section }))}>
                    {
                        texts.map((text, index) => (
                            <p key={index} className={cn(TagChildVariant({ variant, className }))}>
                                {text}
                            </p>
                        ))
                    }
                </div>
            }
        </>
    )
}