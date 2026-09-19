import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ReactNode } from "react";

const TagVariant = cva(
    "text-[0.6rem] sm:text-xs sm:font-bold",
    {
        variants: {
            variant: {
                outline: cn(
                    "py-1 px-4 sm:py-2 border-2 border-border rounded-full"
                ),
                filled: "",
            },
        },
        defaultVariants: {
            variant: "outline",
        }
    }
)

const TagsVariant = cva(
    cn(
        "flex flex-wrap items-center gap-3",
        "max-lg:justify-center"
    ),
    {
        variants: {
            justify: {
                center: ""
            }
        },
    }
)

export type TagType = {
    text: string;
    emoji?: ReactNode;
};

type TagCompType = TagType & VariantProps<typeof TagVariant>

type TagsCompType = VariantProps<typeof TagsVariant> 
    & VariantProps<typeof TagVariant> & {
    tags: TagType[]
};

export function Tag({ text, emoji, variant }: TagCompType) {
    return (
        <p className={cn(TagVariant({ variant }))}>
            {text} {emoji}
        </p>
    )
}

export function Tags({ tags, variant, justify }: TagsCompType) {
    return (
        <>
            {
                tags &&
                <div className={cn(TagsVariant({ justify }))}>
                    {
                        tags.map((tag, i) => (
                            <Tag key={i} {...tag} variant={variant}/>
                        ))
                    }
                </div>
            }
        </>
    )
}