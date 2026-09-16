import { cn } from "cn";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { NavLink } from "react-router-dom";

const linkStyle = cn(
    'transition-colors cursor-pointer',
)

export type LinkType = AnchorHTMLAttributes<HTMLAnchorElement> & {
    text?: string;
    href: string;
    file_name?: string;
    className?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function Link({ children, text, className, href, onClick }: LinkType) {
    return (
        <NavLink to={href} onClick={onClick}
            className={cn(linkStyle, className)}>
            {text} {children}
        </NavLink>
    )
}