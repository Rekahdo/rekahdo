"use client"

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    useEffect,
    type ButtonHTMLAttributes,
    type ElementType,
    type ReactNode,
} from "react";
import { Button, buttonVariants } from "../ui/button";
import { Download, ExternalLink, Loader } from "lucide-react";
import { scrollToId } from "./navigation";

export const buttonImplVariants = cva("flex gap-2", {
    variants: {
        height: {
            md: "h-10",
            lg: "h-12",
        },
    },
});

type PageType = { type: "page"; href: string };
type ScrollType = { type: "scroll"; id: string };
type DownloadType = { type: "download"; href: string; filename: string };
type ExternalType = { type: "external"; href: string };

type RenderType = PageType | ScrollType | DownloadType | ExternalType;

type ButtonVariantProps = VariantProps<typeof buttonVariants> &
    VariantProps<typeof buttonImplVariants>;

type NativeButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "className"
>;

export interface ButtonImplProps extends ButtonVariantProps, NativeButtonProps {
    render?: RenderType;
    text?: ReactNode;
    icon?: ReactNode;
    showIcon?: boolean;
    side?: "left" | "right";
    onClick?: () => void;
    className?: string;
    isPending?: boolean;
    pendingState?: ReactNode;
    isDisabled?: boolean;
    showTextAt?: "all" | "sm" | "md" | "lg";
    type?: "submit" | "button" | "reset" | undefined;
}

const SHOW_TEXT_AT_STYLES = cn(
    "hidden",
    "data-[sh=all]:inline",
    "sm:data-[sh=sm]:inline",
    "md:data-[sh=md]:inline",
    "lg:data-[sh=lg]:inline",
);

export function ButtonImpl({
    render,
    text,
    icon,
    showIcon = true,
    side = "left",
    onClick,
    className,
    isPending,
    pendingState = text,
    isDisabled,
    showTextAt = "all",
    variant,
    size,
    height,
    type = "button",
    ...rest
}: ButtonImplProps) {
    const isDisabledOrPending = Boolean(isDisabled) || Boolean(isPending);

    let Tag: ElementType = Button;
    let tagProps: Record<string, unknown> = { type, onClick };

    const scroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (render && render.type === "scroll") {
            scrollToId({ id: render.id, e });
        }
    };

    if (render) {
        if (render.type === "page") {
            Tag = Link;
            tagProps = { href: render.href, type: undefined, onClick };
        } else if (render.type === "scroll") {
            Tag = "a";
            tagProps = { type: undefined, onClick: scroll };
        } else if (render.type === "download") {
            Tag = "a";
            tagProps = { href: render.href, download: render.filename, type: undefined, onClick };
        } else if (render.type === "external") {
            Tag = Link;
            tagProps = {
                href: render.href,
                target: "_blank",
                rel: "noopener noreferrer",
                type: undefined,
                onClick,
            };
        }
    }

    if (isDisabledOrPending) {
        Tag = 'button';
    }

    const BtnIcon = () => <span className="*:size-4">
        {isPending ? <Loader className="animate-spin" /> : icon}
    </span>

    return (
        <Tag
            {...tagProps}
            {...rest}
            disabled={isDisabledOrPending || undefined}
            className={cn("cursor-pointer",
                buttonVariants({ variant, size }),
                buttonImplVariants({ height }),
                className,
            )}
        >
            {showIcon && side === "left" && <BtnIcon />}

            <span data-sh={showTextAt} className={SHOW_TEXT_AT_STYLES}>
                {isPending ? pendingState : text}
            </span>

            {showIcon && side === "right" && <BtnIcon />}
        </Tag>
    );
}

export function PageBtn(props: ButtonImplProps & { href: string }) {
    return <ButtonImpl {...props} render={{ type: "page", href: props.href }} />;
}

export function ScrollBtn({ id, ...props }: ButtonImplProps & { id: string }) {
    return <ButtonImpl {...props} render={{ type: "scroll", id }} />;
}

export function DownloadBtn({ href, filename, showTextAt = "sm", ...props }:
    ButtonImplProps & { href: string; filename: string }) {
    return (
        <ButtonImpl
            {...props}
            showTextAt={showTextAt}
            icon={<Download />}
            render={{ type: "download", href, filename }}
        />
    );
}

export function ExternalBtn({ href, showTextAt = "sm", ...props }:
    ButtonImplProps & { href: string }) {
    return (
        <ButtonImpl
            {...props}
            showTextAt={showTextAt}
            icon={<ExternalLink />}
            render={{ type: "external", href }}
        />
    );
}