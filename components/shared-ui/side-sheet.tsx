'use client'

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { useState, type ReactNode } from "react";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";
import { navigationLinkVariants, NavigationProps, navlinks } from "./navigation";
import { AnchorBtn, PageBtn } from "./button-impl";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "./toggle";

type SideBarType = NavigationProps & {
    side?: "left" | "top" | "right" | "bottom";
    trigger?: ReactNode;
    triggerLabel?: string;
    logo?: ReactNode
    themeToggle?: ReactNode
    title?: string;
    description?: string;
    top?: ReactNode;
    bottom?: ReactNode;
    className?: string;
    navClassName?: string;
}

export function SideSheet({
    side = "left",
    trigger = <Menu />,
    triggerLabel = "Open menu",
    logo = <Logo />,
    title,
    description,
    top,
    bottom,
    className,
    ...navigationProps
}: SideBarType) {

    const [open, setOpen] = useState(false)
    const media = useWidthMedia().maxMd;
    const [nav] = useState(navlinks)

    return (
        <>{
            media &&
            <section aria-label="Mobile navigation"
                className={cn("ml-auto flex items-center")}>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger aria-label={triggerLabel}
                        render={<Button variant={"outline"}>{trigger}</Button>}>
                    </SheetTrigger>

                    <SheetContent side={side} showCloseButton={false}>
                        {(logo || top || title || description || nav) &&

                            <SheetHeader className="pt-2">
                                {logo &&
                                    <div className="p-2 me-auto flex justify-between items-center w-full">
                                        <span onClick={() => setOpen(false)}>{logo}</span>
                                        <ThemeToggle />
                                    </div>
                                }

                                {top && <div className="p-2">{top}</div>}

                                {title && <SheetTitle className="p-2">{title}</SheetTitle>}

                                {description && <SheetDescription className="ps-2 pb-2">{description}</SheetDescription>}

                                {((logo || top || title || description) && nav) &&
                                    <hr className="my-2 border-border" />}

                                <nav aria-label="Mobile navigation links"
                                    className={cn("flex flex-col")}>

                                    <ul>
                                        {nav.map((link, i) =>
                                            <li className="*:py-6 " key={i} onClick={() => setOpen(false)}>
                                                {link}
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            </SheetHeader>
                        }

                        {bottom && <SheetFooter className="p-2">{bottom}</SheetFooter>}
                    </SheetContent>
                </Sheet>
            </section>
        }</>
    )
}