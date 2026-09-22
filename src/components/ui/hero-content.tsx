import { type ComponentProps, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { Tags } from "../ui/tag";
import type { BadgeText, Description, Greeting, LocationType, Role, SocialProfText } from "../ui/hero-ui";
import type { HeroImage } from "../ui/hero-image";
import type { H1 } from "../ui/headings";
import type { Buttons } from "../ui/button";
import { justify, lgJustify, mdJustify, smJustify, xsJustify } from "./css-types";

export const heroContentVariants = cva(
    cn("w-full grid gap-6 lg:gap-8"),
    {
        variants: {
            justify: justify,
            xsJustify: xsJustify,
            smJustify: smJustify,
            mdJustify: mdJustify,
            lgJustify: lgJustify,
        }, 
        defaultVariants: {
            justify:'center',
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
    ctaBtns?: ReactElement<ComponentProps<typeof Buttons>, typeof Buttons>;
    socialProfText?: ReactElement<ComponentProps<typeof SocialProfText>, typeof SocialProfText>;
    heroImage?: ReactElement<ComponentProps<typeof HeroImage>, typeof HeroImage>;
    location?: LocationType;
}

export function HeroContent({
    justify, xsJustify, smJustify, mdJustify, lgJustify,
    badge,
    greetings,
    title,
    role,
    description,
    tags,
    ctaBtns,
    socialProfText,
}: HeroContentCompType) {
    return (
        <div className={cn(heroContentVariants({
            justify, xsJustify, smJustify, mdJustify, lgJustify
        }))}>
            <div className="grid gap-2 lg:gap-4">
                {badge}
                {greetings}
                {title}
                {role}
            </div>
            
            {description}
            {tags}
            {ctaBtns}
            {socialProfText}
        </div>
    )
}