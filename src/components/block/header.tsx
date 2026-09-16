import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { SideBar } from "../ui/side-bar";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { NavigationBar } from "../ui/navigation-bar";
import type { Logo } from "../ui/logo";
import type { ThemeToggle } from "../ui/toggle";
import type { DownloadBtn } from "../ui/download";

type HeaderLeftType = {
    logo?: ReactElement<ComponentProps<typeof Logo>, typeof Logo>
    navbar?: ReactElement<ComponentProps<typeof NavigationBar>, typeof NavigationBar>
}

const headerChild = cn(
  "flex items-center gap-6 sm:gap-8"
)

// Logo, NavBar
export function HeaderLeft({ logo, navbar }: HeaderLeftType) {
    return (
        <>{
            (logo || navbar) &&
            <div className={cn(headerChild)}>
                {logo}
                {navbar}
            </div>
        }</>
    );
}

type HeaderCenterType = {
    navbar?: ReactElement<ComponentProps<typeof NavigationBar>, typeof NavigationBar>
    searchField?: ReactNode;
}

// NavBar, SearchField
export function HeaderCenter({ navbar, searchField }: HeaderCenterType) {
    return (
        <>{
            (navbar || searchField) &&
            <div className={cn(headerChild)}>
                {navbar}
                {searchField}
            </div>
        }</>
    );
}

type HeaderRightType = {
    themeToggle?: ReactElement<ComponentProps<typeof ThemeToggle>, typeof ThemeToggle>;
    downloadBtn?: ReactElement<ComponentProps<typeof DownloadBtn>, typeof DownloadBtn>;
}

// UserAction, NavAction
export function HeaderRight({ themeToggle, downloadBtn }: HeaderRightType) {
    return (
        <>{
            (themeToggle || downloadBtn) &&
            <div className={cn(headerChild)}>
                {themeToggle}
                {downloadBtn}
            </div>
        }</>
    );
}

// ================================================================================
// ================================================================================
// ================================================================================

const headerVariant = cva(
  cn(
    "flex items-center h-[7.9dvh] sticky top-0 px-2",
    "sm:px-4 md:px-6 lg:px-8 md:h-[8.9dvh] lg:h-[9.9dvh]",
  ),
  {
    variants: {
      variant: {
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type HeaderCompType = VariantProps<typeof headerVariant> & {
  className?: string;
  left?: ReactElement<ComponentProps<typeof HeaderLeft>, typeof HeaderLeft>;
  center?: ReactElement<ComponentProps<typeof HeaderCenter>, typeof HeaderCenter>;
  right?: ReactElement<ComponentProps<typeof HeaderRight>, typeof HeaderRight>;
  sidebar?: ReactElement<ComponentProps<typeof SideBar>, typeof SideBar>;
};

export function Header({
  className,
  variant,
  left,
  center,
  right,
  sidebar,
}: HeaderCompType) {

  return (
    <header className={cn(headerVariant({variant, className}))}>
      {left &&
        <div className={cn("me-auto")}>
          {left}
        </div>
      }

      {center &&
        <div className={cn("mx-auto w-full")}>
          {center}
        </div>
      }

      {right &&
        <div className={cn("ms-auto")}>
          {right}
        </div>
      }

      {sidebar}

    </header>
  )
}