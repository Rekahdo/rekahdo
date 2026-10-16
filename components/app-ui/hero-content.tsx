import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { documentData } from "@/data/document";

export const heroContentVariants = cva(
    cn("w-full flex flex-col gap-6 lg:gap-8 text-foreground"),
    {
        variants: {
        },
        defaultVariants: {
        },
    }
);

type HeroContentCompType = VariantProps<typeof heroContentVariants> & {
    badge?: ReactNode;
    greetings?: ReactNode;
    title?: ReactNode;
    role?: ReactNode;
    description?: ReactNode;
    tags?: ReactNode;
    ctaBtns?: ReactNode;
    socialProfText?: ReactNode;
    heroImage?: ReactNode;
    location?: string;
    className?: string;
}

export async function HeroContent({
    badge,
    greetings,
    title,
    role,
    description,
    tags,
    socialProfText,
    ctaBtns,
    className,
}: HeroContentCompType) {

    return (
        <div className={cn(heroContentVariants(), className)}>
            {badge}
            {greetings}
            {title}
            {role}
            {description}
            {tags}
            {ctaBtns}
            {socialProfText}
        </div>
    )
}