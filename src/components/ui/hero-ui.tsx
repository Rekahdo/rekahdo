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
    "font-medium text-primary uppercase",
    {
        variants: {
            variant: {
                default: cn(

                )
            },
        },
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

const RoleVariant = cva(
    "font-medium text-foreground",
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
    "text-muted-foreground max-md:w-[100%] max-lg:w-[80%]",
    {
        variants: {
            variant: {
                default: cn(
                    ""
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
    "flex items-center flex-wrap max-lg:justify-center gap-4 text-foreground",
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
                        <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://readymadeui.com/team-1.webp"
                            alt="team img-1" />
                        <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://readymadeui.com/team-2.webp"
                            alt="team img-2" />
                        <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://readymadeui.com/team-3.webp"
                            alt="team img-3" />
                    </div>
                    <div className="text-muted-foreground text-base">
                        Over
                        <span className="font-semibold text-foreground"> {formatNumber(count)} </span>
                        Professionals trust us
                    </div>
                </div>
            }
        </>
    )
}

export type LocationType = {
    state: string;
    country: string;
}