import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";

const layoutVariants = cva(
    cn(""),
    {
        variants: {
            type: {
                flex: "flex justify-between",
                grid: "grid",
            },

            axis: {
                y: "flex-col grid-cols-1",
                x: "flex-row grid-cols-2",
            },
            maxSmAxis: {
                y: "max-sm:flex-col max-sm:grid-cols-1",
                x: "max-sm:flex-row max-sm:grid-cols-2",
            },
            smAxis: {
                y: "sm:flex-col sm:grid-cols-1",
                x: "sm:flex-row sm:grid-cols-2",
            },
            maxMdAxis: {
                y: "max-md:flex-col max-md:grid-cols-1",
                x: "max-md:flex-row max-md:grid-cols-2",
            },
            mdAxis: {
                y: "md:flex-col md:grid-cols-1",
                x: "md:flex-row md:grid-cols-2",
            },
            maxLgAxis: {
                y: "max-lg:flex-col max-lg:grid-cols-1",
                x: "max-lg:flex-row max-lg:grid-cols-2",
            },
            lgAxis: {
                y: "lg:flex-col lg:grid-cols-1",
                x: "lg:flex-row lg:grid-cols-2",
            },

            // TOP
            place: {
                top: "order-0",
                bottom: "order-1",
                right: "order-last",
                left: "order-first",
            },
            maxSmPlace: {
                top: "max-sm:order-0",
                bottom: "max-sm:order-1",
                right: "max-sm:order-last",
                left: "max-sm:order-first",
            },
            smPlace: {
                top: "sm:order-0",
                bottom: "sm:order-1",
                right: "sm:order-last",
                left: "sm:order-first",
            },
            maxMdPlace: {
                top: "max-md:order-0",
                bottom: "max-md:order-1",
                right: "max-md:order-last",
                left: "max-md:order-first",
            },
            mdPlace: {
                top: "md:order-0",
                bottom: "md:order-1",
                right: "md:order-last",
                left: "md:order-first",
            },
            maxLgPlace: {
                top: "max-lg:order-0",
                bottom: "max-lg:order-1",
                right: "max-lg:order-last",
                left: "max-lg:order-first",
            },
            lgPlace: {
                top: "lg:order-0",
                bottom: "lg:order-1",
                right: "lg:order-last",
                left: "lg:order-first",
            },
        },
    }
);

type LayoutProps = VariantProps<typeof layoutVariants> & {
    className?: string;
    top?: ReactNode;
    topClassName?: string;
    bottom?: ReactNode;
    bottomClassName?: string;
    as?: ElementType;
}

export function Layout({
    className,
    top, topClassName,
    bottom, bottomClassName,
    as: Tag = "section",
    place, maxSmPlace, smPlace,
    maxMdPlace, mdPlace, maxLgPlace,
    lgPlace,
    type = "flex",
    axis,
    ...props
}: LayoutProps) {
    return (
        <Tag data-slot={`${type}-layout`} className={cn(
            "gap-6 lg:gap-8",

            layoutVariants({
                type,
                axis: type === "flex" ? 'x' : 'y',
                ...props
            }),

            className
        )}>

            {top &&
                <div className={cn(
                    layoutVariants({
                        place, maxSmPlace, smPlace,
                        maxMdPlace, mdPlace, maxLgPlace,
                        lgPlace,
                    }), topClassName)}>

                    {top}
                </div>
            }

            {bottom &&
                <div className={cn(bottomClassName)}>
                    {bottom}
                </div>
            }
        </Tag>
    )
}