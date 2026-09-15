import { cva, type VariantProps } from "class-variance-authority";
import type { ClassNameType } from "../../utils/type";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import { Button, type ButtonType, type ButtonVariantTypes } from "./button";
import { Link, type LinkType } from "./link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";
import { cn } from "cn";
type side = "left" | "top" | "right" | "bottom" | undefined

export function Login(){
    return (
        <>{
            
        }</>
    )
}

export type NavLinkType = {
  hidden?: boolean;
  links?: LinkType[];
};

type NavBarCompType = ClassNameType & {
  side?: side;
  logo?: ReactNode;
  showCloseBtn?: boolean;
  menu_toggle?: ReactNode;
  theme_toggle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  links?: LinkType[];
  cta?: {
    button: ButtonType;
    variant: ButtonVariantTypes;
  }
  bottom?: ReactNode;
};

const navBarVariant = cva(
  'flex',
  {
    variants: {
      variant: {
        navLink: 'flex-row mlg:gap-4'
      }
    },
    defaultVariants: {
      variant: 'navLink'
    }
  }
)

const rightStyle = cn(
  "flex items-center md:space-x-10 max-md:hidden"
)

export function NavBar({
  className, variant,
  side = 'left',
  menu_toggle = <Menu size={20} />,
  theme_toggle,
  ...props
}: NavBarCompType & VariantProps<typeof navBarVariant>) {
  return (
    <nav className='grow flex items-center justify-between max-md:px-4'>
      {/* DESKTOP VIEW */}
      {props.logo}

      {/* MOBILE VIEW */}
      <nav className="md:hidden ml-auto flex items-center gap-4">
        <Sheet>
          {theme_toggle}
          <SheetTrigger className="p-4 -me-2 hover:bg-accent hover:text-accent-forground">{menu_toggle}</SheetTrigger>
          <SheetContent showCloseButton={props.showCloseBtn} side={side}>
            <SheetHeader className="pt-4">
              {props.logo && <div className="p-4">{props.logo}</div>}

              {props.title && <SheetTitle className="p-4">{props.title}</SheetTitle>}
              {props.description && <SheetDescription className="ps-4 pb-4">{props.description}</SheetDescription>}

              {props.links && <hr className="my-4" />}

              {props.links?.map((link) => <Link key={link.id} {...link} variant={"nav"} />)}
            </SheetHeader>
            <SheetFooter className="p-4">
              {props.bottom}
              {props.cta && <Button {...props.cta.button} variant_type={props.cta.variant} size={"lg"} />}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>

      {/* DESKTOP VIEW */}
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList className={cn(navBarVariant({ variant, className }))}>
          {props.links?.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink
                render={<Link {...link} variant={"nav"} />}>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* DESKTOP VIEW */}
      <div className={cn(rightStyle)}>
        {theme_toggle}
        {props.cta && <Button {...props.cta.button} variant_type={props.cta.variant} />}
      </div>
    </nav>
  )
}