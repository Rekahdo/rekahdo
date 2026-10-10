import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';


const containerVariants = cva(
    cn(''),
    {
        variants: {
            sticky: {
                top: "sticky top-0 z-50"
            },
            background: {
                background: "bg-background text-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                muted: "bg-muted text-muted-foreground",
            },
            py: {
                section: "py-10 md:py-15 lg:py-20",
            },
            px: {
                section: "px-6 sm:px-8 lg:px-10",
            },
            height: {
                header: "py-1",
                hero: "max-md:aspect-4/5 md:aspect-square lg:aspect-16/10",
                full: 'h-dvh',
                fit: 'h-fit',
            },
            width: {
                w350: "max-w-350",
                w400: "max-w-400",
            },
            place: {
                center: "justify-center items-center",
                top: "justify-start items-center",
                bottom: "justify-end items-center",
                left: "justify-center items-start",
                right: "justify-center items-end",
                topLeft: "justify-start items-start",
                topRight: "justify-start items-end",
                bottomLeft: "justify-end items-start",
                bottomRight: "justify-end items-end",
            },
            bgAttach: {
                fixed: "bg-fixed"
            },
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-left-bottom bg-scroll",
                about: "bg-[url(/images/bg/e.svg)] bg-no-repeat bg-right-bottom bg-scroll",
                stack: "bg-[url(/images/bg/k.svg)] bg-no-repeat bg-left-bottom bg-fixed",
            },
            bgGradient: {
                // ── Additive patterns ─────────────────────────────────────────────
                grid: cn(
                    "bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_60%,transparent)_1px,transparent_1px)]",
                    "bg-[size:32px_32px]",
                ),
                "grid-sm": cn(
                    "bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_50%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_50%,transparent)_1px,transparent_1px)]",
                    "bg-[size:16px_16px]",
                ),
                dots: cn(
                    "bg-[radial-gradient(color-mix(in_oklab,var(--border)_70%,transparent)_1px,transparent_1px)]",
                    "bg-[size:20px_20px]",
                ),
                "dots-lg": cn(
                    "bg-[radial-gradient(color-mix(in_oklab,var(--border)_70%,transparent)_1.5px,transparent_1.5px)]",
                    "bg-[size:32px_32px]",
                ),
                crosshatch: cn(
                    "bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)_40%,transparent)_0_1px,transparent_1px_12px),repeating-linear-gradient(-45deg,color-mix(in_oklab,var(--border)_40%,transparent)_0_1px,transparent_1px_12px)]",
                ),
                stripes: cn(
                    "bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--muted-foreground)_12%,transparent)_0_8px,transparent_8px_16px)]",
                ),
                "stripes-v": cn(
                    "bg-[repeating-linear-gradient(90deg,color-mix(in_oklab,var(--muted-foreground)_12%,transparent)_0_8px,transparent_8px_16px)]",
                ),
                checker: cn(
                    "bg-[conic-gradient(from_90deg_at_50%_50%,color-mix(in_oklab,var(--border)_60%,transparent)_0_25%,transparent_0_50%,color-mix(in_oklab,var(--border)_60%,transparent)_0_75%,transparent_0)]",
                    "bg-[size:24px_24px]",
                ),
                noise: cn(
                    // Layered radial gradients approximate grain cheaply
                    "bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_40%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--primary)_6%,transparent),transparent_50%)]",
                ),

                // ── Radial glows / gradient accents ──────────────────────────────
                "glow-top": cn(
                    "bg-[radial-gradient(80%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]",
                ),
                "glow-bottom": cn(
                    "bg-[radial-gradient(80%_50%_at_50%_100%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]",
                ),
                "glow-center": cn(
                    "bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]",
                ),
                "aurora": cn(
                    "bg-[radial-gradient(60%_50%_at_20%_10%,color-mix(in_oklab,var(--chart-1)_20%,transparent),transparent_60%),radial-gradient(50%_50%_at_80%_20%,color-mix(in_oklab,var(--chart-5)_18%,transparent),transparent_60%),radial-gradient(60%_60%_at_50%_90%,color-mix(in_oklab,var(--chart-2)_18%,transparent),transparent_60%)]",
                ),
                "mesh-1": cn(
                    "bg-[radial-gradient(at_20%_20%,color-mix(in_oklab,var(--chart-1)_25%,transparent)_0,transparent_50%),radial-gradient(at_80%_30%,color-mix(in_oklab,var(--chart-3)_22%,transparent)_0,transparent_50%),radial-gradient(at_50%_80%,color-mix(in_oklab,var(--chart-5)_25%,transparent)_0,transparent_50%)]",
                ),
                "mesh-2": cn(
                    "bg-[radial-gradient(at_10%_10%,color-mix(in_oklab,var(--chart-2)_20%,transparent)_0,transparent_55%),radial-gradient(at_90%_10%,color-mix(in_oklab,var(--chart-4)_20%,transparent)_0,transparent_55%),radial-gradient(at_50%_100%,color-mix(in_oklab,var(--chart-1)_22%,transparent)_0,transparent_55%)]",
                ),

                // ── Edge fades / spotlight ──────────────────────────────────────
                spotlight: cn(
                    "bg-[radial-gradient(60%_40%_at_50%_-10%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_60%),linear-gradient(180deg,transparent,color-mix(in_oklab,var(--background)_40%,transparent))]",
                ),

                // ── Diagonal lines & beams ──────────────────────────────────────
                "diagonal-lines": cn(
                    "bg-[repeating-linear-gradient(135deg,color-mix(in_oklab,var(--border)_50%,transparent)_0_1px,transparent_1px_10px)]",
                ),
            },
        },
    }
)

type ContainerInnerProps = {
    children: ReactNode;
    className?: string;
    py?: VariantProps<typeof containerVariants>['py'];
    px?: VariantProps<typeof containerVariants>['px'];
    width?: VariantProps<typeof containerVariants>['width'];
    height?: VariantProps<typeof containerVariants>['height'];
    place?: VariantProps<typeof containerVariants>['place'];
}

function ContainerInner({
    children,
    className,
    px,
    py,
    width = 'w350',
    height,
    place,
}: ContainerInnerProps) {
    return (
        <div data-slot="container-inner"
            className={cn("mx-auto flex items-center justify-center *:grow",
                containerVariants({ width, height }))}>

            <div className={cn("flex flex-col gap-2",
                containerVariants({ px, py, height, place }), className)}>
                {children}
            </div>
        </div>
    );
}

type ContainerProps = VariantProps<typeof containerVariants>
    & ContainerInnerProps &
{
    as?: ElementType;
    id?: string;

    children: ReactNode;
    className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

export function Container({
    id,
    as: Tag = "section",
    children,
    className,
    px, py,
    width, height,
    place,
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container" id={id}
            className={cn("flex rounded-none *:grow min-w-87.5 items-center",
                containerVariants({
                    background: 'background',
                    // bgGradient: 'grid',
                    // bgAttach: 'fixed',
                    ...props
                }))}>

            <ContainerInner className={className} px={px} py={py} width={width}
                height={height} place={place}>

                {children}
            </ContainerInner>
        </Tag>
    );
}