import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { buttonVariants } from "../ui/button";
import { STACK_ID } from "../sections/stack-section";
import { scrollToId } from "../shared-ui/navigation";
import { CONTACT_ID } from "../sections/contact-section";
import { Download } from "lucide-react";
import { documentData } from "@/data/document";

export const heroContentVariants = cva(
    cn("w-full flex flex-col gap-6 lg:gap-8 text-foreground"),
    {
        variants: {
        },
        defaultVariants: {
        },
    }
);

type HeroContentCompType = VariantProps<typeof heroContentVariants> & {
    badge?: ReactNode;
    greetings?: ReactNode;
    title?: ReactNode;
    role?: ReactNode;
    description?: ReactNode;
    tags?: ReactNode;
    ctaBtns?: ReactNode;
    socialProfText?: ReactNode;
    heroImage?: ReactNode;
    location?: string;
    className?: string;
}

export async function HeroContent({
    badge,
    greetings,
    title,
    role,
    description,
    tags,
    socialProfText,
    ctaBtns,
    className,
}: HeroContentCompType) {

    const cv = (await documentData).downloadCv;

    return (
        <div className={cn(heroContentVariants(), className)}>
            {badge}
            {greetings}
            {title}
            {role}
            {description}
            {tags}
            {ctaBtns}
            {socialProfText}
        </div>
    )
}