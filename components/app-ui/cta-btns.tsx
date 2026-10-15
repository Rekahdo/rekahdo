'use client'

import { cn } from "cn";
import { buttonVariants } from "../ui/button";
import { Download } from "lucide-react";
import { scrollToId } from "../shared-ui/navigation";
import { STACK_ID } from "../sections/stack-section";
import { CONTACT_ID } from "../sections/contact-section";
import { buttonImplVariants } from "../shared-ui/button-impl";

export interface CtaBtnsProps {
    name: string;
    href: string;
    className?: string;
}

export default function CtaBtns({ name, href, className }: CtaBtnsProps) {
    return (
        <div className={cn("flex flex-wrap gap-4 items-center *:grow *:min-w-30 *:max-w-40 max-lg:justify-center", className)}>
            <a
                href={href}
                download={name}
                className={cn(
                    buttonVariants({ size: 'lg' }),
                    buttonImplVariants({ height: 'lg' }),
                    "shadow-lg")}
            >

                <Download />
                Download CV
            </a>

            <p
                onClick={() => scrollToId({ id: STACK_ID })}
                className={cn(
                    buttonVariants({ size: 'lg', variant: 'secondary' }),
                    buttonImplVariants({ height: 'lg' }),
                    "shadow-sm")}
            >
                Tech Stack
            </p>

            <p
                onClick={() => scrollToId({ id: CONTACT_ID })}
                className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    buttonImplVariants({ height: 'lg' }),
                    "shadow-sm")}
            >
                Contact
            </p>

        </div>
    );
}
