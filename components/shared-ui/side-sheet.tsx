'use client'

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { useState, type ReactNode } from "react";
import { cn } from "cn";
import { useWidthMedia } from "../../hooks/useMedia";
import { Button, buttonVariants } from "../ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "./toggle";
import { Navigation, NavItem } from "./navigation";
import { CurrentDataTime } from "./current-datetime";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { ButtonImpl } from "./button-impl";

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
};

export function SideSheet({
    side = "left",
    trigger = <Menu className="size-5" />,
    triggerLabel = "Open menu",
    logo = <Logo variant={'header'} />,
    title,
    description,
    top,
    bottom,
    className,
    navItems,
}: SideBarType) {

    const [open, setOpen] = useState(false);
    const media = useWidthMedia().maxLg;

    return (
        <>
            {media && (
                <section aria-label="Mobile navigation"
                    className={cn("ml-auto flex items-center")}>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger aria-label={triggerLabel}
                            render={
                                <ButtonImpl
                                    variant={"outline"}
                                    height={'md'}
                                    icon={trigger}
                                />
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
                            {(logo || top || title || description || navItems) && (
                                <SheetHeader className="p-0 text-left space-y-4">
                                    {logo && (
                                        <div className="flex justify-between items-center w-full pb-3 border-b border-border/40">
                                            <span onClick={() => setOpen(false)} className="cursor-pointer">{logo}</span>

                                            <AnimatedThemeToggler className={cn(
                                                buttonVariants({ variant: 'outline' }),
                                                "cursor-pointer h-10",
                                            )} />
                                        </div>
                                    )}

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
                            )}

                            <SheetFooter className="p-0 pt-4 border-t border-border/40 w-full space-y-3">
                                {bottom}

                                <CurrentDataTime />
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </section>
            )}
        </>
    );
}