import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import type { ButtonHTMLAttributes, ReactNode } from "react"

export const buttonVariants = cva(
  cn(
    // Base Layout & Alignment
    "group/button inline-flex shrink-0 items-center justify-center data-[sta=all]:min-w-30 select-none cursor-pointer",
    "data-[fw=true]:w-full",

    // Typography & Motion
    "text-sm font-medium whitespace-nowrap transition-all outline-none",

    // Surface & Border Shapes
    "rounded-lg border border-transparent bg-clip-padding",

    // Focus & Interactive State Feedback
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "active:not-aria-[haspopup]:translate-y-px", // Subtle press animation
    "disabled:pointer-events-none disabled:opacity-50",

    // Form Validation (Error) States
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

    // Child SVG Icon Sizing & Behavior
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  ),
  {
    variants: {
      // Core Color / Style Themes
      variant: {
        // Primary filled button
        default: cn(
          "bg-primary text-primary-foreground border-primary",
          "hover:bg-primary/80"
        ),

        // Translucent background with crisp border
        outline: cn(
          "bg-primary/10 border-border-bold text-foreground",
          "hover:bg-primary/25 hover:text-muted-foreground",
          "aria-expanded:bg-muted aria-expanded:text-foreground",
          "dark:border-primary dark:bg-primary/5 dark:hover:bg-primary/15"
        ),

        // Secondary subtle background theme
        secondary: cn(
          "border-white bg-secondary text-secondary-foreground",
          "hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
          "aria-expanded:bg-secondary aria-expanded:text-secondary-foreground"
        ),

        // Borderless hover-only background
        ghost: cn(
          "hover:bg-muted hover:text-foreground",
          "aria-expanded:bg-muted aria-expanded:text-foreground",
          "dark:hover:bg-muted/50"
        ),

        // Destructive / Danger actions
        destructive: cn(
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/20",
          "focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
          "dark:bg-destructive/50 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40"
        ),

        // Inline text link styling
        link: cn(
          "text-primary underline-offset-4",
          "hover:underline"
        ),
      },

      // Dimensional & Padding Options
      size: {
        // Standard medium size
        default: cn(
          "h-8 gap-1.5 px-2.5",
          "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
        ),

        // Extra small layout size
        xs: cn(
          "h-6 gap-1 px-2 text-xs rounded-[min(var(--radius-md),10px)]",
          "in-data-[slot=button-group]:rounded-lg",
          "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
          "[&_svg:not([class*='size-'])]:size-3"
        ),

        // Small layout size
        sm: cn(
          "h-10 gap-1 px-2.5 text-[0.8rem] rounded-[min(var(--radius-md),12px)]",
          "in-data-[slot=button-group]:rounded-lg",
          "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
          "[&_svg:not([class*='size-'])]:size-3.5"
        ),

        // Large layout size
        lg: cn(
          "h-12 gap-1.5 px-2.5",
          "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
        ),

        // Square Icon Button Sizes
        icon: "size-8", // Standard 32px square

        "icon-xs": cn(
          "size-6 rounded-[min(var(--radius-md),10px)]", // 24px square
          "in-data-[slot=button-group]:rounded-lg",
          "[&_svg:not([class*='size-'])]:size-3"
        ),

        "icon-sm": cn(
          "size-7 rounded-[min(var(--radius-md),12px)]", // 28px square
          "in-data-[slot=button-group]:rounded-lg"
        ),

        "icon-lg": "size-9", // 36px square
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const showTextAtStyle = cn("hidden",
  "data-[sta=all]:inline",
  "sm:data-[sta=sm]:inline",
  "md:data-[sta=md]:inline",
  "lg:data-[sta=lg]:inline",
)

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & {
  text?: string;
  src?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  showTextAt?: "sm" | "md" | "lg" | "all"
};

export function Button({ 
  className, children,
  variant = "default", 
  size = "default",
  fullWidth=false,
  icon, text,
  showTextAt="all",
  ...props
}: ButtonType) {
  return (
      <ButtonPrimitive data-slot="button" data-fw={fullWidth} data-sta={showTextAt}
        className={cn(buttonVariants({ variant, size, className }), "grow")} {...props}>
          {icon} 

          <span data-sta={showTextAt} className={showTextAtStyle}>
            {text} {children}
          </span>
      </ButtonPrimitive>
  )
}