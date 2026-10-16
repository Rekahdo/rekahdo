'use client'

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { useState, type ReactNode } from "react";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "./toggle";
import { Navigation, NavItem } from "./navigation";

type SideBarType = {
    side?: "left" | "top" | "right" | "bottom";
    trigger?: ReactNode;
    triggerLabel?: string;
    logo?: ReactNode;
    themeToggle?: ReactNode;
    title?: string;
    description?: string;
    top?: ReactNode;
    bottom?: ReactNode;
    className?: string;
    navItems: NavItem[];
}

export function SideSheet({
    side = "left",
    trigger = <Menu className="size-5" />,
    triggerLabel = "Open menu",
    logo = <Logo />,
    title,
    description,
    top,
    bottom,
    className,
    navItems,
}: SideBarType) {

    const [open, setOpen] = useState(false);
    const media = useWidthMedia().maxMlg;

    return (
        <>{
            media &&
            <section aria-label="Mobile navigation"
                className={cn("ml-auto flex items-center")}>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger aria-label={triggerLabel}
                        render={
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                className="size-9 rounded-xl border-border/70 hover:bg-muted/60"
                            >
                                {trigger}
                            </Button>
                        }>
                    </SheetTrigger>

                    <SheetContent
                        side={side}
                        showCloseButton={false}
                        className={cn(
                            "flex flex-col justify-between p-6 bg-card/95 backdrop-blur-xl border-border/70",
                            className
                        )}
                    >
                        {(logo || top || title || description || navItems) &&
                            <SheetHeader className="p-0 text-left space-y-4">
                                {logo &&
                                    <div className="flex justify-between items-center w-full pb-3 border-b border-border/40">
                                        <span onClick={() => setOpen(false)} className="cursor-pointer">{logo}</span>
                                        <ThemeToggle />
                                    </div>
                                }

                                {top && <div className="pt-2">{top}</div>}

                                {title && <SheetTitle className="text-lg font-semibold tracking-tight">{title}</SheetTitle>}

                                {description && <SheetDescription className="text-xs text-muted-foreground">{description}</SheetDescription>}

                                <div className="py-2">
                                    <Navigation
                                        navItems={navItems}
                                        onNavigate={() => setOpen(false)}
                                        orientation={'vertical'}
                                        width={'full'}
                                        height={'sm'}
                                        gap={'xs'}
                                    />
                                </div>
                            </SheetHeader>
                        }

                        {bottom && (
                            <SheetFooter className="p-0 pt-4 border-t border-border/40 w-full">
                                {bottom}
                            </SheetFooter>
                        )}
                    </SheetContent>
                </Sheet>
            </section>
        }</>
    );
}
