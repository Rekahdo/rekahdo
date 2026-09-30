import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const containerInnerVariants = cva(
    cn("max-w-350 mx-auto"),
    {
        variants: {
            py: {
                section: "py-15 md:py-20 lg:py-25",
            },
            px: {
                section: "px-4 sm:px-6 lg:px-10",
            },
        },
        defaultVariants: {
            px: 'section'
        }
    }
)

type ContainerInnerProps = VariantProps<typeof containerInnerVariants> & {
    children: ReactNode;
    className?: string;
}

function ContainerInner({
    children,
    className,
    px, py,
}: ContainerInnerProps) {
    return (
        <div data-slot="container-inner"
            className={cn(containerInnerVariants({ px, py }), className)}>
            {children}
        </div>
    );
}

const containerVariants = cva(
    'flex rounded-none *:grow min-w-75 items-center',
    {
        variants: {
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-left-bottom bg-scroll",
                about: "bg-[url(/images/bg/e.svg)] bg-no-repeat bg-right-bottom bg-scroll",
                stack: "bg-[url(/images/bg/k.svg)] bg-no-repeat bg-left-bottom bg-fixed",
            },
            height: {
                header: "h-[8dvh]",
                hero: "h-[92dvh]",
            },
            'min-height': {
                header: "min-h-[8dvh]",
                hero: "min-h-[92dvh]",
                half: "min-h-[50dvh]",
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

type ContainerProps = VariantProps<typeof containerVariants> &
    VariantProps<typeof containerInnerVariants> &
{
    as?: ElementType;
    id: string;

    children: ReactNode;
    className?: string;
    innerClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

export function Container({
    id,
    as: Tag = "section",
    children,
    className,
    innerClassName,
    px, py,
    ...props
}: ContainerProps) {
    return (
        <Tag data-slot="container" id={id}
            className={cn(containerVariants({ ...props }), className)}>

            <ContainerInner className={innerClassName} px={px} py={py}>
                {children}
            </ContainerInner>
        </Tag>
    );
}