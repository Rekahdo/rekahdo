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
        state: string;
    country: string;
}