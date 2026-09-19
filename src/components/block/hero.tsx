import { type ComponentProps, type ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { Tag } from "../ui/tag";
import type { BadgeText, LocationType, SocialProfText } from "../ui/hero-ui";
import type { HeroImage } from "../ui/hero-image";
import type { CTA } from "../ui/cta";
import type { Description, Greeting, Role } from "../ui/hero-content";
import type { H1 } from "../ui/headings";

const HeroVariant = cva(
    cn(
        "",
    ),
    {
        variants: {
            variant: {
                default: cn(
                    "grid items-center gap-10",
                    "lg:px-20 lg:grid-cols-2",
                )
            },
            size: {
                default: cn(

                )
            },
            desktopPosition: {
                left: "",
                right: "",
                top: "lg:flex lg:flex-col lg:gap-20 lg:max-h-auto lg:py-20",
                bottom: "lg:flex lg:flex-col lg:gap-20 lg:max-h-auto lg:py-20",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            desktopPosition: "right",
        }
    }
)

export const heroImageVariants = cva(
    "w-full flex justify-center items-center",
    {
        variants: {
            
        },
        defaultVariants: {
            
        },
    }
);

export const heroContentVariants = cva(
    [
        "grid w-full gap-6 lg:gap-8 max-lg:px-8",
        "max-lg:text-center max-lg:justify-items-center",
    ],
    {
        variants: {
            mobilePosition: {
                top: "max-lg:row-start-1",
                bottom: "max-lg:row-start-2",
            },
            desktopPosition: {
                left: "lg:order-first",
                right: "lg:order-last",
                top: "lg:order-0",
                bottom: "lg:order-1",
            },
            align: {
                start: "text-start justify-items-start",
                center: "text-center justify-items-center mx-auto w-[90%] lg:w-[70%]",
                end: "text-end justify-items-end",
            }
        },
        defaultVariants: {
            mobilePosition:'bottom',
            desktopPosition:'left',
            align: "start",
        },
    }
);

type HeroCompType = VariantProps<typeof HeroVariant> & VariantProps<typeof heroImageVariants> & VariantProps<typeof heroContentVariants> & {
    className?: string;
    badge?: ReactElement<ComponentProps<typeof BadgeText>, typeof BadgeText>;
    greetings?: ReactElement<ComponentProps<typeof Greeting>, typeof Greeting>;
    title?: ReactElement<ComponentProps<typeof H1>, typeof H1>;
    role?: ReactElement<ComponentProps<typeof Role>, typeof Role>;
    description?: ReactElement<ComponentProps<typeof Description>, typeof Description>;
    tags?: ReactElement<ComponentProps<typeof Tag>, typeof Tag>[];
    ctaBtns?: ReactElement<ComponentProps<typeof CTA>, typeof CTA>;
    socialProfText?: ReactElement<ComponentProps<typeof SocialProfText>, typeof SocialProfText>;
    heroImage?: ReactElement<ComponentProps<typeof HeroImage>, typeof HeroImage>;
    location?: LocationType;
}

export function Hero({
    variant,
    className,
    mobilePosition,
    desktopPosition,
    align,
    heroImage,
    badge,
    greetings,
    title,
    role,
    description,
    tags,
    ctaBtns,
    socialProfText,
}: HeroCompType) {
    return (
        <div data-slot="hero" className={cn(HeroVariant({ 
            variant, desktopPosition, className 
        }))}>

            {(badge || greetings || title || role || description
                || tags || ctaBtns || socialProfText) &&

                <div className={cn(heroContentVariants({ 
                    mobilePosition, desktopPosition, align
                }))}>
                    {
                        (badge || greetings || title || role) &&
                        <div className="grid gap-4 md:gap-6">
                            {badge}
                            {greetings}
                            {title}
                            {role}
                        </div>
                    }

                    {description}
                    {tags}
                    {ctaBtns}
                    {socialProfText}
                </div>
            }

            {heroImage &&
                <div className={cn(heroImageVariants({}))}>
                    {heroImage}
                </div>
            }

        </div>
    )
}