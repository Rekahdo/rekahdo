'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

export const imageVariants = cva("", {
    variants: {
        objectFit: {
            contain: "object-contain",
            cover: "object-cover",
            fill: "object-fill",
            none: "object-none",
            scale: "object-scale-down",
        },
        variantWidth: {
            w10: "w-1/10",
            w20: "w-2/10",
            w30: "w-3/10",
            w40: "w-4/10",
            w50: "w-5/10",
            w60: "w-6/10",
            w70: "w-7/10",
            w80: "w-8/10",
            w90: "w-9/10",
            w100: "w-full",
        },
        smWidth: {
            w10: "sm:w-1/10",
            w20: "sm:w-2/10",
            w30: "sm:w-3/10",
            w40: "sm:w-4/10",
            w50: "sm:w-5/10",
            w60: "sm:w-6/10",
            w70: "sm:w-7/10",
            w80: "sm:w-8/10",
            w90: "sm:w-9/10",
            w100: "sm:w-full",
        },
        mdWidth: {
            w10: "md:w-1/10",
            w20: "md:w-2/10",
            w30: "md:w-3/10",
            w40: "md:w-4/10",
            w50: "md:w-5/10",
            w60: "md:w-6/10",
            w70: "md:w-7/10",
            w80: "md:w-8/10",
            w90: "md:w-9/10",
            w100: "md:w-full",
        },
        lgWidth: {
            w10: "lg:w-1/10",
            w20: "lg:w-2/10",
            w30: "lg:w-3/10",
            w40: "lg:w-4/10",
            w50: "lg:w-5/10",
            w60: "lg:w-6/10",
            w70: "lg:w-7/10",
            w80: "lg:w-8/10",
            w90: "lg:w-9/10",
            w100: "lg:w-full",
        },
        xlWidth: {
            w10: "xl:w-1/10",
            w20: "xl:w-2/10",
            w30: "xl:w-3/10",
            w40: "xl:w-4/10",
            w50: "xl:w-5/10",
            w60: "xl:w-6/10",
            w70: "xl:w-7/10",
            w80: "xl:w-8/10",
            w90: "xl:w-9/10",
            w100: "xl:w-full",
        },
        xxlWidth: {
            w10: "2xl:w-1/10",
            w20: "2xl:w-2/10",
            w30: "2xl:w-3/10",
            w40: "2xl:w-4/10",
            w50: "2xl:w-5/10",
            w60: "2xl:w-6/10",
            w70: "2xl:w-7/10",
            w80: "2xl:w-8/10",
            w90: "2xl:w-9/10",
            w100: "2xl:w-full",
        },
        maxSmWidth: {
            w10: "max-sm:w-1/10",
            w20: "max-sm:w-2/10",
            w30: "max-sm:w-3/10",
            w40: "max-sm:w-4/10",
            w50: "max-sm:w-5/10",
            w60: "max-sm:w-6/10",
            w70: "max-sm:w-7/10",
            w80: "max-sm:w-8/10",
            w90: "max-sm:w-9/10",
            w100: "max-sm:w-full",
        },
        maxMdWidth: {
            w10: "max-md:w-1/10",
            w20: "max-md:w-2/10",
            w30: "max-md:w-3/10",
            w40: "max-md:w-4/10",
            w50: "max-md:w-5/10",
            w60: "max-md:w-6/10",
            w70: "max-md:w-7/10",
            w80: "max-md:w-8/10",
            w90: "max-md:w-9/10",
            w100: "max-md:w-full",
        },
        maxLgWidth: {
            w10: "max-lg:w-1/10",
            w20: "max-lg:w-2/10",
            w30: "max-lg:w-3/10",
            w40: "max-lg:w-4/10",
            w50: "max-lg:w-5/10",
            w60: "max-lg:w-6/10",
            w70: "max-lg:w-7/10",
            w80: "max-lg:w-8/10",
            w90: "max-lg:w-9/10",
            w100: "max-lg:w-full",
        },
        maxXlWidth: {
            w10: "max-xl:w-1/10",
            w20: "max-xl:w-2/10",
            w30: "max-xl:w-3/10",
            w40: "max-xl:w-4/10",
            w50: "max-xl:w-5/10",
            w60: "max-xl:w-6/10",
            w70: "max-xl:w-7/10",
            w80: "max-xl:w-8/10",
            w90: "max-xl:w-9/10",
            w100: "max-xl:w-full",
        },
        rounded: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            "4xl": "rounded-4xl",
            full: "rounded-full",
        },
        variant: {
            elevate: "rounded-[2.5rem] border border-border/80 bg-card shadow-lg p-2",
        }
    },
});

export type ImageProps = Omit<NextImageProps, "src" | "alt" | "loading" | "objectFit" | "className"> &
    VariantProps<typeof imageVariants> & {
        rootClassName?: string;
        wrapperClassName?: string;
        imgClassName?: string;
        src: NextImageProps["src"];
        srcDark?: NextImageProps["src"];
        alt: string;
        eager?: boolean;
        relative?: boolean;
        onClick?: () => void;
    };

export default function AppImage({
    rootClassName,
    wrapperClassName,
    imgClassName,
    src,
    srcDark,
    alt,
    width,
    height,
    fill,
    sizes,
    onClick,
    eager,
    relative = true,
    objectFit,
    rounded,
    ...props
}: ImageProps) {
    const { listen, stop } = useTheme();
    const [imageSrc, setImageSrc] = useState<NextImageProps["src"]>(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    useEffect(() => {
        if (!srcDark) return;

        const observer = listen(
            () => setImageSrc(srcDark),
            () => setImageSrc(src),
        );
        return () => stop(observer);
    }, [src, srcDark]);

    return (
        <div className={cn(
            fill && "absolute inset-0 w-full h-full",
            imageVariants({ rounded, ...props }), rootClassName
        )}>
            <div
                className={cn(
                    imageVariants({ rounded }),
                    "flex justify-center items-center",
                    "overflow-hidden w-full h-full",
                    wrapperClassName,
                )}
            >
                <NextImage
                    src={imageSrc}
                    alt={alt}
                    fill={fill}
                    width={width}
                    height={height}
                    sizes={sizes}
                    onClick={onClick}
                    loading={eager ? "eager" : undefined}
                    className={cn(
                        imageVariants({ objectFit }),
                        "w-full h-auto", fill && "h-full",
                        imgClassName
                    )}
                />
            </div>
        </div>
    );
}