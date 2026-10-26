'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import NextLink from "next/link";
import { ElementType, MouseEvent, ReactNode } from "react";
import { HEADER_ID } from "../sections/header-section";

interface NavLinkBase {
    href: string;
    label: ReactNode;
    icon?: ReactNode;
    description?: string;
    disabled?: boolean;
}

interface NavPageLink extends NavLinkBase {
    type: "page";
}

interface NavScrollLink extends NavLinkBase {
    type: "scroll";
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
                xs: "py-1.5!",
                sm: "py-2!",
                lg: "py-3!",
                xl: "py-4!",
            },
            width: {
                none: "px-0!",
                xs: "px-2.5!",
                sm: "px-4!",
                lg: "px-5!",
                full: "w-full",
            },
            gap: {
                none: "gap-0",
                xxs: "gap-1",
                xs: "gap-1.5",
                sm: "gap-3",
                md: "gap-4",
                lg: "gap-6",
            },
            orientation: {
                vertical: "flex flex-col",
                horizontal: "flex flex-row items-center",
            },
            side: {
                start: "data-[orie=horizontal]:justify-start data-[orie=vertical]:items-start",
                center: "data-[orie=horizontal]:justify-center data-[orie=vertical]:items-center",
                end: "data-[orie=horizontal]:justify-end data-[orie=vertical]:items-end",
            }
        },
    }
);

export function scrollToId({ id, onNavigate, scrollType = "smooth", e }: {
    id: string;
    onNavigate?: () => void;
    scrollType?: ScrollBehavior,
    e?: MouseEvent<HTMLElement>;
}) {
    e?.preventDefault();
    onNavigate?.();

    const targetId = id.startsWith("#") ? id.slice(1) : id;
    const element = document.getElementById(targetId);
    if (!element) return;

    const OFFSET = document.getElementById(HEADER_ID)?.getBoundingClientRect().height ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

    window.scrollTo({ top, behavior: scrollType });
}

export function Navigation({ className, side, navItems, onNavigate, ...variants }:
    NavigationProps & VariantProps<typeof navigationVariants>) {

    const noLabel = navItems.findIndex(item => Boolean(item.links) && !Boolean(item.label));
    if (noLabel !== -1) throw new Error(`Nav link with index '${noLabel}' must have a label`);

    const noLink = navItems.find(item => !Boolean(item.link) && !Boolean(item.links));
    if (noLink) throw new Error(`${noLink.label} nav has neither a link or a list of links`);

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
                                <NavigationMenuTrigger className={"hover:text-primary hover:bg-muted/60 rounded-full text-xs font-medium"}>
                                    {item.label}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="p-2 min-w-44 bg-card/95 backdrop-blur-md rounded-xl border border-border/60 shadow-xl">
                                        {item.links?.map((link, i) => (
                                            <li key={i}>
                                                <NavigationMenuLink
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        navigationVariants({
                                                            width: variants.width,
                                                            height: variants.height,
                                                        }),
                                                        "w-full rounded-lg text-xs"
                                                    )}
                                                    render={
                                                        <NavigationLink fromList={true} link={link} onNavigate={onNavigate}
                                                            textCase={variants.textCase} textSize={variants.textSize}
                                                            textAlign={variants.textAlign} />
                                                    }
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </> :

                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    navigationVariants({
                                        width: variants.width,
                                        height: variants.height,
                                    }),
                                    "w-full bg-transparent hover:bg-background/80 dark:hover:bg-background/50 hover:text-foreground text-muted-foreground rounded-full transition-all text-xs font-medium"
                                )}
                                render={
                                    <NavigationLink fromList={false} link={item.link!} onNavigate={onNavigate}
                                        textCase={variants.textCase} textSize={variants.textSize}
                                        textAlign={variants.textAlign} />
                                }
                            />
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export function NavigationLink({ className, link, onNavigate, width, height, textAlign, fromList, }: {
    className?: string;
    fromList?: boolean;
    link: NavLink;
    onNavigate?: () => void;
    width?: VariantProps<typeof navigationVariants>['width'];
    height?: VariantProps<typeof navigationVariants>['height'];
    textCase?: VariantProps<typeof navigationVariants>['textCase'];
    textSize?: VariantProps<typeof navigationVariants>['textSize'];
    textAlign?: VariantProps<typeof navigationVariants>['textAlign'];
}) {

    const Tag = (link.type === "download" ? 'a' : NextLink) as ElementType;
    const downloadAttributes = link.type === "download" ? { download: link.filename } : {};
    const externalAttributes = link.type === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const hrefAttributes = link.type === "scroll" ? { href: `#${link.href.replace(/^#/, "")}` } : { href: link.href };
    const scrollAttributes = link.type === "scroll"
        ? { onClick: (e: MouseEvent<HTMLAnchorElement>) => scrollToId({ id: link.href, onNavigate, e }) }
        : { onClick: onNavigate };

    return (
        <Tag
            {...downloadAttributes}
            {...externalAttributes}
            {...hrefAttributes}
            {...scrollAttributes}
            className={cn(
                navigationVariants({ textAlign, width, height }),
                "flex flex-row items-center gap-2 transition-all rounded-lg",
                "hover:text-primary focus-visible:text-primary",
                className
            )}
        >
            {link.icon && (
                <span className="size-4 shrink-0">
                    {link.icon}
                </span>
            )}

            <div className="flex flex-col items-start text-start gap-0.5 text-xs sm:text-sm max-w-lg">
                <div className="leading-none font-medium">
                    {link.label}
                </div>

                {(fromList && link.description) && (
                    <p className="line-clamp-2 text-xs text-muted-foreground font-normal">
                        {link.description}
                    </p>
                )}
            </div>
        </Tag>
    );
}
