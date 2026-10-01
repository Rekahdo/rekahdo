import { VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Link from "next/link";
import { ElementType, MouseEvent, ReactNode } from "react";
import { buttonVariants } from "../ui/button";
import { Download, ExternalLink } from "lucide-react";

interface ButtonImplProps extends VariantProps<typeof buttonVariants> {
    href?: string;
    text?: string;
    filename?: string;
    icon?: ReactNode;
    side?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    showTextAt?: "all" | "sm" | "md" | "lg";
}

type RenderType = {
    anchor?: boolean;
    download?: boolean;
    scroll?: boolean;
    open?: boolean;
}

const SHOW_TEXT_AT_STYLES = cn(
    "hidden",
    "data-[sh=all]:inline",
    "sm:data-[sh=sm]:inline",
    "md:data-[sh=md]:inline",
    "lg:data-[sh=lg]:inline",
);

class ButtonImpl {
    protected href?: string;
    protected text?: string;
    protected filename?: string;
    protected icon?: ReactNode;
    protected side: 'left' | 'right';
    protected onClick?: () => void;
    protected className?: string;
    protected children?: ReactNode;
    protected disabled?: boolean;
    protected showTextAt: "all" | "sm" | "md" | "lg";
    protected btnProps: VariantProps<typeof buttonVariants>;

    constructor({
        href,
        text,
        filename,
        icon,
        side = 'left',
        onClick,
        className,
        children,
        disabled,
        showTextAt = 'all',
        ...btnProps
    }: ButtonImplProps) {
        this.href = href;
        this.text = text;
        this.filename = filename;
        this.icon = icon;
        this.side = side;
        this.onClick = onClick;
        this.className = className;
        this.children = children;
        this.disabled = disabled;
        this.showTextAt = showTextAt;
        this.btnProps = btnProps;
    }

    private scrollToId = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        this.onClick?.();

        if (!this.href) return;

        const element = document.getElementById(this.href);
        if (!element) return;

        const OFFSET = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({ top, behavior: "smooth" });
    };

    render({ anchor = false, download = false, scroll = false, open = false }: RenderType = {}): ReactNode {
        const isDisabled = Boolean(this.disabled);

        const Tag: ElementType = isDisabled ? 'button' : (anchor ? 'a' : Link);

        const openProps = (!isDisabled && open)
            ? { target: "_blank", rel: "noopener noreferrer" } : {};

        const downloadProps = (!isDisabled && download)
            ? { download: this.filename } : {};

        const scrollProps = isDisabled ? {}
            : (scroll ? { onClick: this.scrollToId } : { onClick: this.onClick });

        const buttonProps = (Tag === 'button') ? { type: 'button' as const } : {};

        return (
            <Tag
                href={isDisabled ? undefined : this.href}
                disabled={isDisabled || undefined}
                {...buttonProps}
                {...openProps}
                {...downloadProps}
                {...scrollProps}
                className={cn(
                    buttonVariants({ ...this.btnProps }),
                    "flex gap-2", this.className,
                )}
            >
                {this.side === 'left' && this.icon}

                <span data-sh={this.showTextAt} className={SHOW_TEXT_AT_STYLES}>
                    {this.text} {this.children}
                </span>

                {this.side === 'right' && this.icon}
            </Tag>
        );
    }
}

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

export function PageBtn(props: ButtonImplProps) {
    return new ButtonImpl({ ...props }).render({});
}

export function AnchorBtn({ id, ...props }: { id: string } & Omit<ButtonImplProps, 'href'>) {
    return new ButtonImpl({ href: id, ...props }).render({ anchor: true, scroll: true });
}

export function DownloadBtn({ icon = <Download />, ...props }: { filename: string } & Omit<ButtonImplProps, 'filename'>) {
    return new ButtonImpl({ icon, ...props }).render({ anchor: true, download: true });
}

export function OpenBtn({ icon = <ExternalLink />, ...props }: ButtonImplProps) {
    return new ButtonImpl({ icon, ...props }).render({ anchor: true, open: true });
}