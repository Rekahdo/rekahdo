'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import NextImage from "next/image";

export const imageVariants = cva("", {
    variants: {
        objectFit: {
            contain: "object-contain",
            cover: "object-cover",
            fill: "object-fill",
            none: "object-none",
            scale: "object-scale-down",
        },
        size: {
            s10: "size-1/10",
            s20: "size-2/10",
            s30: "size-3/10",
            s40: "size-4/10",
            s50: "size-5/10",
            s60: "size-6/10",
            s70: "size-7/10",
            s80: "size-8/10",
            s90: "size-9/10",
            s100: "size-full",
        },
        smSize: {
            s10: "sm:size-1/10",
            s20: "sm:size-2/10",
            s30: "sm:size-3/10",
            s40: "sm:size-4/10",
            s50: "sm:size-5/10",
            s60: "sm:size-6/10",
            s70: "sm:size-7/10",
            s80: "sm:size-8/10",
            s90: "sm:size-9/10",
            s100: "sm:size-full",
        },
        mdSize: {
            s10: "md:size-1/10",
            s20: "md:size-2/10",
            s30: "md:size-3/10",
            s40: "md:size-4/10",
            s50: "md:size-5/10",
            s60: "md:size-6/10",
            s70: "md:size-7/10",
            s80: "md:size-8/10",
            s90: "md:size-9/10",
            s100: "md:size-full",
        },
        lgSize: {
            s10: "lg:size-1/10",
            s20: "lg:size-2/10",
            s30: "lg:size-3/10",
            s40: "lg:size-4/10",
            s50: "lg:size-5/10",
            s60: "lg:size-6/10",
            s70: "lg:size-7/10",
            s80: "lg:size-8/10",
            s90: "lg:size-9/10",
            s100: "lg:size-full",
        },
        xlSize: {
            s10: "xl:size-1/10",
            s20: "xl:size-2/10",
            s30: "xl:size-3/10",
            s40: "xl:size-4/10",
            s50: "xl:size-5/10",
            s60: "xl:size-6/10",
            s70: "xl:size-7/10",
            s80: "xl:size-8/10",
            s90: "xl:size-9/10",
            s100: "xl:size-full",
        },
        xxlSize: {
            s10: "2xl:size-1/10",
            s20: "2xl:size-2/10",
            s30: "2xl:size-3/10",
            s40: "2xl:size-4/10",
            s50: "2xl:size-5/10",
            s60: "2xl:size-6/10",
            s70: "2xl:size-7/10",
            s80: "2xl:size-8/10",
            s90: "2xl:size-9/10",
            s100: "2xl:size-full",
        },
        maxSmSize: {
            s10: "max-sm:size-1/10",
            s20: "max-sm:size-2/10",
            s30: "max-sm:size-3/10",
            s40: "max-sm:size-4/10",
            s50: "max-sm:size-5/10",
            s60: "max-sm:size-6/10",
            s70: "max-sm:size-7/10",
            s80: "max-sm:size-8/10",
            s90: "max-sm:size-9/10",
            s100: "max-sm:size-full",
        },
        maxMdSize: {
            s10: "max-md:size-1/10",
            s20: "max-md:size-2/10",
            s30: "max-md:size-3/10",
            s40: "max-md:size-4/10",
            s50: "max-md:size-5/10",
            s60: "max-md:size-6/10",
            s70: "max-md:size-7/10",
            s80: "max-md:size-8/10",
            s90: "max-md:size-9/10",
            s100: "max-md:size-full",
        },
        maxLgSize: {
            s10: "max-lg:size-1/10",
            s20: "max-lg:size-2/10",
            s30: "max-lg:size-3/10",
            s40: "max-lg:size-4/10",
            s50: "max-lg:size-5/10",
            s60: "max-lg:size-6/10",
            s70: "max-lg:size-7/10",
            s80: "max-lg:size-8/10",
            s90: "max-lg:size-9/10",
            s100: "max-lg:size-full",
        },
        maxXlSize: {
            s10: "max-xl:size-1/10",
            s20: "max-xl:size-2/10",
            s30: "max-xl:size-3/10",
            s40: "max-xl:size-4/10",
            s50: "max-xl:size-5/10",
            s60: "max-xl:size-6/10",
            s70: "max-xl:size-7/10",
            s80: "max-xl:size-8/10",
            s90: "max-xl:size-9/10",
            s100: "max-xl:size-full",
        },
        rounded: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        },
        roundedT: {
            none: "rounded-t-none",
            sm: "rounded-t-sm",
            md: "rounded-t-md",
            lg: "rounded-t-lg",
            xl: "rounded-t-xl",
            "2xl": "rounded-t-2xl",
            "3xl": "rounded-t-3xl",
            full: "rounded-t-full",
        },
        roundedB: {
            none: "rounded-b-none",
            sm: "rounded-b-sm",
            md: "rounded-b-md",
            lg: "rounded-b-lg",
            xl: "rounded-b-xl",
            "2xl": "rounded-b-2xl",
            "3xl": "rounded-b-3xl",
            full: "rounded-b-full",
        },
        roundedL: {
            none: "rounded-l-none",
            sm: "rounded-l-sm",
            md: "rounded-l-md",
            lg: "rounded-l-lg",
            xl: "rounded-l-xl",
            "2xl": "rounded-l-2xl",
            "3xl": "rounded-l-3xl",
            full: "rounded-l-full",
        },
        roundedR: {
            none: "rounded-r-none",
            sm: "rounded-r-sm",
            md: "rounded-r-md",
            lg: "rounded-r-lg",
            xl: "rounded-r-xl",
            "2xl": "rounded-r-2xl",
            "3xl": "rounded-r-3xl",
            full: "rounded-r-full",
        },
        roundedTL: {
            none: "rounded-tl-none",
            sm: "rounded-tl-sm",
            md: "rounded-tl-md",
            lg: "rounded-tl-lg",
            xl: "rounded-tl-xl",
            "2xl": "rounded-tl-2xl",
            "3xl": "rounded-tl-3xl",
            full: "rounded-tl-full",
        },
        roundedTR: {
            none: "rounded-tr-none",
            sm: "rounded-tr-sm",
            md: "rounded-tr-md",
            lg: "rounded-tr-lg",
            xl: "rounded-tr-xl",
            "2xl": "rounded-tr-2xl",
            "3xl": "rounded-tr-3xl",
            full: "rounded-tr-full",
        },
        roundedBL: {
            none: "rounded-bl-none",
            sm: "rounded-bl-sm",
            md: "rounded-bl-md",
            lg: "rounded-bl-lg",
            xl: "rounded-bl-xl",
            "2xl": "rounded-bl-2xl",
            "3xl": "rounded-bl-3xl",
            full: "rounded-bl-full",
        },
        roundedBR: {
            none: "rounded-br-none",
            sm: "rounded-br-sm",
            md: "rounded-br-md",
            lg: "rounded-br-lg",
            xl: "rounded-br-xl",
            "2xl": "rounded-br-2xl",
            "3xl": "rounded-br-3xl",
            full: "rounded-br-full",
        },
    },
    defaultVariants: {
        objectFit: "contain",
        size: "s100",
    },
});

