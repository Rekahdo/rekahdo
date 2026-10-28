'use client'

import { formatNumber } from "@/lib/number";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { buttonVariants } from "../ui/button";
import { Download } from "lucide-react";
import { scrollToId } from "../shared-ui/navigation";
import { STACK_ID } from "../sections/stack-section";
import { CONTACT_ID } from "../sections/contact-section";
import { buttonImplVariants, DownloadBtn, ScrollBtn } from "../shared-ui/button-impl";
import { useWidthMedia } from "@/hooks/useMedia";
import { CONTACT_FORM_ID } from "./send-message";

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
        <p className={cn("font-medium text-foreground text-lg sm:text-xl mt-3", className)}>
            {text}
        </p>
    )
}

export function Role({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground capitalize underline", className)}>
            {text}
        </p>
    )
}

export function Description({ text, className }: TextType & ClassNameType) {
    return (
        <p className={cn("text-muted-foreground text-sm md:text-lg max-lg:text-center max-lg:w-[80%] mx-auto mt-3", className)}>
            {text}
        </p>
    )
}

export interface CtaBtnsProps {
    name: string;
    href: string;
    className?: string;
}

export default function CtaBtns({ name, href, className }: CtaBtnsProps) {
    const media = useWidthMedia().lg;

    return (
        <div className={cn("flex flex-wrap gap-4 items-center *:grow *:min-w-30 *:max-w-40 max-lg:justify-center mt-3", className)}>
            <DownloadBtn text="Download CV" href={href} filename={name} height={'lg'} className="shadow-sm" />
            <ScrollBtn text="Tech Stack" id={STACK_ID} height={'lg'} variant='secondary' className="shadow-sm" />
            <ScrollBtn text="Contact" id={(media ? CONTACT_ID : CONTACT_FORM_ID)} height={'lg'} variant='outline' className="shadow-sm" />
        </div>
    );
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