import { ReactNode, type ComponentProps, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { Tags } from "./tag";
import type { BadgeText, Description, Greeting, Role, SocialProfText } from "./hero-ui";
import type { H1 } from "../shared-ui/headings";

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
    ctaBtns?: ReactNode[];
    socialProfText?: ReactNode;
    heroImage?: ReactNode;
    location?: string;
    className?: string;
}

export function HeroContent({
    badge,
    greetings,
    title,
    role,
    description,
    tags,
    ctaBtns,
    socialProfText,
    className,
}: HeroContentCompType) {
    return (
        <div className={cn(heroContentVariants(), className)}>
            <div className={cn("grid gap-2 lg:gap-4", className)}>
                {badge}
                {greetings}
                {title}
                {role}
            </div>

            {description}
            {tags}

            {ctaBtns &&
                <div className={cn("flex flex-wrap gap-4 items-center", className)}>
                    {ctaBtns.map((btn) => (btn))}
                </div>
            }

            {socialProfText}
        </div>
    )
}