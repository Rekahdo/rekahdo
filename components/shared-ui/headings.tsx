import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";

export const HeaderVariants = cva("capitalize", {
    variants: {
        size: {
            h1: "text-5xl sm:text-6xl font-extrabold uppercase",
            h2: "text-3xl sm:text-4xl font-bold",
            h3: "text-xl sm:text-2xl font-bold",
            h4: "text-lg sm:text-xl font-bold",
            h5: "text-base sm:text-lg font-bold",
            h6: "text-sm sm:text-base font-bold",
        },
    },
});

export type HeadingProps = VariantProps<typeof HeaderVariants> & {
    id?: string;

    as?: ElementType;
    level?: 1 | 2 | 3 | 4 | 5 | 6;

    icon?: ReactNode;
    iconPosition?: "left" | "right";
    title: ReactNode;
    className?: string;

    subtitle?: ReactNode;
    subtitleClassName?: string;

    children?: ReactNode;
    childrenClassName?: string;
};

function Heading({
    id,
    as,
    level = 2,
    icon,
    iconPosition = "left",
    title,
    className,
    subtitle,
    subtitleClassName,
    children,
    childrenClassName,
    ...props
}: HeadingProps) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
    const visualSize = props.size ?? (`h${level}` as const);

    return (
        <div>
            <div className={cn("flex flex-col text-foreground", className)}>
                {hasTitle && (
                    <Tag
                        id={id}
                        className={cn("flex items-center gap-4 text-foreground",
                            HeaderVariants({
                                ...props,
                                size: visualSize
                            }),
                            className,
                        )}
                    >
                        {icon && iconPosition === "left" && (
                            <span className="*:size-8 flex items-center justify-center">
                                {icon}
                            </span>
                        )}

                        {title}

                        {icon && iconPosition === "right" && (
                            <span className="*:size-8 flex items-center justify-center">
                                {icon}
                            </span>
                        )}
                    </Tag>
                )}

                {subtitle !== undefined && subtitle !== null && subtitle !== "" && (
                    <p className={cn("mt-4 text-muted-foreground", subtitleClassName)}>
                        {subtitle}
                    </p>
                )}
            </div>

            {children && (
                <div className={cn("mt-4 space-y-5", childrenClassName)}>
                    {children}
                </div>
            )}
        </div>
    );
}

export function H1(props: HeadingProps) {
    return <Heading level={1} {...props} />;
}

export function H2(props: HeadingProps) {
    return <Heading level={2} {...props} />;
}

export function H3(props: HeadingProps) {
    return <Heading level={3} {...props} />;
}

export function H4(props: HeadingProps) {
    return <Heading level={4} {...props} />;
}

export function H5(props: HeadingProps) {
    return <Heading level={5} {...props} />;
}

export function H6(props: HeadingProps) {
    return <Heading level={6} {...props} />;
}