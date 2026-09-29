import { formatNumber } from "@/lib/number";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

type TextType = {
    text: string | undefined
};

type ClassNameType = {
    className?: string;
}

export function BadgeText({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("font-medium text-primary uppercase", className)}>
            <span className="rotate-90 inline-block mr-2">|</span>
            {text}
        </p>
    )
}

export function Greeting({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("font-medium text-foreground", className)}>
            {text}
        </p>
    )
}

export function Role({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("font-medium text-foreground text-xl md:text-2xl lg:text-3xl", className)}>
            {text}
        </p>
    )
}

export function Description({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("text-muted-foreground text-sm md:text-lg", className)}>
            {text}
        </p>
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