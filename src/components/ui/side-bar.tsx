import { Menu } from "lucide-react";
import { navigationLinkVariants, type NavigationLinkType, type NavigationType } from "./navigation-bar";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState, type ComponentProps, type ReactElement, type ReactNode } from "react";
import type { Logo } from "./logo";
import { Link } from "./link";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";

const sideBarVariant = cva(
    "",
    {
        variants: {
            variant: {
                default: ""
            },
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

type SideBarType = VariantProps<typeof sideBarVariant> & NavigationType & {
    side?: "left" | "top" | "right" | "bottom";
    trigger?: ReactNode;
    logo?: ReactElement<ComponentProps<typeof Logo>, typeof Logo>;
    title?: string; description?: string;
    top?: ReactNode;
    links: NavigationLinkType[];
    navClassName?: string;
    bottom?: ReactNode;
    className?: string;
}

export function SideBar({
    side,
    trigger = <Menu />,
    logo,
    title,
    description,
    top,
    links,
    navClassName,
    bottom,
    className,
    variant,
    ...props
}: SideBarType) {

    const [open, setOpen] = useState(false)
    const { large } = useWidthMedia();

    useEffect(() => {
        localStorage.removeItem("openSheet");
    }, [])

    useEffect(() => {
        if (large && open && localStorage.openSheet)
            setOpen(false)
        if (localStorage.openSheet && !large)
            setOpen(true)
    }, [large, open]);

    function openSheet(value: boolean) {
        if (value) localStorage.openSheet = true;
        else localStorage.removeItem("openSheet");
        setOpen(value);
    }

    return (
        <nav className="lg:hidden ml-auto flex items-center gap-4">
            <Sheet open={open} onOpenChange={openSheet}>
                <SheetTrigger
                    className="p-2 ms-2 sm:ms-4 rounded-md hover:bg-accent hover:text-accent-forground">
                    {trigger}
                </SheetTrigger>

                <SheetContent showCloseButton={false} side={side} className={sideBarVariant({ variant, className })}>
                    {(logo || top || title || description || links) &&
                        <SheetHeader className="pt-4">
                            {logo &&
                                <div className="p-4 me-auto" onClick={() => openSheet(false)}>
                                    {logo}
                                </div>
                            }

                            {top && <div className="p-4">{top}</div>}

                            {title && <SheetTitle className="p-4">{title}</SheetTitle>}

                            {description && <SheetDescription className="ps-4 pb-4">{description}</SheetDescription>}

                            {((logo || top || title || description) && links) &&
                                <hr className="my-4" />}

                            {links &&
                                <nav className={navClassName}>
                                    {links?.map((link, i) => <Link key={i} {...link}
                                        className={cn(navigationLinkVariants({ ...props }))}
                                        onClick={() => openSheet(false)} />)}
                                </nav>
                            }
                        </SheetHeader>
                    }

                    {bottom &&
                        <SheetFooter className="p-4">
                            {bottom}
                        </SheetFooter>
                    }
                </SheetContent>
            </Sheet>
        </nav>
    )
}