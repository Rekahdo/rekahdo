import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const containerVariants = cva(
    cn(''),
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
            }
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
                containerVariants({ background: 'background', ...props }))}>

            <ContainerInner className={className} px={px} py={py} width={width}
                height={height} place={place}>

                {children}
            </ContainerInner>
        </Tag>
    );
}