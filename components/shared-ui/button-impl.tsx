import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Link from "next/link";
import { ButtonHTMLAttributes, ElementType, MouseEvent, ReactNode, useTransition } from "react";
import { buttonVariants } from "../ui/button";
import { Download, ExternalLink, Loader, LogIn, LogOut, } from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { ErrorType } from "@/lib/types";

const buttonImplVariants = cva(
    cn("flex gap-2 "),
    {
        variants: {
            height: {
                md: "h-10",
                lg: "h-12",
            }
        }
    }
)

interface ButtonImplProps extends VariantProps<typeof buttonVariants>,
    VariantProps<typeof buttonImplVariants> {
    href?: string;
    text?: ReactNode;
    filename?: string;
    icon?: ReactNode;
    showIcon?: boolean;
    side?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    isPending?: boolean;
    pendingState?: ReactNode;
    isDisabled?: boolean;
    showTextAt?: "all" | "sm" | "md" | "lg";
}

type RenderType = {
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

export function ButtonImpl({
    href,
    text,
    filename,
    icon,
    showIcon = true,
    side = 'left',
    onClick,
    className,
    children,
    isPending,
    pendingState = text,
    isDisabled,
    showTextAt = 'all',
    download,
    scroll,
    open,
    type,
    height,
    ...btnProps
}: ButtonImplProps & RenderType & ButtonHTMLAttributes<typeof HTMLButtonElement>) {

    const scrollToId = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        onClick?.();

        if (!href) return;

        const element = document.getElementById(href);
        if (!element) return;

        const OFFSET = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({ top, behavior: "smooth" });
    };

    const isButton = (Boolean(type) || !Boolean(href) || isDisabled || isPending)
    const isAnchorTag = (!isButton && (download || scroll || open))
    const isOpenLink = (isAnchorTag && open)
    const isDownloadFile = (isAnchorTag && download)
    const isScrollToID = (isAnchorTag && scroll)

    const Tag: ElementType = (isButton ? 'button' : (isAnchorTag ? 'a' : Link));
    const buttonAttributes = isButton ? { type: type } : {};
    const hrefAttributes = !isButton ? { href: href } : {};
    const openAttributes = isOpenLink ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const downloadAttributes = isDownloadFile ? { download: filename } : {};
    const scrollAttributes = isScrollToID ? { onClick: scrollToId } : { onClick };

    const btnIcon = () => <span>
        {isPending ? <Loader className="size-4 animate-spin" /> : icon}
    </span>

    return (
        <Tag
            disabled={(isDisabled || isPending) || undefined}
            {...buttonAttributes}
            {...hrefAttributes}
            {...openAttributes}
            {...downloadAttributes}
            {...scrollAttributes}
            className={cn(
                buttonVariants({ ...btnProps }),
                buttonImplVariants({ height }),
                className,
            )}
        >
            {(showIcon && side === 'left') && btnIcon()}

            <span data-sh={showTextAt} className={SHOW_TEXT_AT_STYLES}>
                {isPending ? `${pendingState} . . .` : <>{text} {children}</>}
            </span>

            {(showIcon && side === 'right') && btnIcon()}
        </Tag>
    );
}

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

export function PageBtn(props: ButtonImplProps) {
    return <ButtonImpl {...props} />;
}

export function AnchorBtn({ id, ...props }: { id: string } & Omit<ButtonImplProps, 'href'>) {
    return <ButtonImpl href={id} {...props} scroll />;
}

export function DownloadBtn({ icon = <Download />, ...props }: ButtonImplProps) {
    return <ButtonImpl icon={icon} {...props} download />;
}

export function OpenBtn({ icon = <ExternalLink />, ...props }: ButtonImplProps) {
    return <ButtonImpl icon={icon} className="shadow-md" {...props} open />;
}

export function SignUpBtn(props: ButtonImplProps) {
    return (
        <Unauthenticated>
            <ButtonImpl
                {...props}
                href="/auth/signup"
                text="Signup"
            />
        </Unauthenticated>
    )
}

export function LoginBtn(props: ButtonImplProps) {
    return (
        <Unauthenticated>
            <ButtonImpl
                {...props}
                href="/auth/login"
                text="Login"
                icon={<LogIn />}
            />
        </Unauthenticated>
    )
}

export function LogoutBtn(props: ButtonImplProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    function logout() {
        startTransition(async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged out successfully");
                        router.push('/')
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message)
                    }
                }
            })
        })
    }

    return (
        // <Authenticated>
        <ButtonImpl
            {...props}
            href="/auth/login"
            text="Logout"
            variant={'outline'}
            onClick={logout}
            isPending={isPending}
            icon={<LogOut />}
        />
        // </Authenticated>
    )
}