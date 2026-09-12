import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

type SwitchType = SwitchPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg" | "xl"
  toggleTheme?: boolean;
}

const BASE_ROOT_STYLES = cn(
  // Layout & Positioning
  "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none",
  // Hit Area Expansion
  "after:absolute after:-inset-x-3 after:-inset-y-2",
  // Focus & Field Label States
  "group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  // Validation States
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  // Track Color States
  "data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80",
  // Sizing Variants (Track)
  "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
  "data-[size=default]:h-[18.4px] data-[size=default]:w-[32px]",
  "data-[size=lg]:h-[24px] data-[size=lg]:w-[42px]",
  "data-[size=xl]:h-[30px] data-[size=xl]:w-[52px]",
  // Disabled State
  "data-disabled:cursor-not-allowed data-disabled:opacity-50"
)

const BASE_THUMB_STYLES = cn(
  // Base Layout
  "pointer-events-none block rounded-full bg-background ring-0 transition-transform",
  // Sizing & Translation (Sm)
  "group-data-[size=sm]/switch:size-3 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0",
  // Sizing & Translation (Default)
  "group-data-[size=default]/switch:size-4 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0",
  // Sizing & Translation (Lg)
  "group-data-[size=lg]/switch:size-5 group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=lg]/switch:data-unchecked:translate-x-[2px]",
  // Sizing & Translation (xl)
  "group-data-[size=xl]/switch:size-6 group-data-[size=xl]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=xl]/switch:data-unchecked:translate-x-[2px]",
  // Dark Mode Colors
  "dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
)

function Switch({ className, size = "default", ...props }: SwitchType) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(BASE_ROOT_STYLES, className)}
      {...props}>

      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={BASE_THUMB_STYLES}>
          
        </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }