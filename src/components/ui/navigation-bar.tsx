import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./navigation-menu";
import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";
import { AnchorBtn, type PageBtnType } from "./button";

const navigationBarVariants = cva(
    "max-lg:hidden lg:px-6",
    {
        variants: {
            navbarPosition: {
                left: "me-auto",
                center: "mx-auto",
                right: "ms-auto",
            },
        },
        defaultVariants: {
            navbarPosition: "center",
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
                full: "w-full",
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

export type NavigationBarProps = VariantProps<typeof navigationBarVariants>
    & VariantProps<typeof navigationLinkVariants> &
{
    links: PageBtnType[];
    className?: string;
    linkClassName?: string;
}

export function NavigationBar({
    links,
    className,
    navbarPosition,
    linkClassName,
    ...linkVariants
}: NavigationBarProps) {

    return (
        <NavigationMenu className={cn(navigationBarVariants({
            navbarPosition
        }), className)}>

            <NavigationMenuList>
                {links.map((link, i) =>
                    <NavigationItem key={i}
                        {...link}
                        {...linkVariants}
                        className={linkClassName}
                    />
                )}
            </NavigationMenuList>

        </NavigationMenu>
    )
}

type NavigationItemProps = PageBtnType & Omit<NavigationBarProps, "links" | "className"> & {
    className?: string;
};

function NavigationItem({
    text,
    href,
    onClick,
    className,
    linksPosition,
    linkTextSize,
    linkTextHeight,
    linkTextWidth,
    linkTextCase,
}: NavigationItemProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                className={cn(
                    navigationLinkVariants({
                        linksPosition,
                        linkTextSize,
                        linkTextHeight,
                        linkTextWidth,
                        linkTextCase,
                    }),
                    className
                )}
                render={<AnchorBtn text={text} href={href}
                    onClick={onClick} variant={"navlink"} />
                }>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}