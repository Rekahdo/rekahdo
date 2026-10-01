import { cn } from "cn";

export const textcase = {
  lowercase: "lowercase",
  uppercase: "uppercase",
  capitalize: "capitalize",
};

export const fontWeight = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export const background = {
  background: "bg-background text-foreground",
  muted: "bg-muted text-muted-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

export const foreground = {
  default: "text-foreground",
  gradient:
    "bg-gradient-to-tr from-primary to-accent bg-clip-text text-transparent",
};

export const border = {
  top: "border-t border-border",
  bottom: "border-b border-border",
};

export const minHeight = {
  header: "h-auto min-h-[8dvh] md:min-h-[10dvh]",
  hero: "h-auto min-h-[92dvh] md:min-h-[90dvh]",
  full: "h-auto min-h-[100dvh]",
  fluid: "h-auto",
};

export const maxWidth = {
  w1100: "w-auto max-w-[1100px]",
  w1300: "w-auto max-w-[1300px]",
  w1500: "w-auto max-w-[1500px]",
  w1700: "w-auto max-w-[1700px]",
};

export const sticky = {
  top: "sticky -top-0 z-50",
  bottom: "sticky bottom-0 z-50",
};

export const paddingY = {
  py_10: "py-10 md:py-15 lg:py-20",
};

export const paddingTop = {
  py_10: "pt-10 md:pt-15 lg:pt-20",
};

export const paddingBottom = {
  pb_10: "pb-10 md:pb-15 lg:pb-20",
  pb_8: "pb-8 md:pb-12 lg:pb-14",
};

export const textsize = {
  xxs: "text-3xs lg:text-2xs",
  xs: "text-2xs lg:text-xs",
  sm: "text-xs lg:text-sm",
  base: "text-sm lg:text-base",
  lg: "text-base lg:text-lg",
  xl: "text-lg lg:text-xl",
  xxl: "text-xl lg:text-2xl",
};

export const rounded = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const hover = {
  outline: cn(
    "transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:scale-102",
  )
};

export const shadow = {
  xs: "shadow-xs",
  sm: "shadow-sm",
};

// ─── JUSTIFY ────────────────────────────────────────────────────────────────
export const justify = {
  all: {
    start: "justify-items-start justify-start me-auto",
    center: "justify-items-center justify-center mx-auto",
    end: "justify-items-end justify-end ms-auto",
  },
  xs: {
    start: "max-sm:justify-items-start max-sm:justify-start max-sm:me-auto",
    center: "max-sm:justify-items-center max-sm:justify-center max-sm:mx-auto",
    end: "max-sm:justify-items-end max-sm:justify-end max-sm:ms-auto",
  },
  sm: {
    start: "sm:max-md:justify-items-start sm:max-md:justify-start sm:max-md:me-auto",
    center: "sm:max-md:justify-items-center sm:max-md:justify-center sm:max-md:mx-auto",
    end: "sm:max-md:justify-items-end sm:max-md:justify-end sm:max-md:ms-auto",
  },
  maxSm: {
    start: "max-sm:justify-items-start max-sm:justify-start max-sm:me-auto",
    center: "max-sm:justify-items-center max-sm:justify-center max-sm:mx-auto",
    end: "max-sm:justify-items-end max-sm:justify-end max-sm:ms-auto",
  },
  md: {
    start: "md:max-lg:justify-items-start md:max-lg:justify-start md:max-lg:me-auto",
    center: "md:max-lg:justify-items-center md:max-lg:justify-center md:max-lg:mx-auto",
    end: "md:max-lg:justify-items-end md:max-lg:justify-end md:max-lg:ms-auto",
  },
  maxMd: {
    start: "max-md:justify-items-start max-md:justify-start max-md:me-auto",
    center: "max-md:justify-items-center max-md:justify-center max-md:mx-auto",
    end: "max-md:justify-items-end max-md:justify-end max-md:ms-auto",
  },
  lg: {
    start: "lg:justify-items-start lg:justify-start lg:me-auto",
    center: "lg:justify-items-center lg:justify-center lg:mx-auto",
    end: "lg:justify-items-end lg:justify-end lg:ms-auto",
  },
  maxLg: {
    start: "max-lg:justify-items-start max-lg:justify-start max-lg:me-auto",
    center: "max-lg:justify-items-center max-lg:justify-center max-lg:mx-auto",
    end: "max-lg:justify-items-end max-lg:justify-end max-lg:ms-auto",
  },
};

// ─── ALIGN ──────────────────────────────────────────────────────────────────
export const align = {
  all: {
    start: "items-start align-top content-start my-auto",
    center: "items-center align-middle content-center my-auto",
    end: "items-end align-bottom content-end my-auto",
    baseline: "items-baseline align-baseline my-auto",
    stretch: "items-stretch my-auto",
  },
  xs: {
    start: "max-sm:items-start max-sm:align-top max-sm:content-start max-sm:my-auto",
    center: "max-sm:items-center max-sm:align-middle max-sm:content-center max-sm:my-auto",
    end: "max-sm:items-end max-sm:align-bottom max-sm:content-end max-sm:my-auto",
    baseline: "max-sm:items-baseline max-sm:align-baseline max-sm:my-auto",
    stretch: "max-sm:items-stretch max-sm:my-auto",
  },
  sm: {
    start: "sm:max-md:items-start sm:max-md:align-top sm:max-md:content-start sm:max-md:my-auto",
    center: "sm:max-md:items-center sm:max-md:align-middle sm:max-md:content-center sm:max-md:my-auto",
    end: "sm:max-md:items-end sm:max-md:align-bottom sm:max-md:content-end sm:max-md:my-auto",
    baseline: "sm:max-md:items-baseline sm:max-md:align-baseline sm:max-md:my-auto",
    stretch: "sm:max-md:items-stretch sm:max-md:my-auto",
  },
  maxSm: {
    start: "max-sm:items-start max-sm:align-top max-sm:content-start max-sm:my-auto",
    center: "max-sm:items-center max-sm:align-middle max-sm:content-center max-sm:my-auto",
    end: "max-sm:items-end max-sm:align-bottom max-sm:content-end max-sm:my-auto",
    baseline: "max-sm:items-baseline max-sm:align-baseline max-sm:my-auto",
    stretch: "max-sm:items-stretch max-sm:my-auto",
  },
  md: {
    start: "md:max-lg:items-start md:max-lg:align-top md:max-lg:content-start md:max-lg:my-auto",
    center: "md:max-lg:items-center md:max-lg:align-middle md:max-lg:content-center md:max-lg:my-auto",
    end: "md:max-lg:items-end md:max-lg:align-bottom md:max-lg:content-end md:max-lg:my-auto",
    baseline: "md:max-lg:items-baseline md:max-lg:align-baseline md:max-lg:my-auto",
    stretch: "md:max-lg:items-stretch md:max-lg:my-auto",
  },
  maxMd: {
    start: "max-md:items-start max-md:align-top max-md:content-start max-md:my-auto",
    center: "max-md:items-center max-md:align-middle max-md:content-center max-md:my-auto",
    end: "max-md:items-end max-md:align-bottom max-md:content-end max-md:my-auto",
    baseline: "max-md:items-baseline max-md:align-baseline max-md:my-auto",
    stretch: "max-md:items-stretch max-md:my-auto",
  },
  lg: {
    start: "lg:items-start lg:align-top lg:content-start lg:my-auto",
    center: "lg:items-center lg:align-middle lg:content-center lg:my-auto",
    end: "lg:items-end lg:align-bottom lg:content-end lg:my-auto",
    baseline: "lg:items-baseline lg:align-baseline lg:my-auto",
    stretch: "lg:items-stretch lg:my-auto",
  },
  maxLg: {
    start: "max-lg:items-start max-lg:align-top max-lg:content-start max-lg:my-auto",
    center: "max-lg:items-center max-lg:align-middle max-lg:content-center max-lg:my-auto",
    end: "max-lg:items-end max-lg:align-bottom max-lg:content-end max-lg:my-auto",
    baseline: "max-lg:items-baseline max-lg:align-baseline max-lg:my-auto",
    stretch: "max-lg:items-stretch max-lg:my-auto",
  },
};

// ─── TEXT ALIGN ─────────────────────────────────────────────────────────────
export const textAlign = {
  all: {
    start: "text-start",
    center: "text-center",
    end: "text-end",
    justify: "text-justify",
  },
  xs: {
    start: "max-sm:text-start",
    center: "max-sm:text-center",
    end: "max-sm:text-end",
    justify: "max-sm:text-justify",
  },
  sm: {
    start: "sm:max-md:text-start",
    center: "sm:max-md:text-center",
    end: "sm:max-md:text-end",
    justify: "sm:max-md:text-justify",
  },
  maxSm: {
    start: "max-sm:text-start",
    center: "max-sm:text-center",
    end: "max-sm:text-end",
    justify: "max-sm:text-justify",
  },
  md: {
    start: "md:max-lg:text-start",
    center: "md:max-lg:text-center",
    end: "md:max-lg:text-end",
    justify: "md:max-lg:text-justify",
  },
  maxMd: {
    start: "max-md:text-start",
    center: "max-md:text-center",
    end: "max-md:text-end",
    justify: "max-md:text-justify",
  },
  lg: {
    start: "lg:text-start",
    center: "lg:text-center",
    end: "lg:text-end",
    justify: "lg:text-justify",
  },
  maxLg: {
    start: "max-lg:text-start",
    center: "max-lg:text-center",
    end: "max-lg:text-end",
    justify: "max-lg:text-justify",
  },
};