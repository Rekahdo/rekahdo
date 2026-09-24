import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";
import { align, justify } from "./css-types";


const flexVariants = cva(cn
    ("flex max-lg:gap-6 lg:gap-8 text-foreground"),
    {
        variants: {
            direction: {
                row: "flex-row",
                col: "flex-col",
            },
            xsDirection: {
                row: "max-sm:flex-row",
                col: "max-sm:flex-col",
            },
            smDirection: {
                row: "sm:max-md:flex-row",
                col: "sm:max-md:flex-col",
            },
            mdDirection: {
                row: "md:max-lg:flex-row",
                col: "md:max-lg:flex-col",
            },
            lgDirection: {
                row: "lg:flex-row",
                col: "lg:flex-col",
            },
            justify: justify,
            align: align,
        },
        defaultVariants: {
            direction: 'col'
        }
    }
);

export const flexTopVariants = cva(
    cn("flex items-center justify-center"),
    {
        variants: {
            position: {
                top: "order-0",
                bottom: "order-1",
                right: "order-last",
                left: "order-first",
            },
            xsPosition: {
                top: "max-sm:order-0",
                bottom: "max-sm:order-1",
                right: "max-sm:order-last",
                left: "max-sm:order-first",
            },
            smPosition: {
                top: "sm:max-md:order-0",
                bottom: "sm:max-md:order-1",
                right: "sm:max-md:order-last",
                left: "sm:max-md:order-first",
            },
            mdPosition: {
                top: "md:max-lg:order-0",
                bottom: "md:max-lg:order-1",
                right: "md:max-lg:order-last",
                left: "md:max-lg:order-first",
            },
            lgPosition: {
                top: "lg:order-0",
                bottom: "lg:order-1",
                right: "lg:order-last",
                left: "lg:order-first",
            }
        },
        defaultVariants: {
            position: 'top',
        }
    }
);

type FlexCompType = VariantProps<typeof flexVariants>
    & VariantProps<typeof flexTopVariants> &
{
    className?: string;
    top: ReactNode;
    topClassName?: string;
    bottom?: ReactNode;
    bottomClassName?: string;
    as?: ElementType;
}

export function Flex({
    className,
    top, topClassName,
    bottom, bottomClassName,
    as: Tag = "section",
    justify, align,
    direction, xsDirection, smDirection, mdDirection, lgDirection,
    position, xsPosition, smPosition, mdPosition, lgPosition
}: FlexCompType) {
    return (
        <Tag data-slot="flex-container"
            className={cn(flexVariants({
                justify, align,
                direction, xsDirection, smDirection, mdDirection, lgDirection,
            }), className)}>

            {top &&
                <div className={cn(flexTopVariants({
                    position, xsPosition, smPosition,
                    mdPosition, lgPosition
                }), topClassName)}>
                    {top}
                </div>
            }

            {bottom &&
                <div className={cn("flex items-center justify-center", bottomClassName)}>
                    {bottom}
                </div>
            }
        </Tag>
    )
}


// =======================================================================


const gridVariants = cva(cn
    ("max-lg:gap-6 lg:gap-8 text-foreground"),
    {
        variants: {
            cols: {
                one: "flex flex-col",
                two: "grid grid-cols-2",
            },
            xsCols: {
                one: "max-sm:flex max-sm:flex-col",
                two: "max-sm:grid max-sm:grid-cols-2",
            },
            smCols: {
                one: "sm:max-md:flex sm:max-md:flex-col",
                two: "sm:max-md:grid sm:max-md:grid-cols-2",
            },
            mdCols: {
                one: "md:max-lg:flex md:max-lg:flex-col",
                two: "md:max-lg:grid md:max-lg:grid-cols-2",
            },
            lgCols: {
                one: "lg:flex lg:flex-col",
                two: "lg:grid lg:grid-cols-2",
            },
            justify: justify,
            align: align,
        },
        defaultVariants: {
            cols: 'one'
        }
    }
);

type GridCompType = VariantProps<typeof gridVariants>
    & VariantProps<typeof flexTopVariants> &
{
    className?: string;
    top: ReactNode;
    topClassName?: string;
    bottom?: ReactNode;
    bottomClassName?: string;
    as?: ElementType;
}

export function Grid({
    className,
    top, topClassName,
    bottom, bottomClassName,
    as: Tag = "section",
    justify, align,
    cols, xsCols, smCols, mdCols, lgCols,
    position, xsPosition, smPosition, mdPosition, lgPosition
}: GridCompType) {
    return (
        <Tag data-slot="grid-container"
            className={cn(gridVariants({
                justify, align,
                cols, xsCols, smCols, mdCols, lgCols,
            }), className)}>

            {top &&
                <div className={cn(flexTopVariants({
                    position, xsPosition, smPosition,
                    mdPosition, lgPosition
                }), topClassName)}>
                    {top}
                </div>
            }

            {bottom &&
                <div className={cn("flex items-center justify-center", bottomClassName)}>
                    {bottom}
                </div>
            }
        </Tag>
    )
}