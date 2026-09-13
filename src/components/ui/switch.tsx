import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn"
import { useEffect, useState, type ReactNode } from "react";
import { rootDocument, themeIsDark, windowTheme } from "../../utils/utils";

const rootVariants = cva(
  cn(
    // Layout & Positioning
    "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none",
    // Hit Area Expansion
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    // Focus & Field Label States
    "group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    // Validation States
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    // Track Color States
    "data-checked:bg-primary data-unchecked:bg-primary/30",
    // Disabled State
    "data-disabled:cursor-not-allowed data-disabled:opacity-50",
    // Sizing Variants (Track)
    "w-[32px]"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "h-[18.4px]",
        ),
        meduim: cn(
          "h-[12px] w-[24px]"
        ),
        thin: cn(
          "h-[8px] w-[24px]"
        ),
        inner: cn(
          "h-[18.4px]"
        ),
      },
      size: {
        xs: cn(
          "scale-60"
        ),
        sm: cn(
          "scale-80"
        ),
        default: cn(
          "scale-100"
        ),
        lg: cn(
          "scale-120"
        ),
        xl: cn(
          "scale-140"
        ),
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    }
  })

const thumbVariants = cva(
  cn(
    // Base Layout
    "flex justify-center items-center pointer-events-none rounded-full bg-background ring-0 transition-transform",
    // Dark Mode Colors
    "data-checked:bg-primary-foreground data-unchecked:bg-primary data-checked:text-primary data-unchecked:text-input",
    // Size
    "size-4"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "group-data-checked/switch:translate-x-[calc(100%-2px)] group-data-unchecked/switch:translate-x-0"
        ),
        meduim: cn(
          "group-data-checked/switch:translate-x-[50%] group-data-unchecked/switch:translate-x-[-2px]"
        ),
        thin: cn(
          "group-data-checked/switch:translate-x-[50%] group-data-unchecked/switch:translate-x-[-2px]"
        ),
        inner: cn(
          "size-2 group-data-checked/switch:translate-x-[220%] group-data-unchecked/switch:translate-x-[4px]"
        ),
      }
    }
  })

type SwitchType = Omit<SwitchPrimitive.Root.Props, "size"> & VariantProps<typeof rootVariants> & {
  onIcon?: ReactNode; offIcon?: ReactNode;
  toggleTheme?: boolean; callBack?: () => void;
}

function Switch({ className, variant = "default", size = "default", toggleTheme = false, ...props }: SwitchType) {
  const system = windowTheme();
  const [isChecked, setIsChecked] = useState<boolean>(() => {
    if (toggleTheme) {
      const isDark = themeIsDark();
      applyTheme(isDark)

      if (!localStorage.dark)
        system.addEventListener("change", setToSystemTheme)

      return isDark;
    }

    return false;
  });

  useEffect(() => {
    return () => {
      system.removeEventListener("change", setToSystemTheme)
    }
  }, [])

  function applyTheme(isDark: boolean) {
    isDark
      ? rootDocument.classList.add("dark")
      : rootDocument.classList.remove("dark");
  }

  function setToSystemTheme() {
    localStorage.removeItem("theme");
    const isDark = themeIsDark();
    applyTheme(isDark); setIsChecked(isDark);
  }

  function toggle(isDark: boolean) {
    localStorage.dark = isDark;
    setIsChecked(isDark);
    applyTheme(isDark);
  }

  return (
    <SwitchPrimitive.Root
      checked={isChecked}
      onCheckedChange={(checked) => toggle(checked)}
      data-slot="switch"
      data-var={variant}
      className={cn(rootVariants({ variant, size, className }))}
      {...props}>

      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumbVariants({ variant }))}>

        {isChecked && props.onIcon && props.onIcon}
        {!isChecked && props.offIcon && props.offIcon}
      </SwitchPrimitive.Thumb>


    </SwitchPrimitive.Root>
  )
}

export { Switch }