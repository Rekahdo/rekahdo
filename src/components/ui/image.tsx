import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { rounded } from "./css-types";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { themeIsDark } from "../../utils/utils";

const xs = {
    xxs: "max-sm:w-16 max-sm:data-[fluid=true]:w-[10%]",
    xs: "max-sm:w-20 max-sm:data-[fluid=true]:w-[20%]",
    sm: "max-sm:w-40 max-sm:data-[fluid=true]:w-[40%]",
    lg: "max-sm:w-60 max-sm:data-[fluid=true]:w-[60%]",
    xl: "max-sm:w-80 max-sm:data-[fluid=true]:w-[80%]",
    xxl: "max-sm:w-90 max-sm:data-[fluid=true]:w-[90%]",
} as const;

const sm = {
    xxs: "sm:max-md:w-20 sm:max-md:data-[fluid=true]:w-[10%]",
    xs: "sm:max-md:w-25 sm:max-md:data-[fluid=true]:w-[20%]",
    sm: "sm:max-md:w-55 sm:max-md:data-[fluid=true]:w-[40%]",
    lg: "sm:max-md:w-80 sm:max-md:data-[fluid=true]:w-[60%]",
    xl: "sm:max-md:w-100 sm:max-md:data-[fluid=true]:w-[80%]",
    xxl: "sm:max-md:w-140 sm:max-md:data-[fluid=true]:w-[90%]",
} as const;

const md = {
    xxs: "md:max-lg:w-20 md:max-lg:data-[fluid=true]:w-[10%]",
    xs: "md:max-lg:w-25 md:max-lg:data-[fluid=true]:w-[20%]",
    sm: "md:max-lg:w-55 md:max-lg:data-[fluid=true]:w-[40%]",
    lg: "md:max-lg:w-80 md:max-lg:data-[fluid=true]:w-[60%]",
    xl: "md:max-lg:w-100 md:max-lg:data-[fluid=true]:w-[80%]",
    xxl: "md:max-lg:w-140 md:max-lg:data-[fluid=true]:w-[90%]",
} as const;

