import { cva, type VariantProps } from "class-variance-authority";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";
import { cn } from "cn";
import { Link } from "./link";

const navBarVariant = cva(
    "",
    {
        variants: {
            variant: {
                default: ""
            },
            size: {
                default: ""
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export type NavigationLinkType = {
    text: string;
    href: string;
    active: boolean;
    onClick?: () => unknown;
}

export type NavigationBarType = VariantProps<typeof navBarVariant> & {
    className?: string;
    links: NavigationLinkType[];
    position?: "left" | "center" | "right"
}

export function NavigationBar({ links, variant, size, position="center", className }: NavigationBarType) {
    return (
        <NavigationMenu className={cn("mx-auto", className)}>
            <NavigationMenuList className={cn(navBarVariant({ variant, size }))}>
                {links.map((link, i) => <NavigationItem key={i} {...link} size={size}/>)}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

type NavigationItemType = NavigationLinkType & VariantProps<typeof navBarVariant>;

function NavigationItem({ text, href, size, active }: NavigationItemType) {
    const style = cn(
        "p-4 font-bold transition-colors cursor-pointer",
        "hover:bg-green-400 hover:text-accent-foreground"
    );
    return (
        <NavigationMenuItem className={cn(style, size)}>
            <NavigationMenuLink render={
                <Link text={text} href={href} />}>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}