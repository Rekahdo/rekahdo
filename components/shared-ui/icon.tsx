import { cva, VariantProps } from "class-variance-authority";
import AppImage, { ImageProps } from "./image";
import { cn } from "cn";

export const AppIconVariants = cva(
    cn(
        "flex items-center justify-center shrink-0",
        "transition-all duration-200",
    ), {
    variants: {
        variant: {
            'no-bg': "border-transparent bg-transparent text-foreground",
            background: "border-border/80 bg-background/80 text-foreground",
            primary: "border-border/70 bg-primary/90 text-primary-foreground",
            muted: "border-border/70 bg-muted/80 backdrop-blur-sm text-muted-foreground",
            'muted-alt': "bg-white/10 border-black/20 text-white/50"
        },
        hover: {
            muted: "hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-sm",
            'muted-alt': "hover:bg-white/20",
        },
        size: {
            '3xs': "p-0.5 size-2 *:size-2 rounded-[1px]",
            '2xs': "p-1 size-4 *:size-4 rounded-xs",
            xs: "p-1.5 size-6 *:size-6 rounded-sm",
            sm: "p-2 size-8 *:size-8 rounded-md",
            md: "p-2.5 size-10 *:size-10 rounded-lg",
            lg: "p-3 size-12 *:size-12 rounded-xl"
        },
        border: {
            true: 'border',
            false: "border-0"
        }
    },
    defaultVariants: {
        variant: "background",
        size: "sm",
    }
})

export function AppIcon(props: VariantProps<typeof AppIconVariants>
    & Omit<ImageProps, "width" | "height" | "variant">) {
    const { src, srcDark, alt, variant, hover, size, border, ...rest } = props;

    return (
        <div className={cn("relative", AppIconVariants({ size }))}>
            <AppImage
                src={src}
                srcDark={srcDark}
                alt={alt}
                fill
                eager
                objectFit={'contain'}
                rootClassName={cn(AppIconVariants({ variant, hover, border }))}
                {...rest}
            />
        </div>
    );
}