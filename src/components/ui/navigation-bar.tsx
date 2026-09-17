import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./navigation-menu";
import { cn } from "cn";
import { Link } from "./link";
import { cva, type VariantProps } from "class-variance-authority";

export type NavigationLinkType = {
    text: string;
    href: string;
    active: boolean;
    onClick?: () => unknown;
}

const navigationBarVariants = cva(
    "max-lg:hidden lg:px-6",
    {
        variants: {
            navbarPosition: {
                left: "me-auto",
                center: "mx-auto",
                right: "ms-auto",
            },
            linkTextCase: {
                capitalize: "capitalize",
                lowercase: "lowercase",
                uppercase: "uppercase",
            },
        },
        defaultVariants: {
            navbarPosition: "center",
            linkTextCase: "capitalize",
        },
    }
);

export const navigationLinkVariants = cva(
    cn(
        navigationMenuTriggerStyle(),
        "font-semibold text-foreground",
        "hover:bg-primary/70 hover:text-primary-foreground",
        "active:bg-primary active:text-primary-foreground",
        "focus:bg-primary/10 focus:text-foreground"
    ),
    {
        variants: {
            linksPosition: {
                left: "justify-start",
                center: "justify-center",
                right: "justify-end",
            },
            linkTextSize: {
                xs: "text-[0.7rem]!",
                sm: "text-xs!",
                default: "text-sm!",
                lg: "text-lg!",
            },
            linkTextHeight: {
                sm: "py-2!",
                default: "py-4!",
                lg: "py-6!",
                xl: "py-8!",
            },
            linkTextWidth: {
                sm: "px-2!",
                default: "px-4!",
                lg: "px-6!",
                full: "w-full"
            },
            linkTextCase: {
                capitalize: "capitalize",
                lowercase: "lowercase",
                uppercase: "uppercase",
            },
        },
        defaultVariants: {
            linksPosition: "center",
            linkTextSize: "default",
            linkTextHeight: "default",
            linkTextWidth: "default",
        },
    }
);

export type NavigationType = VariantProps<typeof navigationBarVariants> & VariantProps<typeof navigationLinkVariants> & {
    className?: string;
    links: NavigationLinkType[];
    linkClassName?: string;
}

type NavigationItemType = NavigationLinkType & Omit<NavigationType, "links">

export function NavigationBar({
    links,
    navbarPosition,
    linkTextCase,
    linkClassName,
    ...props
}: NavigationType) {

    return (
        <NavigationMenu className={cn(navigationBarVariants({
            navbarPosition, linkTextCase}))}>

            <NavigationMenuList>
                {links.map((link, i) =>
                    <NavigationItem key={i}
                        {...link}
                        {...props}
                        className={linkClassName}
                    />
                )}
            </NavigationMenuList>

        </NavigationMenu>
    )
}

function NavigationItem({ 
    text, href, 
    className,
    linksPosition,
    linkTextSize,
    linkTextHeight,
    linkTextWidth,
}: NavigationItemType) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                className={cn(navigationLinkVariants({ 
                    linksPosition, linkTextSize, 
                    linkTextHeight, linkTextWidth
                }), className)}
                render={<Link text={text} href={href} />}>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}