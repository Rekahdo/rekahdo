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
    'bg-background min-w-(--min-w)',
    {
        variants: {
            variant: {
                default: '',
                header: 'bg-background border-b border-border sticky top-0 ',
                hero: 'bg-background',
            },
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

type ContainerType = VariantProps<typeof containerVariants> & {
    children: ReactNode;
    className?: string;
    min_w?: number;
    max_w?: number;
}

export function Container({
    children, className, variant,
    min_w = 300, max_w = 1700,
    ...props
}: ContainerType) {
    return (
        <section data-slot="container"
            className={cn(containerVariants({ variant, className }))}
            style={{ '--min-w': `${min_w}px` } as React.CSSProperties}
            {...props}>

            <ContainerChild max_w={max_w}>
                {children}
            </ContainerChild>
        </section>
    )
}

