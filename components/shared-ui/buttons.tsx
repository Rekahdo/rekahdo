import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "../ui/button";
import { Download, DownloadIcon, ExternalLink } from "lucide-react";

type ButtonsType = VariantProps<typeof ButtonsVariants> & {
  className?: string;
  btns: ReactNode[]
}

const ButtonsVariants = cva(
  [
    "flex flex-wrap gap-4 md:gap-6 align-center justify-center",
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

export type WebBtnType = VariantProps<typeof buttonVariants> & {
  text?: string;
  href: string;
  visible?: boolean;
  className?: string;
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
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href={href} onClick={(e) => { e.preventDefault(); scrollToId() }} tabIndex={1}
      className={cn(buttonVariants({ ...props }), className)} >
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
  ...props
}: WebBtnType) {
  if (!visible) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={cn(buttonVariants({ ...props }), className)} >
      <ExternalLink />
      {text}
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