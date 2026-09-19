import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ReactNode } from "react";

const TagVariant = cva(
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

export type TagType = {
    text: string;
    emoji?: ReactNode;
};

type TagCompType = TagType & VariantProps<typeof TagVariant>

export function Tag({ text, emoji, variant }: TagCompType) {
    return (
        <p className={cn(TagVariant({ variant }))}>
            {text} {emoji}
        </p>
    )
}