const lg = {
    xxs: "lg:w-25 lg:data-[fluid=true]:w-[10%]",
    xs: "lg:w-30 lg:data-[fluid=true]:w-[20%]",
    sm: "lg:w-65 lg:data-[fluid=true]:w-[40%]",
    lg: "lg:w-100 lg:data-[fluid=true]:w-[60%]",
    xl: "lg:w-140 lg:data-[fluid=true]:w-[80%]",
    xxl: "lg:w-200 lg:data-[fluid=true]:w-[90%]",
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
    "flex overflow-hidden text-foreground",
    {
        variants: {
            size: size,
            xs: xs,
            sm: sm,
            md: md,
            lg: lg,

            xsSm: {
                xxs: cn(xs.xxs, sm.xxs),
                xs: cn(xs.xs, sm.xs),
                sm: cn(xs.sm, sm.sm),
                lg: cn(xs.lg, sm.lg),
                xl: cn(xs.xl, sm.xl),
                xxl: cn(xs.xxl, sm.xxl),
            },
            xsMd: {
                xxs: cn(xs.xxs, md.xxs),
                xs: cn(xs.xs, md.xs),
                sm: cn(xs.sm, md.sm),
                lg: cn(xs.lg, md.lg),
                xl: cn(xs.xl, md.xl),
                xxl: cn(xs.xxl, md.xxl),
            },
            xsLg: {
                xxs: cn(xs.xxs, lg.xxs),
                xs: cn(xs.xs, lg.xs),
                sm: cn(xs.sm, lg.sm),
                lg: cn(xs.lg, lg.lg),
                xl: cn(xs.xl, lg.xl),
                xxl: cn(xs.xxl, lg.xxl),
            },
            smMd: {
                xxs: cn(sm.xxs, md.xxs),
                xs: cn(sm.xs, md.xs),
                sm: cn(sm.sm, md.sm),
                lg: cn(sm.lg, md.lg),
                xl: cn(sm.xl, md.xl),
                xxl: cn(sm.xxl, md.xxl),
            },
            smLg: {
                xxs: cn(sm.xxs, lg.xxs),
                xs: cn(sm.xs, lg.xs),
                sm: cn(sm.sm, lg.sm),
                lg: cn(sm.lg, lg.lg),
                xl: cn(sm.xl, lg.xl),
                xxl: cn(sm.xxl, lg.xxl),
            },
            mdLg: {
                xxs: cn(md.xxs, lg.xxs),
                xs: cn(md.xs, lg.xs),
                sm: cn(md.sm, lg.sm),
                lg: cn(md.lg, lg.lg),
                xl: cn(md.xl, lg.xl),
                xxl: cn(md.xxl, lg.xxl),
            },

            belowMd: {
                xxs: cn(xs.xxs, sm.xxs),
                xs: cn(xs.xs, sm.xs),
                sm: cn(xs.sm, sm.sm),
                lg: cn(xs.lg, sm.lg),
                xl: cn(xs.xl, sm.xl),
                xxl: cn(xs.xxl, sm.xxl),
            },
            belowLg: {
                xxs: cn(xs.xxs, sm.xxs, md.xxs),
                xs: cn(xs.xs, sm.xs, md.xs),
                sm: cn(xs.sm, sm.sm, md.sm),
                lg: cn(xs.lg, sm.lg, md.lg),
                xl: cn(xs.xl, sm.xl, md.xl),
                xxl: cn(xs.xxl, sm.xxl, md.xxl),
            },
            aboveXs: {
                xxs: cn(sm.xxs, md.xxs, lg.xxs),
                xs: cn(sm.xs, md.xs, lg.xs),
                sm: cn(sm.sm, md.sm, lg.sm),
                lg: cn(sm.lg, md.lg, lg.lg),
                xl: cn(sm.xl, md.xl, lg.xl),
                xxl: cn(sm.xxl, md.xxl, lg.xxl),
            },
            aboveSm: {
                xxs: cn(md.xxs, lg.xxs),
                xs: cn(md.xs, lg.xs),
                sm: cn(md.sm, lg.sm),
                lg: cn(md.lg, lg.lg),
                xl: cn(md.xl, lg.xl),
                xxl: cn(md.xxl, lg.xxl),
            },

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
);

export const imageObjectFit = cva("w-full h-full", {
    variants: {
        objectFit: {
            contain: "object-contain",
            cover: "object-cover",
            fill: "object-fill",
            none: "object-none",
            scale: "object-scale-down",
        },
    },
    defaultVariants: {
        objectFit: "contain",
    },
});

export type ImageType = {
    name?: string;
    src: string;
    darkSrc?: string;
    alt: string;
};

export type ImageCompType = ImageType &
    VariantProps<typeof ImageVariants> &
    VariantProps<typeof imageObjectFit> & {
        fluid?: boolean;
        className?: string;
        imgClassName?: string;
    };

export function Image({
    className,
    imgClassName,
    fluid = false,
    size,
    xs,
    sm,
    md,
    lg,
    xsSm,
    xsMd,
    xsLg,
    smMd,
    smLg,
    mdLg,
    belowMd,
    belowLg,
    aboveXs,
    aboveSm,
    nonXs,
    nonSm,
    nonMd,
    nonLg,
    rounded,
    objectFit,
    src,
    darkSrc,
    alt,
}: ImageCompType) {
    darkSrc = darkSrc ? darkSrc : src

    const { listen, stop } = useTheme();
    const [imageSrc, setSrc] = useState<string>(themeIsDark() ? darkSrc : src);

    useEffect(() => {
        const observer = listen(() => setSrc(darkSrc), () => setSrc(src));

        return () => {
            stop(observer);
        }
    }, [darkSrc, listen, src, stop])

    return (
        <div
            data-fluid={fluid}
            className={cn(
                ImageVariants({
                    size,
                    xs,
                    sm,
                    md,
                    lg,
                    xsSm,
                    xsMd,
                    xsLg,
                    smMd,
                    smLg,
                    mdLg,
                    belowMd,
                    belowLg,
                    aboveXs,
                    aboveSm,
                    nonXs,
                    nonSm,
                    nonMd,
                    nonLg,
                    rounded,
                }),
                className
            )}
        >
            <img
                src={imageSrc}
                alt={`${alt}`}
                className={cn(imageObjectFit({ objectFit }), imgClassName)}
            />
        </div>
    );
}