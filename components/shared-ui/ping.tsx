import { cn } from "cn";
import { ReactNode } from "react";

export interface PingProps {
    bg?: string;
    size?: string;
    animate?: boolean;
}

export function Ping({ bg = "bg-primary", size = "size-2", animate=true }: PingProps) {
    return (
        <span className={cn("relative flex", size)}>
            <span className={cn(bg,
                (animate && 
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"),
            )}></span>

            <span className={cn(bg, size,
                "relative inline-flex rounded-full",
            )}></span>
        </span>
    );
}

export interface PingTagProps {
    text: string;
    fg?: string;
    bg?: string;
    bd?: string;
    ping?: ReactNode;
    pingBg?: string;
    pingSize?: string;
    side?: 'left' | 'right';
    className?: string;
}

export function PingTag({ 
    text,
    fg = "text-primary",
    bg = "bg-primary/10",
    bd = "border-1 border-primary",
    side = "left",
    pingBg = "bg-primary",
    pingSize = "size-2",
    ping = <Ping bg={pingBg} size={pingSize} />,
    className,
 }: PingTagProps) {
    return (
        <span className={cn("py-1 px-2 rounded-lg flex items-center gap-2",
            fg, bg, bd, className)}>

            {side === "left" && ping }
            {text}
            {side === "right" && ping}
        </span>
    );
}
