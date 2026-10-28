import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";

export const HeaderVariants = cva("", {
    variants: {
        titleSize: {
            hero: "text-5xl xs:text-6xl sm:text-7xl font-extrabold uppercase",
            h1: "text-4xl sm:text-5xl font-extrabold",
            h2: "text-3xl sm:text-4xl font-bold",
            h3: "text-2xl sm:text-3xl font-bold",
            h4: "text-xl sm:text-2xl font-bold",
            h5: "text-lg sm:text-xl font-bold",
            h6: "text-sm sm:text-base font-bold",
            h7: "text-xs sm:text-sm font-bold",
        },
        subtitleSize: {
            h1: "text-lg sm:text-xl text-muted-foreground",
            h2: "text-base sm:text-lg text-muted-foreground",
            h3: "text-base text-muted-foreground",
            h4: "text-sm sm:text-base text-muted-foreground",
            h5: "text-sm text-muted-foreground",
            h6: "text-xs sm:text-sm text-muted-foreground",
            h7: "text-[0.5rem] sm:text-xs text-muted-foreground",
        },
        gap: {
            hero: "gap-3 sm:gap-4",
            h1: "gap-4 sm:gap-5",
            h2: "gap-3.5 sm:gap-4",
            h3: "gap-3 sm:gap-3.5",
            h4: "gap-2.5 sm:gap-3",
            h5: "gap-2 sm:gap-2.5",
            h6: "gap-1 sm:gap-1.5",
            h7: "gap-0.5 sm:gap-1",
        },
        align: {
            start: "text-start justify-start me-auto",
            center: "text-center justify-center mx-auto",
            end: "text-end justify-end ms-auto",
        },
        smAlign: {
            start: "sm:text-start sm:justify-start sm:me-auto",
            center: "sm:text-center sm:justify-center sm:mx-auto",
            end: "sm:text-end sm:justify-end sm:ms-auto",
        },
        mdAlign: {
            start: "md:text-start md:justify-start md:me-auto",
            center: "md:text-center md:justify-center md:mx-auto",
            end: "md:text-end md:justify-end md:ms-auto",
        },
        lgAlign: {
            start: "lg:text-start lg:justify-start lg:me-auto",
            center: "lg:text-center lg:justify-center lg:mx-auto",
            end: "lg:text-end lg:justify-end lg:ms-auto",
        },
        xlAlign: {
            start: "xl:text-start xl:justify-start xl:me-auto",
            center: "xl:text-center xl:justify-center xl:mx-auto",
            end: "xl:text-end xl:justify-end xl:ms-auto",
        },
        maxSmAlign: {
            start: "max-sm:text-start max-sm:justify-start max-sm:me-auto",
            center: "max-sm:text-center max-sm:justify-center max-sm:mx-auto",
            end: "max-sm:text-end max-sm:justify-end max-sm:ms-auto",
        },
        maxMdAlign: {
            start: "max-md:text-start max-md:justify-start max-md:me-auto",
            center: "max-md:text-center max-md:justify-center max-md:mx-auto",
            end: "max-md:text-end max-md:justify-end max-md:ms-auto",
        },
        maxLgAlign: {
            start: "max-lg:text-start max-lg:justify-start max-lg:me-auto",
            center: "max-lg:text-center max-lg:justify-center max-lg:mx-auto",
            end: "max-lg:text-end max-lg:justify-end max-lg:ms-auto",
        },
        maxXlAlign: {
            start: "max-xl:text-start max-xl:justify-start max-xl:me-auto",
            center: "max-xl:text-center max-xl:justify-center max-xl:mx-auto",
            end: "max-xl:text-end max-xl:justify-end max-xl:ms-auto",
        },
    },
});

export type HeadingProps = {
    id?: string;

    as?: ElementType;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    titleSize?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
    subtitleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";

    icon?: ReactNode;
    iconPosition?: "left" | "right";
    rootClassName?: string;

    title: ReactNode;
    titleClassName?: string;

    subtitle?: ReactNode;
    subtitleClassName?: string;

    children?: ReactNode;
    childrenClassName?: string;

    maxWidth?: boolean;
    align?: VariantProps<typeof HeaderVariants>["align"];
    smAlign?: VariantProps<typeof HeaderVariants>["smAlign"];
    mdAlign?: VariantProps<typeof HeaderVariants>["mdAlign"];
    lgAlign?: VariantProps<typeof HeaderVariants>["lgAlign"];
    xlAlign?: VariantProps<typeof HeaderVariants>["xlAlign"];
    maxSmAlign?: VariantProps<typeof HeaderVariants>["maxSmAlign"];
    maxMdAlign?: VariantProps<typeof HeaderVariants>["maxMdAlign"];
    maxLgAlign?: VariantProps<typeof HeaderVariants>["maxLgAlign"];
    maxXlAlign?: VariantProps<typeof HeaderVariants>["maxXlAlign"];
};

function Heading({
    id, as, level = 2, size, titleSize, subtitleSize, icon, iconPosition = "left",
    rootClassName, title, titleClassName,
    subtitle, subtitleClassName, children, childrenClassName, maxWidth,
    align, smAlign, mdAlign, lgAlign, xlAlign,
    maxSmAlign, maxMdAlign, maxLgAlign, maxXlAlign,
}: HeadingProps) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;
    const hasSubtitle = subtitle !== undefined && subtitle !== null && subtitle !== "";

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
    const visualSize = titleSize ?? size ?? (`h${level}` as const);
    const visualSubtitleSize =
        subtitleSize ?? (size === "hero" ? undefined : size) ?? (`h${level}` as const);

    return (
        <div className={cn("flex flex-col", HeaderVariants({ gap: visualSize }), rootClassName)}>
            <Tag
                id={id}
                className={cn(
                    "flex items-center gap-4 text-foreground capitalize tracking-tight truncate text-wrap",
                    HeaderVariants({
                        titleSize: visualSize,
                        align, smAlign, mdAlign, lgAlign, xlAlign,
                        maxSmAlign, maxMdAlign, maxLgAlign, maxXlAlign,
                    }),
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
                <div className={cn("leading-relaxed",
                    HeaderVariants({
                        subtitleSize: visualSubtitleSize,
                        align, smAlign, mdAlign, lgAlign, xlAlign,
                        maxSmAlign, maxMdAlign, maxLgAlign, maxXlAlign,
                    }),
                    maxWidth && "max-w-8/10 sm:max-w-8/10 md:max-w-7/10 lg:max-w-8/10",
                    subtitleClassName)}>

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