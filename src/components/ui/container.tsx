import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ReactNode } from 'react';
import type { ChildrenType } from '../../data/type';

const containerChildVariants = cva(
    cn(
        'mx-auto max-w-(--max-w)',
    )
)

type ContainerChildType = ChildrenType & VariantProps<typeof containerChildVariants> & {
    children: ReactNode;
    max_w?: number;
}

function ContainerChild({ children, max_w }: ContainerChildType) {
    return (
        <section data-slot="container-child" className={cn(containerChildVariants({}))}
            style={{ '--max-w': `${max_w}px` } as React.CSSProperties}>
            {children}
        </section>
    )
}

const containerVariants = cva(
    'flex min-w-(--min-w) rounded-none *:grow',
    {
        variants: {
            sticky:{
                top: "sticky top-0",
                bottom: "sticky bottom-0",
            },
            py:{
                normal: "py-10 md:py-15 lg:py-20",
            },
            px:{
                normal: "px-2 sm:px-4 md:px-6 lg:px-8",
            },
            bg:{
                background: "bg-background text-foreground",
                muted: "bg-muted text-muted-foreground",
                secondary: "bg-secondary text-secondary-foreground",
            },
            bd:{
                top: "border-t border-border",
                bottom: "border-b border-border",
            },
            height:{
                header: "h-auto min-h-[8dvh] md:min-h-[10dvh]",
                hero: "h-auto min-h-[92dvh] md:min-h-[90dvh]",
                full: "h-auto min-h-[100dvh]",
                fluid: "h-auto"
            },
            align:{
                center: "items-center"
            },
            justify:{
                center: "justify-center"
            }
        },
    }
)

type ContainerType = VariantProps<typeof containerVariants> & {
    children: ReactNode;
    className?: string;
    min_w?: number;
    max_w?: number;
}

export function Container({
    children, className, 
    min_w = 300, max_w = 1700,
    sticky, py, px, bg, bd, height, align, justify,
    ...props
}: ContainerType) {
    return (
        <section data-slot="container"
            className={cn(containerVariants({
                sticky, py, px, bg, bd, height, align, justify, className 
            }))}
            
            style={{ '--min-w': `${min_w}px` } as React.CSSProperties}
            {...props}>

            <ContainerChild max_w={max_w}>
                {children}
            </ContainerChild>
        </section>
    )
}

