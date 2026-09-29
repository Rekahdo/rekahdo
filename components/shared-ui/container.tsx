import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { background, border, minHeight, justify, sticky, maxWidth, rounded } from './_css';

type ContainerInnerProps = {
    children: ReactNode;
    className?: string;
    maxWidth?: string;
}

function ContainerInner({
    children,
    className,
    maxWidth,
}: ContainerInnerProps) {
    return (
        <div data-slot="container-inner"
            className={cn("max-w-400 mx-auto", maxWidth, className)}
        >
            {children}
        </div>
    );
}

const containerVariants = cva(
    'flex rounded-none *:grow min-w-75',
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
            bg: background,
            bd: border,
            height: {
                xs: "h-auto min-h-[6dvh]",
                sm: "h-auto min-h-[8dvh]",
                default: "h-auto min-h-[8dvh] md:min-h-[10dvh]",
            },
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-left-bottom bg-scroll",
                about: "bg-[url(/images/bg/e.svg)] bg-no-repeat bg-right-bottom bg-scroll",
                stack: "bg-[url(/images/bg/k.svg)] bg-no-repeat bg-left-bottom bg-fixed",
            }
        },
        defaultVariants: {
            px: "default",
        }
    }
)

type ContainerProps = VariantProps<typeof containerVariants> & {
    maxWidth?: number;
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    as?: ElementType;
    id?: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

export function Container({
    id,
    maxWidth=350,
    children,
    className,
    innerClassName,
    sticky,
    py,
    px,
    bg,
    bd,
    height,
    bgImage,
    as: Tag = "section",
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container" id={id}
            className={cn(containerVariants({
                sticky, py, px, bg, bd, height, bgImage
            }), className)} {...props}>

            <ContainerInner className={innerClassName} maxWidth={`max-w-${maxWidth}`}>
                {children}
            </ContainerInner>
        </Tag>
    );
}