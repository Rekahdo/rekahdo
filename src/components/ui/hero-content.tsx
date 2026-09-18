import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

type TextType = {
    text: string | undefined
};

type ClassNameType = {
    className?: string;
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
            },
            style: {
                default: "",
                gradient: "bg-gradient-to-tr from-red-500 to-cyan-400 bg-clip-text text-transparent",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            style: "default",
        }
    }
)

export function Title({ text, variant, size, style, className }: TextType & ClassNameType & VariantProps<typeof TitleVariant>) {
    return (
        <>
            {
                text &&
                <h1 className={cn(TitleVariant({ variant, size, style, className }))}>
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
    "text-foreground/50 max-md:w-[100%] max-lg:w-[80%]",
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