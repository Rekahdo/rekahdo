'use client'

import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { ElementType, useEffect, useState } from "react";
import { Flex } from "../shared-ui/layout2";
import { FilterSelect } from "../shared-ui/filter-select";
import { cn } from "cn";
import { Doc } from "@/convex/_generated/dataModel";
import { MultiToggle } from "../shared-ui/toggle";
import { LayoutGrid, Rows3 } from "lucide-react";
import { useWidthMedia } from "@/hooks/useMedia";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { H3 } from "../shared-ui/headings";
import { Progress } from "../ui/progress";
import AppImage from "../shared-ui/image";
import { Tags } from "./tag";

export const StackTier = {
    primary: { label: "Primary Focus", min: 85, max: 100 },
    daily: { label: "Daily Use", min: 70, max: 84 },
    frequent: { label: "Frequent Use", min: 46, max: 69 },
    occasional: { label: "Occasional Use", min: 25, max: 45 },
    learning: { label: "Exploring / Adopting", min: 0, max: 24 },
} as const;

type StackMode = "Compact" | "Detailed";

type Stack = Omit<Doc<'stack'>, "_id" | "_creationTime">;

type StackCardsType = {
    className?: string;
    data?: Stack[];
}

export function StackCards({ className, data }: StackCardsType) {
    if (!data) return null;

    const findUsageByPercent = (percent: number) =>
        Object.entries(StackTier).map(([_, v]) => ({ label: v.label, min: v.min, max: v.max }))
            .find(({ min, max }) => percent >= min && percent <= max);

    const usages = ["all usage levels", ...new Set(data.map((stack) => findUsageByPercent(stack.percentage)!.label))];
    const stacks = ["all stacks", ...new Set(data.map((stack) => stack.type))];
    const [selected, setSelected] = useState({ stack: stacks[0], usage: usages[0] });
    const [viewStacks, setViewStacks] = useState(data);
    const [mode, setMode] = useState<StackMode>("Compact");
    const maxMd = useWidthMedia().maxMd;

    function selectStack(value: string | null) {
        filter({ stack: value! });
    }

    function selectUsage(value: string | null) {
        filter({ usage: value! });
    }

    function selectMode(index: number) {
        setMode(index === 0 ? "Compact" : "Detailed");
    }

    function filter({ stack = selected.stack, usage = selected.usage }
        : { stack?: string, usage?: string }) {

        setSelected({ stack, usage });

        const viewing = data!.filter((s) => stack === stacks[0] || s.type === stack)
            .filter((s) => usage === usages[0] || findUsageByPercent(s.percentage)?.label === usage);

        setViewStacks(viewing);
    }

    return (
        <Flex className={cn("max-sm:gap-8 gap-10 w-full", className)}
            topClassName="sticky top-20 z-20 md:top-24 py-2"
            top={
                /* Floating glass toolbar */
                <div className="flex grow justify-between items-center gap-4 bg-background/80 dark:bg-card/75 backdrop-blur-md border border-border/70 p-2.5 sm:p-3 rounded-2xl shadow-sm">
                    <div className="flex gap-3 max-md:flex-col flex-wrap">
                        <FilterSelect
                            items={stacks}
                            onValueChange={selectStack}
                            label="Stacks"
                        />

                        <FilterSelect
                            items={usages}
                            onValueChange={selectUsage}
                            label="Usage levels"
                        />
                    </div>

                    <MultiToggle toggles={[
                        { text: "Compact", icon: <LayoutGrid className="size-4" /> },
                        { text: "Detailed", icon: <Rows3 className="size-4" /> },
                    ]} rootToggle onChange={selectMode} showTextAt="sm" />
                </div>
            }

            bottom={
                <div data-mode={mode} className={cn(
                    "flex flex-wrap justify-evenly data-[mode=Compact]:justify-center-safe",
                    "gap-4 sm:gap-6",
                )}>
                    {
                        viewStacks?.map((stack, i) =>
                            <StackCard key={`stack-${i}`} {...stack} mode={mode} maxMd={maxMd} />
                        )
                    }
                </div>
            }
        />
    );
}

// ── Tier styling tokens ────────────────────────────────────────────────────────
const tierFor = (p: number) =>
    p >= 85
        ? {
            bar: "bg-emerald-500",
            text: "text-emerald-600 dark:text-emerald-400",
            ring: "ring-emerald-500/25",
            border: "border-emerald-500/30",
            glow: "hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)]",
            label: StackTier.primary.label,
        }
        : p >= 70
            ? {
                bar: "bg-blue-500",
                text: "text-blue-600 dark:text-blue-400",
                ring: "ring-blue-500/25",
                border: "border-blue-500/30",
                glow: "hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.3)]",
                label: StackTier.daily.label,
            }
            : p >= 46
                ? {
                    bar: "bg-cyan-500",
                    text: "text-cyan-600 dark:text-cyan-400",
                    ring: "ring-cyan-500/25",
                    border: "border-cyan-500/30",
                    glow: "hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.3)]",
                    label: StackTier.frequent.label,
                }
                : p >= 25
                    ? {
                        bar: "bg-amber-500",
                        text: "text-amber-600 dark:text-amber-400",
                        ring: "ring-amber-500/25",
                        border: "border-amber-500/30",
                        glow: "hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)]",
                        label: StackTier.occasional.label,
                    }
                    : {
                        bar: "bg-slate-400 dark:bg-slate-500",
                        text: "text-slate-600 dark:text-slate-400",
                        ring: "ring-slate-500/20",
                        border: "border-slate-500/30",
                        glow: "hover:shadow-[0_10px_25px_-5px_rgba(100,116,139,0.2)]",
                        label: StackTier.learning.label,
                    };

