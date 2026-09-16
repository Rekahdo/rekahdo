import { Menu } from "lucide-react";
import type { NavigationLinkType } from "./navigation-bar";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { Logo } from "./logo";
import { Link } from "./link";
import { cn } from "cn";

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

type SideBarType = VariantProps<typeof sideBarVariant> & {
    side?: "left" | "top" | "right" | "bottom";
    showCloseButton?: boolean;
    trigger?: ReactNode;
    logo?: ReactElement<ComponentProps<typeof Logo>, typeof Logo>;
    title?: string; description?: string;
    top?: ReactNode;
    links: NavigationLinkType[];
    bottom?: ReactNode;
    className?: string;
}

const linkStyle = cn();

export function SideBar({
    side,
    showCloseButton = true,
    trigger = <Menu />,
    logo,
    title,
    description,
    top,
    links,
    bottom,
    className,
    variant,
}: SideBarType) {
    return (
        <nav className="lg:hidden ml-auto flex items-center gap-4">
            <Sheet>
                <SheetTrigger className="p-4 -me-2 hover:bg-accent hover:text-accent-forground">
                    {trigger}
                </SheetTrigger>

                <SheetContent showCloseButton={showCloseButton} side={side} className={sideBarVariant({ variant, className })}>
                    {(logo || top || title || description || links) &&
                        <SheetHeader className="pt-4">
                            {logo && <div className="p-4">{logo}</div>}

                            {top && <div className="p-4">{top}</div>}

                            {title && <SheetTitle className="p-4">{title}</SheetTitle>}

                            {description && <SheetDescription className="ps-4 pb-4">{description}</SheetDescription>}

                            {links && <hr className="my-4" />}

                            {links?.map((link, i) => <Link key={i} {...link} className={linkStyle} />)}
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