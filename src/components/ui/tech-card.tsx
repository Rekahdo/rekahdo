import { cn } from "cn";
import type { LanguageType } from "../../sections/tech_stack/TechStackSection";
import { Image } from "./image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { useMemo, useState, type ElementType } from "react";
import { useWidthMedia } from "../../hooks/useMedia";
import { hover } from "./css-types";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { MultiToggle } from "./toggle";
import { H3 } from "./headings";
import { Progress } from "./progress";
import { Flex } from "./layout";
import { LayoutGrid, Rows3 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";

export const StackTier = {
    all: { label: "All", min: 0,  max: 100 },
    primary: { label: "Primary Focus", min: 85, max: 100 },
    daily: { label: "Daily Use", min: 70, max: 84  },
    frequent: { label: "Frequent Use", min: 46, max: 69  },
    occasional: { label: "Occasional Use", min: 25, max: 45  },
    learning: { label: "Exploring / Adopting", min: 0,  max: 24  },
} as const;

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


export type StackModeType = "Compact" | "Detailed";

type TechCardType = LanguageType & {
    className?: string;
    mode?: StackModeType;
    belowMd?: boolean;
}

type IconSize = "trigger" | "sheet" | "hover" | "detailed";

function CardIcon({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    mode,
    size,
    className
}: Omit<TechCardType, "description" | "usages"> & { size?: IconSize }) {

    const cardIconStyle = cn(
        "relative", "transition-all border-border/60",
        (mode === "Compact" ? (hover.outline, "bg-background dark:bg-background/60") : "border-0 bg-background/100"),
        "flex flex-wrap justify-center items-center rounded-lg",
        "data-[size=trigger]:size-15 md:data-[size=trigger]:size-22 lg:data-[size=trigger]:size-30",
        "data-[size=trigger]:after:size-2 after:rounded-full after:absolute after:top-2 after:right-2",
        "data-[size=sheet]:size-14",
        "data-[size=hover]:size-14",
        "data-[size=detailed]:size-14",
    );

    return (
        <div data-mode={mode} data-size={size}
            className={cn(cardIconStyle,
                tierFor(percentage).afterBar,
                tierFor(percentage).ring,
                tierFor(percentage).shadow,
                className)}>

            <Image src={iconSrc} darkSrc={iconDarkSrc} alt={`${name} tech stack`} fluid size={"sm"} />
        </div>
    )
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
}: TechCardType & { size?: IconSize }) {

    const cardContentStyle = cn(
        "transition-all rounded-lg space-y-4 text-foreground", mode === "Detailed" ? (hover.outline, "hover:scale-105") : "",
        "p-2 data-[size=sheet]:p-8",
        "data-[mode=Detailed]:bg-background dark:data-[mode=Detailed]:bg-background/60 data-[mode=Detailed]:border-border/60",
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

            <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-muted-foreground">
                {usages.map((usage, i) => (
                    <p key={`${usage}-${i}`} className={cn(
                        "rounded-md border border-border/60 bg-muted/50",
                        "px-2 py-0.5 hover:border-primary/30",
                        "transition-colors duration-200",
                    )}>{usage}</p>
                ))}
            </div>
        </div>
    )
}


export function TechCard({
    name,
    iconSrc,
    iconDarkSrc,
    percentage,
    mode,
    belowMd,
    ...props
}: TechCardType) {

    const Root = mode === "Compact" ? (belowMd ? Sheet : HoverCard) : "section";
    const Trigger = (belowMd ? SheetTrigger : HoverCardTrigger) as ElementType;
    const Content = (belowMd ? SheetContent : HoverCardContent) as ElementType;

    const triggerProp = belowMd ? {} : { delay: 10, closeDelay: 0 };
    const contentProp = belowMd ? { side: "bottom", showCloseButton: false } : {}

    const size: IconSize = mode === "Compact" ? (belowMd ? "sheet" : "hover") : "detailed";

    return (
        <article data-mode={mode} className={cn(
            "flex justify-center items-center",
            "data-[mode=Detailed]:basis-2xs",
            "data-[mode=Detailed]:grow max-w-100 max-sm:max-w-full",
        )}>
            {mode === "Compact" && <>
                <Root>
                    <Trigger {...triggerProp}>
                        <CardIcon name={name} iconSrc={iconSrc} iconDarkSrc={iconDarkSrc}
                            percentage={percentage} mode={mode} size="trigger" />
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



type TechCardsType = {
    languages: LanguageType[];
    className?: string;
}

export function TechCards({ languages, className }: TechCardsType) {
    const [filtered, setFiltered] = useState<LanguageType[]>(languages);
    const [mode, setMode] = useState<StackModeType>("Compact");
    const width = useWidthMedia();
    const isSheet = useMemo(() => width.belowMd, [width.belowMd]);

    // return as an array of objects {label: value, value: value}
    // i used value as the key
    const tiers = Object.entries(StackTier).map(([_, obj]) => ({ label: obj.label, value: obj.label }));

    // return array of objects {key: label, min: obj.min, max: obj.max}
    const array = Object.entries(StackTier).map(([_, obj]) => ({key: obj.label, min: obj.min, max: obj.max}));

    function selectFilter(value: string | null){
        const tierFound = array.filter((obj) => obj.key === value)[0];
        setFiltered(languages.filter((lang) => lang.percentage >= tierFound.min && lang.percentage <= tierFound.max ))
    }

    function selectMode(index: number) {
        setMode(index === 0 ? "Compact" : "Detailed")
    }

    return (
        <Flex className={className}
            topClassName="sticky top-20 z-10 md:top-25 lg:top-25"
            top={
                <div className="flex grow justify-between items-center">
                    <Select items={tiers} defaultValue={tiers[0].value} onValueChange={selectFilter}>
                        <SelectTrigger className="w-fit sm:min-w-45 border border-border/60 bg-background/80 dark:bg-background/40 backdrop-blur-md">
                            <SelectValue className={"capitalize text-foreground font-medium"}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Tiers</SelectLabel>
                                {tiers.map((tier) => (
                                    <SelectItem key={tier.value} value={tier.value}>
                                        {tier.value}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <MultiToggle toggles={[
                        { text: "Compact", icon: <LayoutGrid /> },
                        { text: "Detailed", icon: <Rows3 /> },
                    ]} rootToggle onChange={selectMode} showTextAt="sm"/>
                </div>
            }

            bottom={
                <div data-mode={mode} className={cn(
                    "flex flex-wrap justify-evenly data-[mode=Compact]:justify-center-safe",
                    "gap-4 lg:data-[mode=Compact]:gap-6",
                )}>
                    {
                        filtered?.map((lang, i) =>
                            <TechCard key={`${lang.name}-${i}`} {...lang} mode={mode} belowMd={isSheet} />)
                    }
                </div>
            }

        />
    )
}