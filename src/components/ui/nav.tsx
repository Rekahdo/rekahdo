import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ClassNameType, ComponentType } from "../../utils/type";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";
import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import type { ButtonType } from "./button";

const linkVariant = cva(
    'transition-colors',
    {
        variants: {
            variant: {
                normal: '',
                nav: 'p-4 font-extrabold hover:bg-accent hover:text-accent-foreground',
                btn: 'flex justify-center',
            }
        },
        defaultVariants: {
            variant: 'normal'
        }
    }
)

type LinkType = ComponentType & VariantProps<typeof linkVariant> & {
  text?: string;
  file_path?: string;
  file_name?: string;
}

function Link({ className, variant, ...props }: LinkType) {
    return (
        <a href={props.file_path} download={props.file_name}
            className={cn(linkVariant({ variant, className }))}>
            {variant === "btn" ? props.children : props.text}
        </a>
    )
}

type side = "left" | "top" | "right" | "bottom" | undefined

export type NavLinkType = {
    hidden: boolean;
    links: ButtonType[];
};

type NavLinkCompType = ClassNameType & NavLinkType & {
    trigger?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    footer?: ReactNode;
    showCloseBtn?: boolean;
    side?: side;
};

const navLinkVariant = cva(
    'flex',
    {
        variants: {
            variant: {
                navLink: 'flex-row '
            }
        },
        defaultVariants: {
            variant: 'navLink'
        }
    }
)

function NavLink({ className, variant, trigger=<Menu size={20}/>,  ...props }: NavLinkCompType & VariantProps<typeof navLinkVariant>) {
    return (
        <>
            <nav className="md:hidden ml-auto">
                <Sheet>
                    <SheetTrigger className="p-4 hover:bg-accent hover:text-accent-forground">{trigger}</SheetTrigger>
                    <SheetContent showCloseButton={props.showCloseBtn} side={props.side}>
                        <SheetHeader>
                            <SheetTitle className={"p-4"}>{props.title}</SheetTitle>
                            <SheetDescription>{props.description}</SheetDescription>
                            {props.links.map((link) => <Link key={link.bId} {...link} variant={"nav"} />)}
                        </SheetHeader>
                        <SheetFooter>{props.footer}</SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>

            <NavigationMenu className="max-md:hidden">
                <NavigationMenuList className={cn(navLinkVariant({ variant, className }))}>
                    {props.links.map((link) => (
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                render={<Link key={link.bId} {...link} variant={"nav"} />}>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export { NavLink, Link }