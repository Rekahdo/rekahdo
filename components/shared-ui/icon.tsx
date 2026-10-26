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
            base: cn(
                "border-border/80 bg-background/80"
            ),
            primary: cn(
                "border-border/70 bg-background/90 text-primary",
            ),
            muted: cn(
                "border-border/70 bg-card/80 backdrop-blur-sm",
                "text-muted-foreground",
            ),
            'muted-alt': cn(
                "bg-white/10 border-black/20",
            )
        },
        hover: {
            muted: "hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-sm",
            'muted-alt': "hover:bg-white/20",
        },
        size: {
            xxs: "p-1 *:size-4 [&_svg]:size-1 rounded-xs",
            xs: "p-1.5 *:size-6 [&_svg]:size-2 rounded-sm",
            sm: "p-2 *:size-8 [&_svg]:size-3 rounded-md",
            md: "p-2.5 *:size-10 [&_svg]:size-4 rounded-lg",
            lg: "p-3 *:size-12 [&_svg]:size-5 rounded-xl"
        },
        border: {
            true: 'border',
            false: "border-0"
        }
    },
    defaultVariants: {
        variant: "base",
        size: "sm",
    }
})

export function AppIcon(props: VariantProps<typeof AppIconVariants>
    & Omit<ImageProps, "width" | "height">) {
    const { src, srcDark, alt, variant, hover, size, border, ...rest } = props;

    return (
        <AppImage
            src={src}
            srcDark={srcDark}
            alt={alt}
            fill
            rootClassName={cn(AppIconVariants({ variant, hover, border, size }))}
            {...rest}
        />
    );
}
