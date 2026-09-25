import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { align, background, border, minHeight, justify, sticky, maxWidth, rounded } from './css-types';

const containerInnerVariants = cva(
    cn('mx-auto w-full'),
    {
        variants: {
            maxWidth: maxWidth,
        },
        defaultVariants: {
            maxWidth: "w1300",
        }
    }
)

const containerVariants = cva(
    'flex rounded-none *:grow',
    {
        variants: {
            sticky: sticky,
            py: {
                none: "",
                section: "py-15 md:py-20 lg:py-25",
                sm: "py-8 md:py-10 lg:py-12",
                lg: "py-20 md:py-28 lg:py-32",
            },
            px: {
                none: "",
                default: "px-4 sm:px-6 md:px-8 lg:px-10",
                sm: "px-3 sm:px-5 md:px-7 lg:px-9",
            },
            minWidth: {
                default: "min-w-[300px]",
                none: "",
            },
            bg: background,
            bd: border,
            h: minHeight,
            align: align,
            justify: justify,
            rounded: rounded,
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-left-bottom bg-scroll",
                about: "bg-[url(/images/bg/e.svg)] bg-no-repeat bg-right-bottom bg-scroll",
                stack: "bg-[url(/images/bg/k.svg)] bg-no-repeat bg-left-bottom bg-fixed",
            }

        },
        defaultVariants: {
            bg: 'background',
            minWidth: "default",
            px: "default",
            rounded: "none",
        }
    }
)

type ContainerInnerProps = VariantProps<typeof containerInnerVariants> & {
    children: ReactNode;
    className?: string;
}

function ContainerInner({
    children,
    maxWidth,
    className,
}: ContainerInnerProps) {
    return (
        <div
            data-slot="container-inner"
            className={cn(containerInnerVariants({ maxWidth }), className)}
        >
            {children}
        </div>
    );
}

type ContainerProps = VariantProps<typeof containerVariants>
    & VariantProps<typeof containerInnerVariants> &
{
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    as?: ElementType;
    id: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

export function Container({
    id,
    children,
    className,
    innerClassName,
    maxWidth,
    sticky,
    py,
    px,
    bg,
    bd,
    h,
    align,
    justify,
    rounded,
    bgImage,
    as: Tag = "section",
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container" id={id}
            className={cn(containerVariants({
                sticky, py, px, bg, bd, h, align, justify, rounded, bgImage
            }), className)} {...props}>

            <ContainerInner maxWidth={maxWidth} className={innerClassName}>
                {children}
            </ContainerInner>
        </Tag>
    );
}