type CardType = Stack & {
    className?: string;
    mode?: StackMode;
    maxMd?: boolean;
}

type IconSize = "trigger" | "sheet" | "hover" | "detailed";

function StackCard({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    mode = 'Compact',
    maxMd,
    ...props
}: CardType) {
    const Root = mode === "Compact" ? (maxMd ? Sheet : HoverCard) : "article";
    const Trigger = (maxMd ? SheetTrigger : HoverCardTrigger) as ElementType;
    const Content = (maxMd ? SheetContent : HoverCardContent) as ElementType;

    const triggerProp = maxMd ? {} : { delay: 10, closeDelay: 0 };
    const contentProp = maxMd ? { side: "bottom", showCloseButton: false } : {};
    const size: IconSize = mode === "Compact" ? (maxMd ? "sheet" : "hover") : "detailed";

    return (
        <article data-mode={mode} className={cn(
            "flex justify-center items-center transition-transform",
            "data-[mode=Detailed]:basis-80 data-[mode=Detailed]:grow max-w-105 max-sm:max-w-full",
        )}>
            {mode === "Compact" && (
                <Root>
                    <Trigger {...triggerProp} className="relative group focus-visible:outline-none">
                        <CardIcon
                            name={name}
                            iconSrc={iconSrc}
                            iconDarkSrc={iconDarkSrc}
                            percentage={percentage}
                            mode={mode}
                            size="trigger"
                        />
                        <Ping mode={mode} bg={tierFor(percentage).bar} />
                    </Trigger>

                    <Content {...contentProp} className={cn(
                        maxMd
                            ? "p-6 rounded-t-3xl bg-card border-border/60"
                            : "w-80 p-0 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/70 shadow-2xl overflow-hidden"
                    )}>
                        <CardContent
                            {...props}
                            name={name}
                            iconSrc={iconSrc}
                            iconDarkSrc={iconDarkSrc}
                            percentage={percentage}
                            mode={mode}
                            size={size}
                        />
                    </Content>
                </Root>
            )}

            {mode === "Detailed" && (
                <CardContent
                    {...props}
                    name={name}
                    iconSrc={iconSrc}
                    iconDarkSrc={iconDarkSrc}
                    percentage={percentage}
                    mode={mode}
                    size={size}
                />
            )}
        </article>
    );
}

function CardIcon({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    mode,
    size,
    className,
}: Omit<CardType, "description" | "usages" | "type"> & { size?: IconSize }) {
    const tier = tierFor(percentage);

    return (
        <div
            data-mode={mode}
            data-size={size}
            className={cn(
                "relative flex justify-center items-center rounded-2xl transition-all duration-300",
                "bg-card/90 dark:bg-card/70 backdrop-blur-sm border border-border/80",
                "shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
                tier.glow,
                mode === "Compact" && "group-hover:-translate-y-1.5 group-hover:border-primary/50",
                "data-[size=trigger]:size-16 sm:data-[size=trigger]:size-18 lg:data-[size=trigger]:size-20",
                "data-[size=sheet]:size-14",
                "data-[size=hover]:size-12",
                "data-[size=detailed]:size-14 p-2.5",
                className,
            )}
        >
            <AppImage
                src={iconSrc}
                srcDark={iconDarkSrc}
                alt={`${name} tech stack`}
                width={100}
                height={100}
                variantWidth="w50"
                className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
            />
        </div>
    );
}

function CardContent({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    description,
    usages,
    mode,
    size,
    className
}: CardType & { size?: IconSize }) {
    const tier = tierFor(percentage);

    return (
        <div
            data-mode={mode}
            data-size={size}
            className={cn(
                "flex flex-col justify-between gap-4 transition-all duration-300",
                mode === "Detailed" ? [
                    "w-full h-full p-6 sm:p-7 rounded-2xl",
                    "bg-card/85 dark:bg-card/65 backdrop-blur-md border border-border/70",
                    "shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
                    "hover:-translate-y-1.5 hover:border-primary/40",
                    tier.glow,
                ] : "p-5",
                className
            )}
        >
            <div className="flex gap-4 items-center">
                <CardIcon
                    name={name}
                    iconSrc={iconSrc}
                    iconDarkSrc={iconDarkSrc}
                    percentage={percentage}
                    mode={mode}
                    size={size}
                />

                <div className="flex flex-col gap-1 min-w-0">
                    <H3 title={name} titleSize={"h6"} className="font-semibold tracking-tight truncate" />

                    <div className="flex items-center gap-2">
                        <span className={cn(
                            "py-0.5 px-2.5 rounded-full ring-1 text-[0.7rem] font-semibold tracking-wide uppercase bg-background/50",
                            tier.text,
                            tier.ring,
                        )}>
                            {tier.label}
                        </span>

                        <span className="text-xs font-mono font-medium text-muted-foreground">
                            {percentage}%
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {description}
            </p>

            <div className="space-y-1.5 pt-1">
                <Progress
                    value={percentage}
                    className="h-2 bg-muted/80 rounded-full overflow-hidden"
                    barClassName={cn(tier.bar, "transition-all duration-500")}
                />
            </div>

            <Tags tags={usages} variant={'filledMuted'} className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40" />
        </div>
    );
}

function Ping({ mode = 'Compact', bg }: {
    mode: StackMode;
    bg: string;
}) {
    return (
        <span
            aria-hidden="true"
            className="absolute top-2.5 right-2.5 flex size-2.5 pointer-events-none"
        >
            <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-60", bg)} />
            <span className={cn("relative inline-flex rounded-full size-2.5 shadow-sm", bg)} />
        </span>
    );
}
