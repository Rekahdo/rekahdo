'use client'

import { cn } from "cn";
import { ElementType, MouseEvent, ReactNode } from "react";
import { hover } from "./_css";
import { NavigationLink, scrollToId } from "./navigation";
import { CONTACT_ID } from "../sections/contact-section";
import Link from "next/link";

export interface PingProps {
    bg?: string;
    waveBg?: string;
    size?: string;
    animate?: boolean;
    icon?: ReactNode;
    className?: string;
}

export function Ping({
    bg = "bg-emerald-600 dark:bg-emerald-400",
    waveBg = bg,
    size = "size-2",
    animate = true,
    icon,
    className,
}: PingProps) {
    return (
        <span className={cn("relative flex", size, className)}>
            {animate && (
                <span className={cn(waveBg,
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                )} />
            )}

            <span className={cn(bg, size,
                "relative inline-flex rounded-full justify-center items-center *:size-5/10")}>
                {icon}
            </span>
        </span>
    );
}

export interface PingTagProps {
    text?: string;
    description?: string;
    textFg?: string;
    descriptionFg?: string;
    bg?: string;
    bd?: string;
    pingBg?: string;
    pingWaveBg?: string;
    pingSize?: string;
    pingIcon?: ReactNode;
    side?: "left" | "right";
    hasHover?: boolean;
    className?: string;
    width?: "fit" | "full";
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export function PingTag({
    text,
    textFg = "text-foreground",
    description,
    descriptionFg = "text-foreground/50",
    bg = "bg-primary/10",
    bd,
    side = "left",
    pingBg,
    pingWaveBg,
    pingSize,
    pingIcon,
    hasHover = false,
    className,
    width = "fit",
    onClick,
}: PingTagProps) {

    return (
        <span onClick={onClick}
            className={cn(
                "py-2 px-4 rounded-lg flex items-center gap-4 select-none",
                textFg, bg, bd, hasHover && ["shadow-sm", hover.outline],
                width === 'fit' ? "w-fit" : "w-full",
                className,
            )}
        >
            {side === "left" &&
                <Ping bg={pingBg} size={pingSize} icon={pingIcon}
                    waveBg={pingWaveBg} />
            }

            <dl className="flex flex-col justify-center">
                <dt className="font-bold text-sm">{text}</dt>
                {description && (
                    <dd className={cn("text-xs", descriptionFg)}>{description}</dd>
                )}
            </dl>

            {side === "right" &&
                <Ping bg={pingBg} size={pingSize} icon={pingIcon}
                    waveBg={pingWaveBg} className="ms-auto" />
            }
        </span>
    );
}


// ============================================


export function AvailableForWork({width}: Pick<PingTagProps, 'width'>) {
    const date = new Date();
    return (
        <PingTag
            onClick={(e) => scrollToId({ id: CONTACT_ID })}
            width={width}
            className="gap-4 shadow-sm cursor-pointer"
            pingSize="size-3"
            text={"Available For Work"}
            description="Open to remote & hybrid roles"
        />
    );
}


export function StillInDevelopment() {
    const date = new Date();
    return (
        <div className="flex justify-center mt-10">
            <PingTag className="p-6 px-8 gap-8" pingSize="size-4"
                text="Still In Development" description={`Last Updated: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
            />
        </div>
    );
}