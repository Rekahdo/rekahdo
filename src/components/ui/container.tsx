import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ReactNode } from 'react';
import type { ChildrenType } from '../../utils/type';

const containerChildVariants = cva(
    cn(
        'mx-auto max-w-[var(--max-w)]',
        'px-2 sm:px-4 md:px-6 lg:px-8'
    ),
    {
        variants: {
            variant: {
                default: "",
                header: '',
                hero: 'py-10 h-auto lg:px-20 max-lg:min-h-[92dvh] lg:h-[90dvh] lg:max-h-[1000px]',
            },
        },

        defaultVariants: {
            variant: 'default',
        }
    }
)

type ContainerChildType = ChildrenType & VariantProps<typeof containerChildVariants> & {
    children: ReactNode;
    max_w?: number;
}

function ContainerChild({ children, variant, max_w }: ContainerChildType) {
    return (
        <section data-slot="container-child" className={cn(containerChildVariants({ variant }))}
            style={{ '--max-w': `${max_w}px` } as React.CSSProperties}>
            {children}
        </section>
    )
}

const containerVariants = cva(
    'bg-background min-w-[var(--min-w)]',
    {
        variants: {
            variant: {
                default: '',
                header: 'bg-background border-b-1 border-border',
                hero: 'lg:px-0 max-lg:h-full',
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
    min_w = 250, max_w = 1700,
    ...props
}: ContainerType) {
    return (
        <section data-slot="container"
            className={cn(containerVariants({ variant, className }))}
            style={{ '--min-w': `${min_w}px` } as React.CSSProperties}
            {...props}>
            <ContainerChild variant={variant} max_w={max_w}>
                {children}
            </ContainerChild>
        </section>
    )
}

