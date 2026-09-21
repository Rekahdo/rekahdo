import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { rounded } from "./css-types";

const fluidPercent = {
    xxs: "w-[10%]",
    xs: "w-[20%]",
    sm: "w-[40%]",
    lg: "w-[60%]",
    xl: "w-[80%]",
    xxl: "w-[100%]",
} as const;

const xs = {
    xxs: `max-sm:w-16 max-sm:data-[fluid=true]:${fluidPercent.xxs}`,
    xs: `max-sm:w-20 max-sm:data-[fluid=true]:${fluidPercent.xs}`,
    sm: `max-sm:w-40 max-sm:data-[fluid=true]:${fluidPercent.sm}`,
    lg: `max-sm:w-60 max-sm:data-[fluid=true]:${fluidPercent.lg}`,
    xl: `max-sm:w-80 max-sm:data-[fluid=true]:${fluidPercent.xl}`,
    xxl: `max-sm:w-100 max-sm:data-[fluid=true]:${fluidPercent.xxl}`,
} as const;

const sm = {
    xxs: `sm:max-md:w-20 sm:max-md:data-[fluid=true]:${fluidPercent.xxs}`,
    xs: `sm:max-md:w-25 sm:max-md:data-[fluid=true]:${fluidPercent.xs}`,
    sm: `sm:max-md:w-55 sm:max-md:data-[fluid=true]:${fluidPercent.sm}`,
    lg: `sm:max-md:w-80 sm:max-md:data-[fluid=true]:${fluidPercent.lg}`,
    xl: `sm:max-md:w-100 sm:max-md:data-[fluid=true]:${fluidPercent.xl}`,
    xxl: `sm:max-md:w-140 sm:max-md:data-[fluid=true]:${fluidPercent.xxl}`,
} as const;

const md = {
    xxs: `md:max-lg:w-20 md:max-lg:data-[fluid=true]:${fluidPercent.xxs}`,
    xs: `md:max-lg:w-25 md:max-lg:data-[fluid=true]:${fluidPercent.xs}`,
    sm: `md:max-lg:w-55 md:max-lg:data-[fluid=true]:${fluidPercent.sm}`,
    lg: `md:max-lg:w-80 md:max-lg:data-[fluid=true]:${fluidPercent.lg}`,
    xl: `md:max-lg:w-100 md:max-lg:data-[fluid=true]:${fluidPercent.xl}`,
    xxl: `md:max-lg:w-140 md:max-lg:data-[fluid=true]:${fluidPercent.xxl}`,
} as const;

const lg = {
    xxs: `lg:w-25 lg:data-[fluid=true]:${fluidPercent.xxs}`,
    xs: `lg:w-30 lg:data-[fluid=true]:${fluidPercent.xs}`,
    sm: `lg:w-65 lg:data-[fluid=true]:${fluidPercent.sm}`,
    lg: `lg:w-100 lg:data-[fluid=true]:${fluidPercent.lg}`,
    xl: `lg:w-140 lg:data-[fluid=true]:${fluidPercent.xl}`,
    xxl: `lg:w-200 lg:data-[fluid=true]:${fluidPercent.xxl}`,
} as const;

const size = {
    xxs: cn(xs.xxs, sm.xxs, md.xxs, lg.xxs),
    xs: cn(xs.xs, sm.xs, md.xs, lg.xs),
    sm: cn(xs.sm, sm.sm, md.sm, lg.sm),
    lg: cn(xs.lg, sm.lg, md.lg, lg.lg),
    xl: cn(xs.xl, sm.xl, md.xl, lg.xl),
    xxl: cn(xs.xxl, sm.xxl, md.xxl, lg.xxl),
} as const;

export const ImageVariants = cva(
    "flex overflow-hidden",
    {
        variants: {
            size: size,
            xs: xs,
            sm: sm,
            md: md,
            lg: lg,
            nonXs: {
                xxs: cn(sm.xxs, md.xxs, lg.xxs),
                xs: cn(sm.xs, md.xs, lg.xs),
                sm: cn(sm.sm, md.sm, lg.sm),
                lg: cn(sm.lg, md.lg, lg.lg),
                xl: cn(sm.xl, md.xl, lg.xl),
                xxl: cn(sm.xxl, md.xxl, lg.xxl),
            },
            nonSm: {
                xxs: cn(xs.xxs, md.xxs, lg.xxs),
                xs: cn(xs.xs, md.xs, lg.xs),
                sm: cn(xs.sm, md.sm, lg.sm),
                lg: cn(xs.lg, md.lg, lg.lg),
                xl: cn(xs.xl, md.xl, lg.xl),
                xxl: cn(xs.xxl, md.xxl, lg.xxl),
            },
            nonMd: {
                xxs: cn(xs.xxs, sm.xxs, lg.xxs),
                xs: cn(xs.xs, sm.xs, lg.xs),
                sm: cn(xs.sm, sm.sm, lg.sm),
                lg: cn(xs.lg, sm.lg, lg.lg),
                xl: cn(xs.xl, sm.xl, lg.xl),
                xxl: cn(xs.xxl, sm.xxl, lg.xxl),
            },
            nonLg: {
                xxs: cn(xs.xxs, sm.xxs, md.xxs),
                xs: cn(xs.xs, sm.xs, md.xs),
                sm: cn(xs.sm, sm.sm, md.sm),
                lg: cn(xs.lg, sm.lg, md.lg),
                xl: cn(xs.xl, sm.xl, md.xl),
                xxl: cn(xs.xxl, sm.xxl, md.xxl),
            },
            rounded: rounded,
        },
    }
)

export type ImageType = {
    name?: string;
    src: string;
    alt: string;
};

type ImageCompType = ImageType & VariantProps<typeof ImageVariants> & {
    className?: string;
    fluid?: boolean;
}

export function Image({
    className,
    fluid = false,
    size,
    xs,
    sm,
    md,
    lg,
    nonSm,
    nonMd,
    nonLg,
    ...props
}: ImageCompType) {
    return (
        <div data-fluid={fluid}
            className={cn(ImageVariants({
                size, xs, sm, md, lg,
                nonSm, nonMd, nonLg,
            }), className)}>

            <img src={props.src} alt={`${props.alt}`}
                className="w-full h-full object-contain" />
        </div>
    )
}


