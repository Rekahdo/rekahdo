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
    badge?: ReactElement<ComponentProps<typeof BadgeText>, typeof BadgeText>;
    greetings?: ReactElement<ComponentProps<typeof Greeting>, typeof Greeting>;
    title?: ReactElement<ComponentProps<typeof H1>, typeof H1>;
    role?: ReactElement<ComponentProps<typeof Role>, typeof Role>;
    description?: ReactElement<ComponentProps<typeof Description>, typeof Description>;
    tags?: ReactElement<ComponentProps<typeof Tags>, typeof Tags>;
    ctaBtns?: ReactNode[];
    socialProfText?: ReactElement<ComponentProps<typeof SocialProfText>, typeof SocialProfText>;
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