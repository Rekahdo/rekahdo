import { Menu } from "lucide-react";
import { navigationLinkVariants, type NavigationBarProps } from "./navigation-bar";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState, type ComponentProps, type ReactElement, type ReactNode } from "react";
import type { Logo } from "./logo";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";
import { AnchorBtn, type PageBtnType } from "./button";

const sideBarVariants = cva(
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

const sideBarTriggerVariants = cva(
    "inline-flex items-center justify-center rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground",
    {
        variants: {
            size: {
                sm: "size-8",
                md: "size-9",
                lg: "size-10",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

type SideBarType = VariantProps<typeof sideBarVariants> &
    VariantProps<typeof sideBarTriggerVariants> & NavigationBarProps & {
        side?: "left" | "top" | "right" | "bottom";
        trigger?: ReactNode;
        triggerLabel?: string;
        logo?: ReactElement<ComponentProps<typeof Logo>, typeof Logo>;
        title?: string; description?: string;
        top?: ReactNode;
        links: PageBtnType[];
        navClassName?: string;
        bottom?: ReactNode;
        className?: string;
    }

export function SideBar({
    size,
    side = "left",
    trigger = <Menu />,
    triggerLabel = "Open menu",
    logo,
    title,
    description,
    top,
    links,
    navClassName,
    bottom,
    className,
    variant,
    ...navlinkProps
}: SideBarType) {

    const [open, setOpen] = useState(false)
    const [hold, setHold] = useState(false)
    const { large } = useWidthMedia();

    useEffect(() => {
        setHold(false);
    }, [])

    useEffect(() => {
        if (large && open && hold)
            setOpen(false)
        if (hold && !large)
            setOpen(true)
    }, [large, open]);

    function openSheet(value: boolean) {
        if (value) setHold(value);
        else setHold(false);
        setOpen(value);
    }

    return (
        <nav aria-label="Mobile navigation"
            className="ml-auto flex items-center gap-4 lg:hidden">
            <Sheet open={open} onOpenChange={openSheet}>
                <SheetTrigger
                    aria-label={triggerLabel}
                    className={cn(sideBarTriggerVariants({ size }), "ms-2 sm:ms-4")}>
                    {trigger}
                </SheetTrigger>


                <SheetContent
                    showCloseButton={false}
                    side={side}
                    className={cn(sideBarVariants({ variant }), className)}>
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
                                <nav aria-label="Mobile navigation links"
                                    className={navClassName}>
                                    {links?.map((link, i) => 
                                        <AnchorBtn key={i} {...link} variant={"link"}
                                            onClick={() => openSheet(false)}
                                            className={cn(navigationLinkVariants({ ...navlinkProps }))} />
                                    )}
                                </nav>
                            }
                        </SheetHeader>
                    }

                    {bottom && <SheetFooter className="p-4">{bottom}</SheetFooter>}
                </SheetContent>
            </Sheet>
        </nav>
    )
}