import { cva } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";

export const HeaderVariants = cva("", {
    variants: {
        titleSize: {
            hero: "text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold uppercase",
            h1: "text-4xl sm:text-5xl font-extrabold",
            h2: "text-3xl sm:text-4xl font-bold",
            h3: "text-2xl sm:text-3xl font-bold",
            h4: "text-xl sm:text-2xl font-bold",
            h5: "text-lg sm:text-xl font-bold",
            h6: "text-sm sm:text-base font-bold",
            h7: "text-xs sm:text-sm font-bold",
        },
        subtitleSize: {
            hero: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground capitalize underline",
            h1: "text-lg sm:text-xl text-muted-foreground",
            h2: "text-base sm:text-lg text-muted-foreground",
            h3: "text-base text-muted-foreground",
            h4: "text-sm sm:text-base text-muted-foreground",
            h5: "text-sm text-muted-foreground",
            h6: "text-xs sm:text-sm text-muted-foreground",
            h7: "text-[0.5rem] sm:text-xs text-muted-foreground",
        },
        gap: {
            hero: "gap-5 sm:gap-6",
            h1: "gap-4 sm:gap-5",
            h2: "gap-3.5 sm:gap-4",
            h3: "gap-3 sm:gap-3.5",
            h4: "gap-2.5 sm:gap-3",
            h5: "gap-2 sm:gap-2.5",
            h6: "gap-1 sm:gap-1.5",
            h7: "gap-0.5 sm:gap-1",
        },
    },
});

export type HeadingProps = {
    id?: string;

    as?: ElementType;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    titleSize?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
    subtitleSize?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";

    icon?: ReactNode;
    iconPosition?: "left" | "right";
    rootClassName?: string;

    title: ReactNode;
    titleClassName?: string;

    subtitle?: ReactNode;
    subtitleClassName?: string;

    children?: ReactNode;
    childrenClassName?: string;
};
function Heading({
    id, as, level = 2, size, titleSize, subtitleSize, icon, iconPosition = "left",
    rootClassName, title, titleClassName,
    subtitle, subtitleClassName, children, childrenClassName,
}: HeadingProps) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;
    const hasSubtitle = subtitle !== undefined && subtitle !== null && subtitle !== "";

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
    const visualSize = titleSize ?? size ?? (`h${level}` as const);
    const visualSubtitleSize = subtitleSize ?? size ?? (`h${level}` as const);

    return (
        <div className={cn("flex flex-col", HeaderVariants({ gap: visualSize }), rootClassName)}>
            <Tag
                id={id}
                className={cn(
                    "flex items-center gap-4 text-foreground capitalize tracking-tight text-wrap",
                    HeaderVariants({ titleSize: visualSize }),
                    titleClassName,
                )}
            >
                {icon && iconPosition === "left" && (
                    <span className="flex items-center justify-center">{icon}</span>
                )}
                {title}
                {icon && iconPosition === "right" && (
                    <span className="flex items-center justify-center">{icon}</span>
                )}
            </Tag>

            {hasSubtitle && (
                <div className={cn(HeaderVariants({ subtitleSize: visualSubtitleSize }), subtitleClassName)}>
                    {subtitle}
                </div>
            )}

            {children && (
                <div className={cn("mt-4 space-y-5", childrenClassName)}>{children}</div>
            )}
        </div>
    );
}

export function H1(props: HeadingProps) { return <Heading level={1} {...props} />; }
export function H2(props: HeadingProps) { return <Heading level={2} {...props} />; }
export function H3(props: HeadingProps) { return <Heading level={3} {...props} />; }
export function H4(props: HeadingProps) { return <Heading level={4} {...props} />; }
export function H5(props: HeadingProps) { return <Heading level={5} {...props} />; }
export function H6(props: HeadingProps) { return <Heading level={6} {...props} />; }