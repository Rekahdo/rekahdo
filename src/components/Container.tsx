import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ReactNode } from 'react';
import type { ComponentType } from '../utils/type';

type ContainerType = {
    children: ReactNode;
    className?: string;
}

const containerChildVariants = cva(
    'flex grow max-w-8xl px-2 sm:px-4 md:px-6 lg:px-8',
    {
        variants: {
            variant: {
                header: 'h-[10dvh] items-center justify-between max-md:ps-4',
                hero: '',
                about: '',
            }, 
        },

        defaultVariants: {
            variant:'header',
        }
    }
)

function ContainerChild({children, variant}: ComponentType & VariantProps<typeof containerChildVariants>){
    return (
        <section className={cn(containerChildVariants({variant}))}>
            {children}
        </section>
    )
}

const containerVariants = cva(
    'bg-background flex justify-center p-0 m-0',
    {
        variants: {
            variant: {
                header: 'border-b-1 border-border-bold',
                hero: '',
                about: '',
            }, 
        },

        defaultVariants: {
            variant:'header',
        }
    }
)

export function Container({children, className, variant, ...props}: ContainerType & VariantProps<typeof containerVariants>){
    return (
        <section className={cn(containerVariants({variant, className}))} {...props}>
            <ContainerChild variant={variant}>
                {children}
            </ContainerChild>
        </section>
    )
}

