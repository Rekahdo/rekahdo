import { cn } from "cn";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import Link from "next/link";

const linkStyle = cn(
  'transition-colors cursor-pointer text-foreground hover:text-foreground/80',
)

export type LinkType = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text?: string;
  href: string;
  file_name?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function AppLink({ children, text, className, href, onClick }: LinkType) {
  return (
    <Link href={href} onClick={onClick}
      className={cn(linkStyle, className)}>
      {text} {children}
    </Link>
  )
}