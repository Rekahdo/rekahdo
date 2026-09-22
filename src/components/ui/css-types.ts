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
  red: "bg-red-300",
};

export const foreground = {
  default: "text-foreground",
  gradient:
    "bg-gradient-to-tr from-red-500 to-cyan-400 bg-clip-text text-transparent",
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

export const textAlign = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
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
  outline:
    "transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md",
};

export const shadow = {
  xs: "shadow-xs",
  sm: "shadow-sm",
};

export const justify = {
  start: "text-start justify-items-start justify-start me-auto",
  center: "text-center justify-items-center justify-center mx-auto",
  end: "text-end justify-items-end justify-end ms-auto",
};

export const xsJustify = {
  start: "max-sm:text-start max-sm:justify-items-start max-sm:justify-start max-sm:me-auto",
  center: "max-sm:text-center max-sm:justify-items-center max-sm:justify-center max-sm:mx-auto",
  end: "max-sm:text-end max-sm:justify-items-end max-sm:justify-end max-sm:ms-auto",
};

export const smJustify = {
  start: "sm:max-md:text-start sm:max-md:justify-items-start sm:max-md:justify-start sm:max-md:me-auto",
  center:
    "sm:max-md:text-center sm:max-md:justify-items-center sm:max-md:justify-center sm:max-md:mx-auto",
  end: "sm:max-md:text-end sm:max-md:justify-items-end sm:max-md:justify-end sm:max-md:ms-auto",
};

export const mdJustify = {
  start: "md:max-lg:text-start md:max-lg:justify-items-start md:max-lg:justify-start md:max-lg:me-auto",
  center:
    "md:max-lg:text-center md:max-lg:justify-items-center md:max-lg:justify-center md:max-lg:mx-auto",
  end: "md:max-lg:text-end md:max-lg:justify-items-end md:max-lg:justify-end md:max-lg:ms-auto",
};

export const lgJustify = {
  start: "lg:text-start lg:justify-items-start lg:justify-start lg:me-auto",
  center: "lg:text-center lg:justify-items-center lg:justify-center lg:mx-auto",
  end: "lg:text-end lg:justify-items-end lg:justify-end lg:ms-auto",
};

export const align = {
  start: "items-start align-top content-start text-start my-auto",
  center: "items-center align-middle content-center text-center my-auto",
  end: "items-end align-bottom content-end text-end my-auto",
  baseline: "items-baseline align-baseline my-auto",
  stretch: "items-stretch my-auto",
};

export const xsAlign = {
  start: "max-sm:items-start max-sm:align-top max-sm:content-start max-sm:text-start max-sm:my-auto",
  center: "max-sm:items-center max-sm:align-middle max-sm:content-center max-sm:text-center max-sm:my-auto",
  end: "max-sm:items-end max-sm:align-bottom max-sm:content-end max-sm:text-end max-sm:my-auto",
  baseline: "max-sm:items-baseline max-sm:align-baseline max-sm:my-auto",
  stretch: "max-sm:items-stretch max-sm:my-auto",
};

export const smAlign = {
  start: "sm:max-md:items-start sm:max-md:align-top sm:max-md:content-start sm:max-md:text-start sm:max-md:my-auto",
  center: "sm:max-md:items-center sm:max-md:align-middle sm:max-md:content-center sm:max-md:text-center sm:max-md:my-auto",
  end: "sm:max-md:items-end sm:max-md:align-bottom sm:max-md:content-end sm:max-md:text-end sm:max-md:my-auto",
  baseline: "sm:max-md:items-baseline sm:max-md:align-baseline sm:max-md:my-auto",
  stretch: "sm:max-md:items-stretch sm:max-md:my-auto",
};

export const mdAlign = {
  start: "md:max-lg:items-start md:max-lg:align-top md:max-lg:content-start md:max-lg:text-start md:max-lg:my-auto",
  center: "md:max-lg:items-center md:max-lg:align-middle md:max-lg:content-center md:max-lg:text-center md:max-lg:my-auto",
  end: "md:max-lg:items-end md:max-lg:align-bottom md:max-lg:content-end md:max-lg:text-end md:max-lg:my-auto",
  baseline: "md:max-lg:items-baseline md:max-lg:align-baseline md:max-lg:my-auto",
  stretch: "md:max-lg:items-stretch md:max-lg:my-auto",
};

export const lgAlign = {
  start: "lg:items-start lg:align-top lg:content-start lg:text-start lg:my-auto",
  center: "lg:items-center lg:align-middle lg:content-center lg:text-center lg:my-auto",
  end: "lg:items-end lg:align-bottom lg:content-end lg:text-end lg:my-auto",
  baseline: "lg:items-baseline lg:align-baseline lg:my-auto",
  stretch: "lg:items-stretch lg:my-auto",
};