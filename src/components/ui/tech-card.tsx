import { cn } from "cn";
import type { LanguageType } from "../../sections/tech_stack/TechStackSection";
import { Image } from "./image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { useMemo, type ElementType } from "react";
import { useWidthMedia } from "../../hooks/useMedia";
import { hover } from "./css-types";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import type { StackMode } from "./toggle";
import { H3 } from "./headings";
import { Progress } from "./progress";

const tierFor = (p: number) =>
    p >= 85 ? {
        bar: "bg-emerald-500",
        afterBar: "after:bg-emerald-500",
        text: "text-emerald-600 dark:text-emerald-400",
        ring: "ring-emerald-500/20",
        shadow: "hover:shadow-lg hover:shadow-emerald-500/20 hover:ring-1 hover:ring-emerald-500/30",
        label: "Expert",
    } :
        p >= 70 ? {
            bar: "bg-primary",
            afterBar: "after:bg-primary",
            text: "text-primary",
            ring: "ring-primary/20",
            shadow: "hover:shadow-lg hover:shadow-primary/20 hover:ring-1 hover:ring-primary/30",
            label: "Advanced",
        } :
            p >= 55 ? {
                bar: "bg-amber-500",
                afterBar: "after:bg-amber-500",
                text: "text-amber-600 dark:text-amber-400",
                ring: "ring-amber-500/20",
                shadow: "hover:shadow-lg hover:shadow-amber-500/20 hover:ring-1 hover:ring-amber-500/30",
                label: "Intermediate",
            } :
                p >= 25 ? {
                    bar: "bg-orange-400/70",
                    afterBar: "after:bg-orange-400/70",
                    text: "text-orange-600 dark:text-orange-400",
                    ring: "ring-orange-400/20",
                    shadow: "hover:shadow-lg hover:shadow-orange-400/20 hover:ring-1 hover:ring-orange-400/30",
                    label: "Familiar",
                } : {
                    bar: "bg-muted-foreground/40",
                    afterBar: "after:bg-muted-foreground/40",
                    text: "text-muted-foreground",
                    ring: "ring-muted-foreground/20",
                    shadow: "hover:shadow-lg hover:shadow-muted-foreground/15 hover:ring-1 hover:ring-muted-foreground/20",
                    label: "Learning",
                };

type TechCardType = LanguageType & {
    className?: string;
    mode?: StackMode;
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
        (mode === "Compact" ? (hover.outline, "bg-background/60") : "border-0 bg-background/100"),
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
        "transition-all rounded-lg space-y-4", mode === "Detailed" ? (hover.outline, "hover:scale-105") : "",
        "p-2 data-[size=sheet]:p-8",
        "data-[mode=Detailed]:bg-background/60 data-[mode=Detailed]:border-border/60",
        "data-[mode=Detailed]:w-full data-[mode=Detailed]:h-full data-[mode=Detailed]:p-6",
        "flex flex-col justify-between"
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
                            "py-0.5 px-2 rounded-full uppercase ring-1 text-[0.6rem]",
                            tierFor(percentage).text, tierFor(percentage).ring,
                        )}>
                            {tierFor(percentage).label}
                        </span>
                        <span className="text-xs">
                            {percentage}%
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-[14px] w-full">{description}</p>

            <Progress value={percentage} barClassName={cn(
                tierFor(percentage).bar
            )}/>

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
            "data-[mode=Detailed]:w-50 data-[mode=Detailed]:basis-2xs", 
            "data-[mode=Detailed]:grow",
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
    languages?: LanguageType[];
    mode: StackMode;
}

export function TechCards({ languages, mode }: TechCardsType) {
    const width = useWidthMedia();
    const isSheet = useMemo(() => width.belowMd, [width.belowMd]);

    return (
        <div data-mode={mode} className={cn(
            "flex flex-wrap justify-evenly data-[mode=Compact]:justify-center-safe",
            "gap-4 lg:data-[mode=Compact]:gap-6",
        )}>
            {
                languages?.map((lang, i) =>
                    <TechCard key={`${lang.name}-${i}`} {...lang} mode={mode} belowMd={isSheet} />)
            }
        </div>
    )
}