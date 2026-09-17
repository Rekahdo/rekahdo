import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { formatNumber } from "../../utils/number";

type TextType = {
    text: string | undefined
};

type ClassNameType = {
    className?: string;
}

const BadgeTextVariant = cva(
    "font-medium text-primary uppercase ",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(
                    "text-xs md:text-sm"
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
    "font-medium text-foreground",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(
                    "text-base md:text-2xl"
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
    "font-extrabold uppercase",
    {
        variants: {
            variant: {
                default: cn(
                    "text-foreground"
                )
            },
            size: {
                default: cn(
                    "text-4xl md:text-5xl lg:text-6xl"
                ),
                lg: "text-3xl md:text-6xl lg:text-7xl"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export function Title({ text, variant, size, className }: TextType & ClassNameType & VariantProps<typeof TitleVariant>) {
    return (
        <>
            {
                text &&
                <h1 className={cn(TitleVariant({ variant, size, className }))}>
                    {text}
                </h1>
            }
        </>
    )
}

const RoleVariant = cva(
    "font-medium",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(
                    "text-xl md:text-2xl lg:text-3xl"
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
    "text-foreground/50 max-lg:px-4",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
            size: {
                default: cn(
                    "text-sm md:text-lg"
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