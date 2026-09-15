import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ReactNode } from 'react';
import type { ChildrenType } from '../../utils/type';

const containerChildVariants = cva(
    cn(
        'flex grow px-2 sm:px-4 md:px-6 lg:px-8 max-w-[var(--max-w)] h-[10dvh]',
        // 'border-x-1 border-border'
    ),
    {
        variants: {
            variant: {
                default: "",
                header: 'items-center max-sm:h-[8dvh]',
                hero: 'min-h-[92dvh] h-auto lg:min-h-[90dvh] lg:px-20',
                about: '',
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
    'bg-background flex justify-center p-0 m-0 min-w-[var(--min-w)]',
    {
        variants: {
            variant: {
                default: '',
                header: 'border-b-1 border-border sticky top-0',
                hero: 'lg:px-0 max-lg:h-full',
                about: '',
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