type ImageType = VariantProps<typeof imageVariants> & {
    className?: string;
    imgClassName?: string;
    src: string;
    srcDark?: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
};

export default function Image({
    imgClassName,
    className,
    src,
    srcDark = src,
    alt,
    width,
    height = width,
    fill,
    sizes,
    priority,
    objectFit,
    rounded,
    roundedT,
    roundedB,
    roundedL,
    roundedR,
    roundedTL,
    roundedTR,
    roundedBL,
    roundedBR,
    ...props
}: ImageType) {
    const { listen, stop } = useTheme();
    const [imageSrc, setSrc] = useState<string>(src);

    useEffect(() => {
        setSrc(src);
        const observer = listen(
            () => setSrc(srcDark),
            () => setSrc(src),
        );
        return () => stop(observer);
    }, [srcDark, src, listen, stop]);

    return (
        <div className={cn("flex justify-center",
            className,
            // "bg-red-300",
        )}>
            <div
                className={cn(
                    imageVariants({
                        ...props
                    }),
                    className,
                    // "bg-green-300",
                )}
            >
                <NextImage
                    src={imageSrc}
                    alt={alt}
                    fill={fill}
                    width={width}
                    height={height}
                    sizes={sizes}
                    priority={priority}
                    className={cn(
                        "relative",
                        imageVariants({
                            objectFit,
                            rounded,
                            roundedT,
                            roundedB,
                            roundedL,
                            roundedR,
                            roundedTL,
                            roundedTR,
                            roundedBL,
                            roundedBR,
                        }),
                        imgClassName,
                    )}
                />
            </div>
        </div>
    );
}