import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { align, background, border, minHeight, justify, paddingY, sticky, maxWidth, rounded } from './css-types';

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
                default: "py-15 md:py-20 lg:py-25",
                sm: "py-8 md:py-10 lg:py-12",
                lg: "py-20 md:py-28 lg:py-32",
            },
            px: {
                none: "",
                default: "px-2 sm:px-4 md:px-6 lg:px-8",
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
        },
        defaultVariants: {
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

type ContainerProps = VariantProps<typeof containerVariants>
    & VariantProps<typeof containerInnerVariants> &
{
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    as?: ElementType;
    id?: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

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

export function Container({
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
    as: Tag = "section",
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container"
            className={cn(containerVariants({
                sticky, py, px, bg, bd, h, align, justify, rounded
            }), className)} {...props}>

            <ContainerInner maxWidth={maxWidth} className={innerClassName}>
                {children}
            </ContainerInner>
        </Tag>
    );
}
