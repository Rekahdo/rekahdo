import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ReactNode } from "react";

const gridVariants = cva(cn
    ("max-lg:gap-6 lg:gap-8"),
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
        },
        defaultVariants:{
            cols:'one'
        }
    }
);

export const topVariants = cva(
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
            position:'top',
        }
    }
);

type GridCompType = VariantProps<typeof gridVariants>
    & VariantProps<typeof topVariants> &
{
    className?: string;
    top: ReactNode;
    bottom?: ReactNode;
}

export function Grid({
    className,
    top, bottom,
    cols, xsCols, smCols, mdCols, lgCols,
    position, xsPosition, smPosition, mdPosition, lgPosition
}: GridCompType) {
    return (
        <div data-slot="grid"
            className={cn(gridVariants({
                cols, xsCols, smCols, mdCols, lgCols,
            }), className)}>

            {top && 
                <div className={cn(topVariants({
                    position, xsPosition, smPosition, 
                    mdPosition, lgPosition
                }))}>
                    {top}
                </div>
            }
            
            {bottom &&
                <div className="flex items-center justify-center">
                    {bottom}
                </div>
            }
        </div>
    )
}