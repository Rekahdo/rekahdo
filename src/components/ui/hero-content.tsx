import { type ComponentProps, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { Tags } from "../ui/tag";
import type { BadgeText, LocationType, SocialProfText } from "../ui/hero-ui";
import type { HeroImage } from "../ui/hero-image";
import type { Description, Greeting, Role } from "../ui/hero-info";
import type { H1 } from "../ui/headings";
import type { Buttons } from "../ui/button";

export const heroContentVariants = cva(
    cn("grid gap-6 lg:gap-8"),
    {
        variants: {
            justify: {
                start: "text-start justify-items-start",
                center: "text-center justify-items-center mx-auto",
                end: "text-end justify-items-end",
            },
            xsJustify: {
                start: "max-sm:text-start max-sm:justify-items-start",
                center: "max-sm:text-center max-sm:justify-items-center max-sm:mx-auto",
                end: "max-sm:text-end max-sm:justify-items-end",
            },
            smJustify: {
                start: "sm:max-md:text-start sm:max-md:justify-items-start",
                center: "sm:max-md:text-center sm:max-md:justify-items-center sm:max-md:mx-auto",
                end: "sm:max-md:text-end sm:max-md:justify-items-end",
            },
            mdJustify: {
                start: "md:max-lg:text-start md:max-lg:justify-items-start",
                center: "md:max-lg:text-center md:max-lg:justify-items-center md:max-lg:mx-auto",
                end: "md:max-lg:text-end md:max-lg:justify-items-end",
            },
            lgJustify: {
                start: "lg:text-start lg:justify-items-start",
                center: "lg:text-center lg:justify-items-center lg:mx-auto",
                end: "lg:text-end lg:justify-items-end",
            },
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
    justify: align, xsJustify: xsJustify, smJustify, mdJustify, lgJustify,
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
            justify: align, xsJustify: xsJustify, smJustify, mdJustify, lgJustify
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