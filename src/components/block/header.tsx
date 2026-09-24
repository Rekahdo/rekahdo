import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { SideBar } from "../ui/side-bar";
import type { NavigationBar } from "../ui/navigation-bar";
import type { Logo } from "../ui/logo";
import type { ThemeToggle } from "../ui/toggle";
import type { DownloadBtn } from "../ui/button";

const headerGroupVariants = cva("flex items-center text-foreground", {
  variants: {
    gap: {
      sm: "gap-3 sm:gap-4",
      md: "gap-4 sm:gap-6",
      lg: "gap-6 sm:gap-8",
    },
  },
  defaultVariants: {
    gap: "lg",
  },
});

type HeaderGroupProps = VariantProps<typeof headerGroupVariants> & {
  children?: ReactNode;
  className?: string;
};

function HeaderGroup({ children, className, gap }: HeaderGroupProps) {
  return (
    <div className={cn(headerGroupVariants({ gap }), className)}>
      {children}
    </div>
  );
}


// ================================================================================
// ================================================================================
// ================================================================================


type HeaderLeftProps = {
  logo?: ReactElement<ComponentProps<typeof Logo>, typeof Logo>;
  navbar?: ReactElement<ComponentProps<typeof NavigationBar>, typeof NavigationBar>;
  className?: string;
};

export function HeaderLeft({ logo, navbar, className }: HeaderLeftProps) {
  if (!logo && !navbar) return null;
  return (
    <HeaderGroup className={className}>
      {logo}
      {navbar}
    </HeaderGroup>
  );
}

type HeaderCenterProps = {
  navbar?: ReactElement<ComponentProps<typeof NavigationBar>, typeof NavigationBar>;
  searchField?: ReactNode;
  className?: string;
};

export function HeaderCenter({ navbar, searchField, className }: HeaderCenterProps) {
  if (!navbar && !searchField) return null;
  return (
    <HeaderGroup className={cn("justify-center", className)}>
      {navbar}
      {searchField}
    </HeaderGroup>
  );
}

type HeaderRightProps = {
  themeToggle?: ReactElement<ComponentProps<typeof ThemeToggle>, typeof ThemeToggle>;
  downloadBtn?: ReactElement<ComponentProps<typeof DownloadBtn>, typeof DownloadBtn>;
  className?: string;
};

export function HeaderRight({ 
  themeToggle, 
  downloadBtn, 
  className 
}: HeaderRightProps) {
  if (!themeToggle && !downloadBtn) return null;
  return (
    <HeaderGroup className={cn("justify-end", className)}>
      {themeToggle}
      {downloadBtn}
    </HeaderGroup>
  );
}


// ================================================================================
// ================================================================================
// ================================================================================


const headerVariants = cva(
  cn(
    "flex items-center text-foreground",
  ),
  {
    variants: {
      variant: {
        default: 'bg-background/95 backdrop-blur-md text-foreground',
        transparent: 'bg-transparent text-foreground',
        card: 'bg-card text-card-foreground border-b border-border',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type HeaderCompType = VariantProps<typeof headerVariants> & {
  className?: string;
  left?: ReactElement<ComponentProps<typeof HeaderLeft>, typeof HeaderLeft>;
  center?: ReactElement<ComponentProps<typeof HeaderCenter>, typeof HeaderCenter>;
  right?: ReactElement<ComponentProps<typeof HeaderRight>, typeof HeaderRight>;
  sidebar?: ReactElement<ComponentProps<typeof SideBar>, typeof SideBar>;
  ariaLabel?: string;
};

export function Header({
  className,
  variant,
  left,
  center,
  right,
  sidebar,
  ariaLabel = "Site header",
}: HeaderCompType) {

  return (
    <header aria-label={ariaLabel}
      className={cn(headerVariants({variant, className}))}>
        
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