'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import NextImage from "next/image";

export const imageVariants = cva("relative", {
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
            s100: "size-10/10",
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
            s100: "sm:size-10/10",
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
            s100: "md:size-10/10",
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
            s100: "lg:size-10/10",
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
            s100: "xl:size-10/10",
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
            s100: "2xl:size-10/10",
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
            s100: "max-sm:size-10/10",
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
            s100: "max-md:size-10/10",
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
            s100: "max-lg:size-10/10",
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
            s100: "max-xl:size-10/10",
        },
    },
    defaultVariants: {
        objectFit: "contain",
        size:'s100',
    },
});

type ImageType = VariantProps<typeof imageVariants> & {
    className?: string;
    wrapperClassName?: string;
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
    className,
    wrapperClassName,
    src,
    srcDark = src,
    alt,
    width,
    height = width,
    fill,
    sizes,
    priority,
    objectFit,
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
        <div
            className={cn(
                imageVariants({
                    ...props
                }),
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
                priority={priority}
                className={cn(
                    imageVariants({ objectFit }),
                    className,
                )}
            />
        </div>
    );
}