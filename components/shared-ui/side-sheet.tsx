'use client'

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";
import { navigationLinkVariants, NavigationProps, navlinks } from "./navigation";
import { AnchorBtn, PageBtn } from "./buttons";

const sideSheetVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: ""
            },
        },
        defaultVariants: {
        }
    }
)

const sideSheetTriggerVariants = cva(
    cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "transition-colors focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-foreground",
    ),
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

type SideBarType = VariantProps<typeof sideSheetVariants> &
    VariantProps<typeof sideSheetTriggerVariants> & NavigationProps & {
        side?: "left" | "top" | "right" | "bottom";
        trigger?: ReactNode;
        triggerLabel?: string;
        logo?: ReactNode
        title?: string;
        description?: string;
        top?: ReactNode;
        bottom?: ReactNode;
        className?: string;
        navClassName?: string;
    }

export function SideSheet({
    size,
    side = "left",
    trigger = <Menu />,
    triggerLabel = "Open menu",
    logo,
    title,
    description,
    top,
    bottom,
    className,
    navClassName,
    ...navigationProps
}: SideBarType) {

    const [open, setOpen] = useState(false)
    const [hold, setHold] = useState(false)
    const [nav] = useState(navlinks)
    const { md } = useWidthMedia();

    useEffect(() => {
        setHold(false);
    }, [])

    useEffect(() => {
        if (md && open && hold)
            setOpen(false)
        if (hold && !md)
            setOpen(true)
    }, [md, open]);

    function openSheet(value: boolean) {
        if (value) setHold(value);
        else setHold(false);
        setOpen(value);
    }

    return (
        <nav aria-label="Mobile navigation"
            className={cn("ml-auto flex items-center mlg:hidden")}>

            <Sheet open={open} onOpenChange={openSheet}>
                <SheetTrigger
                    aria-label={triggerLabel}
                    className={cn(sideSheetTriggerVariants({ size }), "ms-0 sm:ms-2")}>
                    {trigger}
                </SheetTrigger>

                <SheetContent
                    showCloseButton={false}
                    side={side}
                    className={cn(sideSheetVariants({ className }), "")}>
                    {(logo || top || title || description || nav.links) &&
                        <SheetHeader className="pt-2">
                            {logo &&
                                <div className="p-2 me-auto" onClick={() => openSheet(false)}>
                                    {logo}
                                </div>
                            }

                            {top && <div className="p-2">{top}</div>}

                            {title && <SheetTitle className="p-2">{title}</SheetTitle>}

                            {description && <SheetDescription className="ps-2 pb-2">{description}</SheetDescription>}

                            {((logo || top || title || description) && nav.links) &&
                                <hr className="my-2 border-border" />}

                            <nav aria-label="Mobile navigation links"
                                className={cn("flex flex-col", navClassName)}>

                                {nav.pageLink && nav.links.map((link, i) => (
                                    <PageBtn key={`${link.text}-${i}`} onClick={() => openSheet(false)} {...link} variant={"ghost"}
                                        className={cn(navigationLinkVariants({ ...navigationProps }))} />
                                ))}

                                {!nav.pageLink && nav.links.map((link, i) => (
                                    <AnchorBtn key={`${link.text}-${i}`} onClick={() => openSheet(false)} {...link} variant={"ghost"}
                                        className={cn(navigationLinkVariants({ ...navigationProps }))} />
                                ))}
                            </nav>
                        </SheetHeader>
                    }

                    {bottom && <SheetFooter className="p-2">{bottom}</SheetFooter>}
                </SheetContent>
            </Sheet>
        </nav>
    )
}