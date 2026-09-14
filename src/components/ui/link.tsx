import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentType } from "../../utils/type";

const linkVariant = cva(
    'transition-colors cursor-pointer',
    {
        variants: {
            variant: {
                text: '',
                img: '',
                nav: 'p-4 font-extrabold hover:bg-accent hover:text-accent-foreground',
                btn: 'flex justify-center',
            }
        },
        defaultVariants: {
            variant: 'text'
        }
    }
)

export type LinkType = {
    id?: number;
    text?: string;
    href?: string;
    file_name?: string;
}

type LinkCompType = LinkType & ComponentType & VariantProps<typeof linkVariant>;

function Link({ children, className, variant, ...props }: LinkCompType) {
    return (
        <a href={props.href} download={props.file_name}
            className={cn(linkVariant({ variant, className }))}>
            {variant === "text" || variant === "nav" ? props.text : children }
        </a>
    )
}

export { Link }
