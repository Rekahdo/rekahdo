'use client'

import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { ElementType, useEffect, useState } from "react";
import { Flex } from "../shared-ui/layout";
import { FilterSelect } from "../shared-ui/filter-select";
import { cn } from "cn";
import z from "zod";
import { stackSchema } from "@/schemas/zod-schemas";
import { stackTable } from "@/convex/schema";
import { Infer } from "convex/values";
import { Doc } from "@/convex/_generated/dataModel";
import { MultiToggle } from "../shared-ui/toggle";
import { LayoutGrid, Rows3 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { useWidthMedia } from "@/hooks/useMedia";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { hover } from "../shared-ui/_css";
import { H3 } from "../shared-ui/headings";
import { Progress } from "../ui/progress";
import Image from "../shared-ui/image";
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
        // Construct object {label, min, max} from type StackTier
        Object.entries(StackTier).map(([_, v]) => ({ label: v.label, min: v.min, max: v.max }))
            // Find percent and return found {label, min, max}
            .find(({ min, max }) => percent >= min && percent <= max);

    const usages = ["all usage levels", ...new Set(data.map((stack) => findUsageByPercent(stack.percentage)!.label))];
    const stacks = ["all stacks", ...new Set(data.map((stack) => stack.type))];
    const [selected, setSelected] = useState({ stack: stacks[0], usage: usages[0] })
    const [viewStacks, setViewStacks] = useState(data);
    const [mode, setMode] = useState<StackMode>("Compact");
    const maxMd = useWidthMedia().maxMd;

    function selectStack(value: string | null) {
        filter({ stack: value! })
    }

    function selectUsage(value: string | null) {
        filter({ usage: value! })
    }

    function selectMode(index: number) {
        setMode(index === 0 ? "Compact" : "Detailed")
    }

    function filter({ stack = selected.stack, usage = selected.usage }
        : { stack?: string, usage?: string }) {

        setSelected({ stack, usage })

        const viewing = data!.filter((s) => stack === stacks[0] || s.type === stack)
            .filter((s) => usage === usages[0] || findUsageByPercent(s.percentage)?.label === usage)

        setViewStacks(viewing)
    }

    return (
        <Flex className={cn()}
            topClassName="sticky top-20 z-10 md:top-25 lg:top-25"
            top={
                <div className="flex grow justify-between max-sm:items-start items-center">
                    <div className="flex gap-4 max-sm:flex-col">
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
                        { text: "Compact", icon: <LayoutGrid /> },
                        { text: "Detailed", icon: <Rows3 /> },
                    ]} rootToggle onChange={selectMode} showTextAt="sm" />
                </div>
            }

            bottom={
                <div data-mode={mode} className={cn(
                    "flex flex-wrap justify-evenly data-[mode=Compact]:justify-center-safe",
                    "gap-4 lg:data-[mode=Compact]:gap-6",
                )}>
                    {
                        viewStacks?.map((stack, i) =>
                            <StackCard key={`stack-${i}`} {...stack} mode={mode} maxMd={maxMd} />
                        )
                    }

                </div>
            }

        />
    )
}




// ==============================================================================
// ==============================================================================
// ==============================================================================



const tierFor = (p: number) =>
    p >= 85
        ? {
            bar: "bg-emerald-500",
            afterBar: "after:bg-emerald-500",
            text: "text-emerald-600 dark:text-emerald-400",
            ring: "ring-emerald-500/20",
            shadow: "hover:shadow-lg hover:shadow-emerald-500/20 hover:ring-1 hover:ring-emerald-500/30",
            label: StackTier.primary.label,
        }
        : p >= 70
            ? {
                bar: "bg-blue-500",
                afterBar: "after:bg-blue-500",
                text: "text-blue-600 dark:text-blue-400",
                ring: "ring-blue-500/20",
                shadow: "hover:shadow-lg hover:shadow-blue-500/20 hover:ring-1 hover:ring-blue-500/30",
                label: StackTier.daily.label,
            }
            : p >= 46
                ? {
                    bar: "bg-cyan-500",
                    afterBar: "after:bg-cyan-500",
                    text: "text-cyan-600 dark:text-cyan-400",
                    ring: "ring-cyan-500/20",
                    shadow: "hover:shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-500/30",
                    label: StackTier.frequent.label,
                }
                : p >= 25
                    ? {
                        bar: "bg-amber-500",
                        afterBar: "after:bg-amber-500",
                        text: "text-amber-600 dark:text-amber-400",
                        ring: "ring-amber-500/20",
                        shadow: "hover:shadow-lg hover:shadow-amber-500/20 hover:ring-1 hover:ring-amber-500/30",
                        label: StackTier.occasional.label,
                    }
                    : {
                        bar: "bg-slate-500/60",
                        afterBar: "after:bg-slate-500/60",
                        text: "text-slate-600 dark:text-slate-400",
                        ring: "ring-slate-500/20",
                        shadow: "hover:shadow-lg hover:shadow-slate-500/15 hover:ring-1 hover:ring-slate-500/20",
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
    const contentProp = maxMd ? { side: "bottom", showCloseButton: false } : {}

    const size: IconSize = mode === "Compact" ? (maxMd ? "sheet" : "hover") : "detailed";

    return (
        <article data-mode={mode} className={cn(
            "flex justify-center items-center",
            "data-[mode=Detailed]:basis-2xs",
            "data-[mode=Detailed]:grow max-w-100 max-sm:max-w-full shadow-2xs",
        )}>
            {mode === "Compact" && <>
                <Root>
                    <Trigger {...triggerProp} className="relative">
                        <CardIcon name={name} iconSrc={iconSrc} iconDarkSrc={iconDarkSrc}
                            percentage={percentage} mode={mode} size="trigger" className="" />

                        <Ping mode={mode} bg={tierFor(percentage).bar} />
                    </Trigger>

                    <Content {...contentProp}>
                        <CardContent {...props} name={name} iconSrc={iconSrc} iconDarkSrc={iconDarkSrc}
                            percentage={percentage} mode={mode} size={size} />
                    </Content>
                </Root>
            </>}

            {mode === "Detailed" &&
                <CardContent {...props} name={name} iconSrc={iconSrc} iconDarkSrc={iconDarkSrc}
                    percentage={percentage} mode={mode} size={size} />
            }
        </article>
    )
}



