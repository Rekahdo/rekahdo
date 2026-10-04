import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ReactElement } from "react";
import { ButtonImpl } from "./button-impl";

export const navlinks: ReactElement[] = [
    <ButtonImpl text={"Home"} href="home" variant={"ghost"} scroll />,
    <ButtonImpl text={"About Me"} href="aboutMe" variant={"ghost"} />,
    <ButtonImpl text={"Tech-Stack"} href="techStack" variant={"ghost"} />,
    <ButtonImpl text={"Projects"} href="projects" variant={"ghost"} />,
    <ButtonImpl text={"Contact Me"} href="contact" variant={"ghost"} />,
];

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
                {navlinks.map((link, i) => (
                    <NavigationItem key={`nav-item-${i}`} className={linkClassName} link={link} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

type NavigationItemProps = Omit<NavigationProps, "links" | "className"> & {
    className?: string;
    link: ReactElement;
};

function NavigationItem({
    className,
    textSize,
    textCase,
    height,
    width,
    link,
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
                render={link}>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}