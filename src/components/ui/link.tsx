import { cn } from "cn";
import type { AnchorHTMLAttributes } from "react";

const linkStyle = cn(
    'transition-colors cursor-pointer',
)

export type LinkType = AnchorHTMLAttributes<HTMLAnchorElement> & {
    text?: string;
    href?: string;
    file_name?: string;
    className?: string;
}

export function Link({ children, text, className, ...props }: LinkType) {
    return (
        <a href={props.href} download={props.file_name}
            className={cn(linkStyle, className)} {...props}>
            {text} {children}
        </a>
    )
}