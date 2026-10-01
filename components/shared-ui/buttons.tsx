import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Link from "next/link";
import { ElementType, MouseEvent, ReactNode } from "react";
import { buttonVariants } from "../ui/button";
import { DownloadIcon, ExternalLink } from "lucide-react";


type ButtonsType = VariantProps<typeof ButtonsVariants> & {
  className?: string;
  btns: ReactNode[]
}

const ButtonsVariants = cva(
  [
    "flex flex-wrap gap-4 md:gap-6 items-center",
  ],
  {
    variants: {
      width: {
        stretch: "w-full",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      width: 'stretch',
    }
  }
)

export function Buttons({ btns, width, className }: ButtonsType) {
  if (!btns) return null;
  return (
    <div className={cn(ButtonsVariants({ width, className }))}>
      {btns}
    </div>
  )
}

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

export interface WebBtnType extends VariantProps<typeof buttonVariants> {
  text?: string;
  href: string;
  visible?: boolean;
  className?: string;
  icon?: ReactNode;
  side?: 'left' | 'right';
  onClick?: () => void
}

export function PageBtn({
  text,
  href,
  visible = true,
  className,
  onClick,
  ...props
}: WebBtnType) {
  if (!visible) return null;

  return (
    <Link href={href} onClick={onClick} tabIndex={1}
      className={cn(buttonVariants({ ...props }), className)}>
      {text}
    </Link>
  );
}


export function AnchorBtn({
  text,
  href,
  visible = true,
  className,
  onClick,
  ...props
}: WebBtnType) {
  if (!visible) return null;

  const scrollToId = () => {
    if (onClick) onClick();

    const element = document.getElementById(href);
    if (!element) return;

    const OFFSET = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToId();
      }}
      tabIndex={1}
      className={cn(buttonVariants({ ...props }), className)}
    >
      {text}
    </a>
  );
}


export function OpenBtn({
  text,
  href,
  visible = true,
  className,
  onClick,
  icon = <ExternalLink />,
  side = "left",
  ...props
}: WebBtnType) {
  if (!visible) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={cn(buttonVariants({ ...props }), className)} >
      {side === 'left' && icon}
      {text}
      {side === 'right' && icon}
    </a>
  );
}


export function DownloadBtn({
  text,
  href,
  visible = true,
  className,
  name: file_name,
  onClick,
  ...props
}: WebBtnType & { name: string }) {
  if (!visible) return null;

  return (
    <a href={href} download={file_name} tabIndex={-1}
      className={cn(buttonVariants({ ...props }), className)} >
      <DownloadIcon />
      {text}
    </a>
  );
}