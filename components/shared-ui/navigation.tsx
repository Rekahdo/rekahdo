import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ReactElement } from "react";
import { ButtonImpl } from "./button-impl";
import Link from "next/link";
import { ElementType, MouseEvent, ReactNode } from "react";

interface NavLinkBase {
    href: string;
    label: string;
    icon?: ReactNode;
    description?: string;
    disabled?: boolean;
}

interface NavPageLink extends NavLinkBase {
    type: "page";
}

interface NavScrollLink extends NavLinkBase {
    type: "scroll";
    offset?: number | 60;
}

interface NavDownloadLink extends NavLinkBase {
    type: "download";
    filename: string;
}

interface NavExternalLink extends NavLinkBase {
    type: "external";
}

type NavLink =
    | NavPageLink
    | NavScrollLink
    | NavDownloadLink
    | NavExternalLink;

export interface NavItem {
    label?: string;
    link?: NavLink;
    links?: NavLink[];
}

interface NavigationProps {
    className?: string;
    side?: 'start' | 'center' | 'end';
    navItems: NavItem[];
    onNavigate?: () => void;
}

export const navigationVariants = cva(
    cn(),
    {
        variants: {
            textSize: {
                xxs: "text-[0.7rem]!",
                xs: "text-xs!",
                sm: "text-sm!",
                lg: "text-lg!",
            },
            textCase: {
                capitalize: "capitalize",
                lowercase: "lowercase",
                uppercase: "uppercase",
            },
            textAlign: {
                start: "text-start justify-start",
                center: "text-center justify-center",
                end: "text-end justify-end",
            },
            height: {
                none: "py-0!",
                xs: "py-2!",
                sm: "py-4!",
                lg: "py-6!",
                xl: "py-8!",
            },
            width: {
                none: "px-0!",
                xs: "px-2!",
                sm: "px-4!",
                lg: "px-6!",
                full: "w-full",
            },
            gap: {
                none: "gap-0",
                xxs: "gap-1",
                xs: "gap-2",
                sm: "gap-4",
                md: "gap-6",
                lg: "gap-8",
            },
            orientation: {
                vertical: "flex flex-col",
                horizontal: "flex flex-row",
            },
            side: {
                start: "data-[orie=horizontal]:justify-start data-[orie=vertical]:items-start",
                center: "data-[orie=horizontal]:justify-center data-[orie=vertical]:items-center",
                end: "data-[orie=horizontal]:justify-end data-[orie=vertical]:items-end",
            }
        },
    }
);

export function Navigation({ className, side, navItems, onNavigate, ...variants }:
    NavigationProps & VariantProps<typeof navigationVariants>) {

    const noLabel = navItems.findIndex(item => Boolean(item.links) && !Boolean(item.label));
    if (noLabel !== -1) throw new Error(`Nav link with index '${noLabel}' must have a label`)

    const noLink = navItems.find(item => !Boolean(item.link) && !Boolean(item.links))
    if (noLink) throw new Error(`${noLink.label} nav has neither a link or a list of links`)

    return (
        <NavigationMenu className={cn("w-full flex max-w-full", className)}>
            <NavigationMenuList data-side={side} data-orie={variants.orientation}
                className={cn(navigationVariants({
                    gap: variants.gap, orientation: variants.orientation, side
                }), "flex-wrap")}>

                {navItems.map((item, i) => (
                    <NavigationMenuItem key={i} className={variants.width === 'full' ? "w-full" : "w-fit"}>

                        {Boolean(item.links) ?
                            <>
                                <NavigationMenuTrigger className={"hover:text-primary hover:bg-primary/5"}>
                                    {item.label}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul>
                                        {item.links?.map((link, i) => (
                                            <li key={i}>
                                                {<LinkTag fromList={true} link={link} onNavigate={onNavigate}
                                                    width={variants.width} height={variants.height}
                                                    textCase={variants.textCase} textSize={variants.textSize}
                                                    textAlign={variants.textAlign} />}
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </> :

                            <LinkTag fromList={false} link={item.link!} onNavigate={onNavigate}
                                width={variants.width} height={variants.height}
                                textCase={variants.textCase} textSize={variants.textSize}
                                textAlign={variants.textAlign} />
                        }

                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )

}

function LinkTag({ link, onNavigate, width, height, textAlign, fromList }: {
    fromList: boolean;
    link: NavLink; onNavigate?: () => void;
    width?: VariantProps<typeof navigationVariants>['width'];
    height?: VariantProps<typeof navigationVariants>['height'];
    textCase?: VariantProps<typeof navigationVariants>['textCase'];
    textSize?: VariantProps<typeof navigationVariants>['textSize'];
    textAlign?: VariantProps<typeof navigationVariants>['textAlign'];
}) {

    const scrollToId = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        onNavigate?.();

        if (link!.href) return;

        const element = document.getElementById(link!.href);
        if (!element) return;

        const OFFSET = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({ top, behavior: "smooth" });
    };

    const Tag = (link.type === "download" ? 'a' : Link) as ElementType
    const downloadAttributes = link.type === "download" ? { download: link.filename } : {};
    const externalAttributes = link.type === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const scrollAttributes = link.type === "scroll" ? { onClick: scrollToId } : { onClick: onNavigate };
    const hrefAttributes = link.type === "scroll" ? { href: `#${link.href}` } : { href: link.href };

    return (
        <NavigationMenuLink
            className={cn(
                navigationMenuTriggerStyle(),
                navigationVariants({ width, height }),
                "w-full"
            )}
            render={
                <Tag
                    {...downloadAttributes}
                    {...externalAttributes}
                    {...scrollAttributes}
                    {...hrefAttributes}
                    className={cn(
                        navigationVariants({ textAlign }),
                        "flex flex-row gap-2 transition-colors",
                        "hover:bg-primary/1 hover:text-primary",
                        "focus-visible:bg-primary/5 focus-visible:text-primary",
                    )}
                >
                    {link.icon && (
                        <span className="size-4">
                            {link.icon}
                        </span>
                    )}

                    <div className="flex flex-col items-start text-start gap-2 text-sm max-w-lg">
                        <p className="leading-none font-medium">
                            {link.label}
                        </p>

                        {(fromList && link.description) && (
                            <p className="line-clamp-2">
                                {link.description}
                            </p>
                        )}
                    </div>
                </Tag>
            }
        />
    )
}