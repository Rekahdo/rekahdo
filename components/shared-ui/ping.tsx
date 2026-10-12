import { cn } from "cn";
import { ReactNode } from "react";
import { hover } from "./_css";

export interface PingProps {
    bg?: string;
    size?: string;
    animate?: boolean;
}

export function Ping({
    bg = "bg-green-400",
    size = "size-2",
    animate = true,
}: PingProps) {
    return (
        <span className={cn("relative flex", size)}>
            {animate && (
                <span
                    className={cn(
                        bg,
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    )}
                />
            )}

            <span className={cn(bg, size, "relative inline-flex rounded-full")} />
        </span>
    );
}

export interface PingTagProps {
    text?: string;
    description?: string;
    fg?: string;
    descriptionFg?: string;
    bg?: string;
    bd?: string;
    ping?: ReactNode;
    pingBg?: string;
    pingSize?: string;
    side?: "left" | "right";
    hasHover?: boolean;
    className?: string;
}

export function PingTag({
    text,
    description,
    fg = "text-foreground",
    descriptionFg = "text-foreground/50",
    bg = "bg-primary/10",
    bd,
    side = "left",
    pingBg = "bg-green-500",
    pingSize = "size-2",
    ping = <Ping bg={pingBg} size={pingSize} />,
    hasHover = false,
    className,
}: PingTagProps) {
    return (
        <span
            className={cn(
                "py-2 px-4 rounded-lg flex items-center gap-3",
                fg,
                bg,
                bd,
                hasHover && ["shadow-sm", hover.outline],
                className,
            )}
        >
            {side === "left" && ping}

            <span className="flex flex-col justify-center">
                <span className="font-bold text-sm">{text}</span>
                {description && (
                    <span className={cn("text-xs", descriptionFg)}>{description}</span>
                )}
            </span>

            {side === "right" && ping}
        </span>
    );
}