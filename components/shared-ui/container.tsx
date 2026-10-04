import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const containerInnerWidthVariants = cva(
    cn("mx-auto flex items-center justify-center *:grow"),
    {
        variants: {
            width: {
                w350: "max-w-350",
                w400: "max-w-400",
            },
        },
        defaultVariants: {
            width: 'w350',
        }
    }
)

const containerInnerVariants = cva(
    cn("flex flex-col justify-center gap-2"),
    {
        variants: {
            py: {
                section: "py-10 md:py-15 lg:py-20",
            },
            px: {
                section: "px-6 sm:px-8 lg:px-10",
            },
            height: {
                header: "py-2",
                hero: "max-md:aspect-4/5 md:aspect-square lg:aspect-16/10",
            },
        },
        defaultVariants: {
            px: 'section',
        }
    }
)

type ContainerInnerProps = VariantProps<typeof containerInnerWidthVariants> &
    VariantProps<typeof containerInnerVariants> & {
        children: ReactNode;
        className?: string;
    }

function ContainerInner({
    children,
    className,
    px, py, width, height,
}: ContainerInnerProps) {
    return (
        <div data-slot="container-inner"
            className={cn(containerInnerWidthVariants({ width }))}>

            <div className={cn(containerInnerVariants({ px, py, height }), className)}>
                {children}
            </div>
        </div>
    );
}

const containerVariants = cva(
    'flex rounded-none *:grow min-w-87.5 items-center',
    {
        variants: {
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-left-bottom bg-scroll",
                about: "bg-[url(/images/bg/e.svg)] bg-no-repeat bg-right-bottom bg-scroll",
                stack: "bg-[url(/images/bg/k.svg)] bg-no-repeat bg-left-bottom bg-fixed",
            },
            sticky: {
                top: "sticky top-0 z-50"
            },
            background: {
                background: "bg-background text-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                muted: "bg-muted text-muted-foreground",
            }
        },
    }
)

type ContainerProps = VariantProps<typeof containerVariants>
    & ContainerInnerProps &
{
    as?: ElementType;
    id: string;

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
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container" id={id}
            className={cn(containerVariants({ ...props }))}>

            <ContainerInner className={className} px={px} py={py} width={width} height={height}>
                {children}
            </ContainerInner>
        </Tag>
    );
}