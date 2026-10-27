'use client'

import { cn } from "cn";

type CurrentDataTimeProps = {
    value?: Date | string | number;
    label?: string;
    className?: string;
};

function formatCurrentDataTime(value: Date | string | number): string {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return "—";

    const datePart = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const timePart = date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return `${datePart} · ${timePart}`;
}

export function CurrentDataTime({
    value = new Date(),
    label = "Last updated",
    className,
}: CurrentDataTimeProps) {
    const date = value instanceof Date ? value : new Date(value);
    const isValid = !Number.isNaN(date.getTime());

    return (
        <div
            className={cn(
                "flex items-center justify-between text-[11px] text-muted-foreground",
                className
            )}
        >
            <span className="font-medium">{label}</span>
            <time
                dateTime={isValid ? date.toISOString() : undefined}
                className="tabular-nums"
            >
                {formatCurrentDataTime(value)}
            </time>
        </div>
    );
}