// ==============================================================================
// ==============================================================================
// ==============================================================================



function CardIcon({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    mode,
    size,
    className,
}: Omit<CardType, "description" | "usages" | "type"> & { size?: IconSize }) {
    const cardIconStyle = cn(
        "transition-all border-border/60",
        mode === "Compact" ? cn(hover.outline) : "border-0 bg-background",
        "flex flex-wrap justify-center items-center rounded-lg",

        "data-[size=trigger]:size-14",
        "md:data-[size=trigger]:size-16",
        "lg:data-[size=trigger]:size-20",

        "data-[size=sheet]:size-14",
        "data-[size=hover]:size-14",
        "data-[size=detailed]:size-14",
    );

    const tier = tierFor(percentage);

    return (
        <div
            data-mode={mode}
            data-size={size}
            className={cn(
                cardIconStyle,
                tier.afterBar,
                tier.ring,
                tier.shadow,
                className,
            )}
        >

            <Image
                src={iconSrc}
                srcDark={iconDarkSrc}
                alt={`${name} tech stack`}
                fill
                size={'s50'}
            />
        </div>
    );
}



// ==============================================================================
// ==============================================================================
// ==============================================================================



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

    const cardContentStyle = cn(
        "transition-all rounded-lg space-y-4 text-foreground", mode === "Detailed" ? (hover.outline, "hover:scale-105") : "",
        "p-2 data-[size=sheet]:p-8",
        "data-[mode=Detailed]:bg-background dark:data-[mode=Detailed]:bg-background/100 data-[mode=Detailed]:border-border/60",
        "data-[mode=Detailed]:w-full data-[mode=Detailed]:h-full data-[mode=Detailed]:p-6",
        "flex flex-col justify-between",
    );

    return (
        <div data-mode={mode} data-size={size}
            className={cn(cardContentStyle, mode === "Detailed" ? (
                tierFor(percentage).afterBar,
                tierFor(percentage).ring,
                tierFor(percentage).shadow) : "",
                className)}>

            <div className="flex gap-5 items-center">
                <CardIcon name={name} iconSrc={iconSrc} iconDarkSrc={iconDarkSrc}
                    percentage={percentage} mode={mode} size={size} />

                <div className="flex flex-col gap-1">
                    <H3 title={name} size={"h6"} />

                    <div className="flex items-center gap-2">
                        <span className={cn(
                            "py-0.5 px-2 rounded-full uppercase ring-1 text-[0.7rem] font-medium",
                            tierFor(percentage).text, tierFor(percentage).ring,
                        )}>
                            {tierFor(percentage).label}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            {percentage}%
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-[14px] w-full text-foreground">{description}</p>

            <Progress value={percentage} barClassName={cn(
                tierFor(percentage).bar
            )} />

            <Tags tags={usages} variant={'filledMuted'} className="flex flex-wrap gap-1.5" />
        </div>
    )
}



// ==============================================================================
// ==============================================================================
// ==============================================================================


function Ping({ mode = 'Compact', bg }: {
    mode: StackMode; bg: string
}) {

    const pingStyle = cn(
        "absolute top-2 right-2 rounded-full",
        "data-[mode=Compact]:size-1 sm:data-[mode=Compact]:size-2",
    )

    return (
        <span data-mode={mode} className={cn(pingStyle, bg)}></span>
    )
}