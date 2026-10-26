import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";

const fadeOverlayVariants = cva("pointer-events-none absolute", {
    variants: {
        direction: {
            "to-top": "inset-x-0 bottom-0 bg-linear-to-t",
            "to-bottom": "inset-x-0 top-0 bg-linear-to-b",
            "to-left": "inset-y-0 right-0 bg-linear-to-l",
            "to-right": "inset-y-0 left-0 bg-linear-to-r",
        },
    },
    defaultVariants: {
        direction: "to-top",
    },
});

type FadeOverlayProps = VariantProps<typeof fadeOverlayVariants> & {
    height?: string;
    from?: string;
    to?: string;
    className?: string;
};

export function FadeOverlay({
    height = "h-20",
    from = "from-background",
    to = "to-transparent",
    direction = "to-top",
    className,
}: FadeOverlayProps) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                fadeOverlayVariants({ direction }),
                height,
                from,
                to,
                className
            )}
        />
    );
}