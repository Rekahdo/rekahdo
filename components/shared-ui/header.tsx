import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ReactNode } from "react";

const headerGroupVariants = cva("flex items-center", {
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


function HeaderLeft({ children }: { children?: ReactNode }) {
  return (
    <HeaderGroup className={cn("me-auto")} gap={"sm"}>
      {children}
    </HeaderGroup>
  );
}

function HeaderCenter({ children }: { children?: ReactNode }) {
  return (
    <HeaderGroup className={"mx-auto w-full px-4"} gap={"sm"}>
      {children}
    </HeaderGroup>
  );
}

function HeaderRight({ children }: { children?: ReactNode }) {
  return (
    <HeaderGroup className={"ms-auto"} gap={"sm"}>
      {children}
    </HeaderGroup>
  );
}


// ================================================================================
// ================================================================================
// ================================================================================


const headerVariants = cva(
  cn(
    "flex items-center gap-2 sm:gap-4",
  ),
  {
    variants: {
    },
    defaultVariants: {
    }
  }
)

export type HeaderCompType = VariantProps<typeof headerVariants> & {
  className?: string;
  headerLeft?: ReactNode;
  headerCenter?: ReactNode;
  headerRight?: ReactNode;
  sidebar?: ReactNode;
  ariaLabel?: string;
};

export function Header({
  className,
  headerLeft,
  headerCenter,
  headerRight,
  sidebar,
  ariaLabel = "Site header",
}: HeaderCompType) {

  return (
    <header aria-label={ariaLabel}
      className={cn(headerVariants({ className }))}>

      {headerLeft &&
        <HeaderLeft>
          {headerLeft}
        </HeaderLeft>
      }

      {headerCenter &&
        <HeaderCenter>
          {headerCenter}
        </HeaderCenter>
      }

      {headerRight &&
        <HeaderRight>
          {headerRight}
        </HeaderRight>
      }

      {sidebar}

    </header>
  )
}