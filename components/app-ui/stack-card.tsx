"use client";

import { stackValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { AppIcon } from "../shared-ui/icon";
import { H3, H4, H6, HeaderVariants } from "../shared-ui/headings";
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from "../ui/progress";
import { Button } from "../ui/button";
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { scrollToId } from "../shared-ui/navigation";
import { STACK_ID } from "../sections/stack-section";
import { Tags } from "./tag";
import { FadeOverlay } from "../shared-ui/fade-overlay";

type StackCardsType = {
    className?: string;
    data?: Infer<typeof stackValidator>[];
};

export function StackCards({ className, data }: StackCardsType) {
    if (!data) return null;

    const categories = [
        { type: "all", count: data.length, stacks: data },
        ...[...new Set(data.map((stack) => stack.type.toLowerCase()))].map((t) => {
            const filtered = data.filter((stack) => stack.type.toLowerCase() === t);
            return { type: t, count: filtered.length, stacks: filtered };
        }),
    ];

    const [active, setActive] = useState(categories[0].type);
    const [preview, setPreview] = useState(categories[0].stacks[0]);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        setPreview(categories.find((stack) => stack.type === active)!.stacks[0]);
    }, [active]);

    type ContentType = Pick<Infer<typeof stackValidator>, "name" | "icon" | "percentage" | "type">;
    const Content = ({ name, icon, percentage, type }: ContentType) => (
        <div className="flex items-center gap-4 w-full min-w-0">
            <AppIcon
                src={icon.src}
                srcDark={icon.srcDark}
                alt={icon.alt}
                size={"xs"}
            />

            <H6
                title={name}
                subtitle={type}
                titleClassName={HeaderVariants({ titleSize: "h7" })}
                subtitleClassName="capitalize"
            />

            <p className="ms-auto text-xs font-mono font-medium text-muted-foreground shrink-0">
                {`${percentage}%`}
            </p>
        </div>
    );

    return (
        <Tabs defaultValue={categories[0].type} className={cn("gap-xs")}>
            <TabsList className="bg-transparent h-auto! w-full shrink-0 flex flex-wrap justify-start gap-2 p-0">
                {categories.map((stack, i) => (
                    <TabsTrigger
                        key={i}
                        value={stack.type}
                        onClick={() => setActive(stack.type)}
                        className={cn(
                            "px-4 py-1 sm:py-2 gap-4 grow-0 text-xs font-medium capitalize",
                            active === stack.type
                                ? "bg-foreground! text-background! shadow-sm"
                                : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                    >
                        {stack.type}
                        <span
                            className={cn(
                                "flex items-center justify-center",
                                "rounded-full size-6 text-[10px] font-mono",
                                active === stack.type
                                    ? "bg-background/20 text-background"
                                    : "bg-background/60 text-muted-foreground border border-border/50"
                            )}
                        >
                            {stack.count}
                        </span>
                    </TabsTrigger>
                ))}
            </TabsList>

            <div className="relative flex items-start *:grow gap-xs pb-4">
                {categories.map((category) => (
                    <TabsContent key={category.type} value={category.type}>
                        <ScrollArea className={cn("md:h-120 overflow-hidden!", expand ? "max-md:h-auto" : "max-md:max-h-100")}>
                            <div className="hidden md:flex flex-wrap gap-4 p-1">
                                {category.stacks.map((s) => (
                                    <Card key={s.name} onMouseEnter={() => setPreview(s)} onFocus={() => console.log(s)}
                                        className={cn("p-0!",
                                            "hover:border-primary hover:bg-primary/5 hover:shadow-sm hover:ring-1 hover:ring-primary/20",
                                            "grow min-w-50",
                                            className
                                        )}>

                                        <CardContent className="flex items-center text-card-foreground gap-4 p-4">
                                            <Content {...s} />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <Accordion
                                defaultValue={[category.stacks[0]?.name]}
                                className="md:hidden grid grid-cols-1 gap-3 p-1"
                            >
                                {category.stacks.map((s) => (
                                    <AccordionItem key={s.name} className="border-0! w-full">
                                        <Card className="w-full justify-center">
                                            <AccordionTrigger
                                                className="hover:no-underline p-0! px-4! gap-4! items-center"
                                            >
                                                <Content {...s} />
                                            </AccordionTrigger>
                                        </Card>

                                        <AccordionContent className="px-1! pt-3">
                                            <StackPreview stack={s} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollArea>
                    </TabsContent>
                ))}

                <StackPreview
                    stack={preview}
                    className="max-w-4/10 lg:max-w-3.5/10 max-md:hidden sticky top-20"
                />

                {!expand && <FadeOverlay className="md:hidden" />}
            </div>

            <Button onClick={() => {
                setExpand(v => {
                    if (v) scrollToId({ id: STACK_ID, scrollType: "instant" });
                    return !expand
                });
            }}
                className={cn(
                    "mx-auto md:hidden px-6! py-2! h-auto! rounded-full shadow-sm",
                )}

                variant={'outline'}>

                {expand ? "Collapse" : "Expand"}
                {expand ? <ChevronUp /> : <ChevronDown />}
            </Button>
        </Tabs>
    );
}

export const StackTier = {
    primary: { label: "Primary Focus", min: 85, max: 100 },
    daily: { label: "Daily Use", min: 70, max: 84 },
    frequent: { label: "Frequent Use", min: 46, max: 69 },
    occasional: { label: "Occasional Use", min: 25, max: 45 },
    learning: { label: "Exploring / Adopting", min: 0, max: 24 },
} as const;

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

function StackPreview({
    className,
    stack,
    isCompact = false,
}: {
    className?: string;
    stack: Infer<typeof stackValidator>;
    isCompact?: boolean;
}) {
    const { name, description, icon, percentage, usages, type } = stack;

    return (
        <Card
            className={cn(
                "transition-all duration-300 w-full gap-4 p-4! sm:p-8! sm:gap-6",
                isCompact
                    ? "p-4 border-0 shadow-none bg-transparent"
                    : "p-6 sm:p-7 shadow-2xl bg-card border-border/80",
                className
            )}
        >
            <CardHeader className="flex items-center gap-4 sm:gap-6 p-0 max-md:hidden">
                <AppIcon
                    src={icon.src}
                    srcDark={icon.srcDark}
                    alt={icon.alt}
                    size={'sm'}
                />

                <H3
                    title={name}
                    subtitle={type}
                    size={"h5"}
                    titleClassName="font-semibold tracking-tight truncate"
                    subtitleClassName="capitalize"
                />

                <span className="ms-auto rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-xs font-semibold text-foreground shrink-0">
                    {percentage}%
                </span>
            </CardHeader>

            <CardContent className={cn("flex flex-col gap-4! sm:gap-6! p-0!")}>
                <Progress
                    value={percentage}
                >
                    <ProgressLabel>Usage</ProgressLabel>

                    <ProgressValue />

                    <ProgressTrack>
                        <ProgressIndicator className={cn(tierFor(percentage).bar, "transition-all duration-500")} />
                    </ProgressTrack>
                </Progress>

                <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="size-3 text-primary" />
                        Overview
                    </span>

                    <p className="text-xs leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>
            </CardContent>

            {usages && usages.length > 0 && (
                <CardFooter className={cn(
                    "flex flex-col items-stretch gap-2 border-t border-border/60 p-0 pt-4 sm:pt-6 bg-transparent!",
                )}>
                    <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                        Key Areas & Usages
                    </span>

                    <Tags
                        tags={usages}
                        variant={"filledMuted"}
                        className="flex flex-wrap gap-1.5"
                    />
                </CardFooter>
            )}
        </Card>
    );
}