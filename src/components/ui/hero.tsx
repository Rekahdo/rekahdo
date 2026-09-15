import { type ComponentProps, type ReactElement } from "react";
import { Button, type ButtonType } from "./button";
import { Image, type ImageType } from "./image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType } from "../../utils/type";
import type { Tag } from "./tag";
import { formatNumber } from "../../utils/number";

type TextType = {
    text: string | undefined
};

type ButtonArrayType = {
    btns: ButtonType[] | undefined
};

const BadgeTextVariant = cva(
    "font-medium text-primary uppercase text-xs md:text-sm ",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function BadgeText({ text, variant, className }: TextType & ClassNameType & VariantProps<typeof BadgeTextVariant>) {
    return (
        <>
            {
                text &&
                <p className={cn(BadgeTextVariant({ variant, className }))}>
                    <span className="rotate-90 inline-block mr-2">|</span>
                    {text}
                </p>
            }
        </>
    )
}

const GreetingVariant = cva(
    "font-medium text-base text-foreground md:text-2xl",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Greeting({ text, variant, className }: TextType & ClassNameType & VariantProps<typeof GreetingVariant>) {
    return (
        <>
            {
                text &&
                <p className={cn(GreetingVariant({ variant, className }))}>
                    {text}
                </p>
            }
        </>
    )
}

const TitleVariant = cva(
    "font-extrabold text-4xl text-foreground md:text-6xl uppercase",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Title({ text, variant, className }: TextType & ClassNameType & VariantProps<typeof TitleVariant>) {
    return (
        <>
            {
                text &&
                <h1 className={cn(TitleVariant({ variant, className }))}>
                    {text}
                </h1>
            }
        </>
    )
}

const RoleVariant = cva(
    "font-medium text-xl md:text-3xl",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Role({ text, variant, className }: TextType & ClassNameType & VariantProps<typeof RoleVariant>) {
    return (
        <>
            {
                text &&
                <p className={cn(RoleVariant({ variant, className }))}>
                    {text}
                </p>
            }
        </>
    )
}

const DescriptionVariant = cva(
    "text-foreground/50 text-sm px-4 mlg:p-0 md:text-lg",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Description({ text, variant, className }: TextType & ClassNameType & VariantProps<typeof DescriptionVariant>) {
    return (
        <>
            {
                text &&
                <p className={cn(DescriptionVariant({ variant, className }))}>
                    {text}
                </p>
            }
        </>
    )
}

const CtaVariant = cva(
    "flex flex-wrap justify-center gap-6 lg:justify-start",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function CTA({ btns, variant, className }: ClassNameType & ButtonArrayType & VariantProps<typeof CtaVariant>) {
    return (
        <>
            {
                btns &&
                <div className={cn(CtaVariant({ variant, className }))}>
                    <Button {...btns[0]} variant={"default"} size={"lg"} />
                    <Button {...btns[1]} variant={"outline"} size={"lg"} />
                    <Button {...btns[2]} variant={"secondary"} size={"lg"} />
                </div>
            }
        </>
    )
}

const HeroImageVariant = cva(
    "w-full",
    {
        variants: {
            variant: {
                default: cn(
                ),
            },
            size: {
                sm: "aspect-[2/1]",
                default: cn(
                    "aspect-[3/2]"
                ),
                lg: "aspect-[5/4]",
                xl: "aspect-[1]",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function HeroImage({ variant, size, className, src, alt }: ImageType & ClassNameType & VariantProps<typeof HeroImageVariant>) {
    return (
        <>
            {
                src &&
                <Image src={src} alt={alt} className={cn(HeroImageVariant({ variant, size, className }))} />
            }
        </>
    )
}

const SocialProfTextVariant = cva(
    "flex items-center flex-wrap max-lg:justify-center gap-4",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function SocialProfText({ count, variant, className }: { count: number } & ClassNameType & VariantProps<typeof SocialProfTextVariant>) {
    return (
        <>
            {
                <div className={cn(SocialProfTextVariant({ variant, className }))}>
                    <div className="flex -space-x-2">
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-1.webp"
                            alt="team img-1" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-2.webp"
                            alt="team img-2" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-3.webp"
                            alt="team img-3" />
                    </div>
                    <div className="text-slate-600 text-base dark:text-slate-400">
                        Over
                        <span className="font-semibold"> {formatNumber(count)} </span>
                        Professionals trust us
                    </div>
                </div>
            }
        </>
    )
}

export type LocationType = {
    hidden: boolean;
    state: string;
    country: string;
}

type HeroCompType = {
    badge?: ReactElement<ComponentProps<typeof BadgeText>, typeof BadgeText>;
    greetings?: ReactElement<ComponentProps<typeof Greeting>, typeof Greeting>;
    title: ReactElement<ComponentProps<typeof Title>, typeof Title>;
    role?: ReactElement<ComponentProps<typeof Role>, typeof Role>;
    description: ReactElement<ComponentProps<typeof Description>, typeof Description>;
    tags?: ReactElement<ComponentProps<typeof Tag>, typeof Tag>;
    ctaBtns?: ReactElement<ComponentProps<typeof CTA>, typeof CTA>;
    socialProfText?: ReactElement<ComponentProps<typeof SocialProfText>, typeof SocialProfText>;
    heroImage?: ReactElement<ComponentProps<typeof HeroImage>, typeof HeroImage>;
    location?: LocationType;
    mobile_position?: "top" | "bottom"
    desktop_position?: "right" | "left"
}

const HeroVariant = cva(
    "",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(

                )
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Hero({ variant, className, mobile_position = "top", desktop_position = "right", ...props }: HeroCompType & ClassNameType & VariantProps<typeof HeroVariant>) {

    const image = 
    <>{
        <div data-mp={mobile_position} 
            className={"data-[mp=top]:max-md:row-start-1"}>
            {props.heroImage}
        </div>
    }</>

    return (
        <div data-slot="hero" className="grid lg:grid-cols-2 justify-center items-center gap-x-4 gap-y-8 max-md:py-8  overflow-hidden">

            {desktop_position === "left" && image}

            <div className="grid text-center lg:mx-0 lg:text-left gap-6">
                {
                    (props.badge || props.greetings
                        || props.title || props.role) &&
                    <div className="grid gap-2 md:gap-4">
                        {props.badge}
                        {props.greetings}
                        {props.title}
                        {props.role}
                    </div>
                }

                {props.description}
                {props.tags}
                {props.ctaBtns}
                {props.socialProfText}
            </div>

            {desktop_position === "right" && image}
        </div>
    )
}