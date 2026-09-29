import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, DetailedHTMLProps, JSXElementConstructor, ReactElement } from "react";
import { ComponentRenderFn, NavigationMenuLinkState } from "@base-ui/react";
import { AnchorBtn, PageBtn } from "./buttons";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { linksData } from "@/data/links";

export type LinkType = {
    href: string,
    text: string,
}

export const navlinks: { pageLink: boolean, links: LinkType[] } = {
    pageLink: false,
    links: [
        linksData.home,
        linksData.aboutMe,
        linksData.techStack,
        linksData.projects,
        linksData.contactMe,
    ]
} as const;

const navigationVariants = cva(
    "flex flex-col",
    {
        variants: {
            justify: {
                start: "me-auto",
                center: "mx-auto",
                end: "ms-auto",
            },
        },
        defaultVariants: {
            justify: "center",
        },
    }
);

const navigationMenuVariants = cva(
    "",
    {
        variants: {
            gap: {
                none: "gap-0",
                xxs: "gap-1",
                xs: "gap-2",
                sm: "gap-4",
                md: "gap-6",
                lg: "gap-8",
            }
        },
        defaultVariants: {
            gap: "sm",
        },
    }
);

export const navigationLinkVariants = cva(
    cn(
        navigationMenuTriggerStyle(),
        "hover:text-primary hover:bg-primary/5",
    ),
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
                full: "w-full text-start",
            },
        },
        defaultVariants: {
            textSize: "sm",
            height: "sm",
            width: "sm",
        },
    }
);

export type NavigationProps = VariantProps<typeof navigationVariants>
    & VariantProps<typeof navigationLinkVariants>
    & VariantProps<typeof navigationMenuVariants> &
{
    className?: string;
    linkClassName?: string;
}

export function Navigation({
    className,
    justify,
    gap,
    linkClassName,
    ...linkVariants
}: NavigationProps) {

    return (
        <NavigationMenu className={cn(navigationVariants({
            justify
        }), className)}>

            <NavigationMenuList className={cn(navigationMenuVariants({ gap }))}>
                {navlinks.pageLink && navlinks.links.map((link, i) => (
                    <NavigationItem key={`${link.text}-${i}`} className={linkClassName} {...linkVariants}
                        render={<PageBtn text={link.text} href={link.href} variant={"ghost"} />} />
                ))}

                {!navlinks.pageLink && navlinks.links.map((link, i) => (
                    <NavigationItem key={`${link.text}-${i}`} className={linkClassName} {...linkVariants}
                        render={<AnchorBtn text={link.text} href={link.href} variant={"ghost"} />} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

type NavigationItemProps = Omit<NavigationProps, "links" | "className"> & {
    className?: string;
    render?: ReactElement<unknown, string | JSXElementConstructor<any>>
    | ComponentRenderFn<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, NavigationMenuLinkState>
    | undefined;
};

function NavigationItem({
    className,
    textSize,
    textCase,
    height,
    width,
    render,
}: NavigationItemProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                className={cn(
                    navigationLinkVariants({
                        textSize,
                        textCase,
                        height,
                        width,
                    }),
                    className
                )}
                render={render}>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}