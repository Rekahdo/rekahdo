import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";
import { align, fontWeight, foreground, textAlign, textcase, textsize, } from "./css-types";

const wrapperVariants = cva("flex flex-col", {
    variants: {
        align,
        textAlign,
    },
});

const titleVariants = cva("flex items-center gap-4", {
    variants: {
        size: {
            h1: "text-4xl sm:text-5xl",
            h2: "text-3xl sm:text-4xl",
            h3: "text-xl sm:text-2xl",
            h4: "text-lg sm:text-xl",
            h5: "text-base sm:text-lg",
            h6: "text-sm sm:text-base",
        },
        case: textcase,
        weight: fontWeight,
        color: foreground,
    },
    defaultVariants: {
        weight: "extrabold",
        color: "default",
        case: 'capitalize',
    },
});

const subtitleVariants = cva("mt-2", {
    variants: {
        size: textsize,
        case: textcase,
        weight: fontWeight,
        color: foreground,
    },
    defaultVariants: {
        size: "base",
        case: "capitalize",
        weight: "medium",
        color: "default",
    },
});

export type TitleProps = {
    icon?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    children?: ReactNode;

    as?: ElementType;
    size?: VariantProps<typeof titleVariants>["size"];

    id?: string;
    className?: string;
    childrenClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;

    align?: VariantProps<typeof wrapperVariants>["align"];
    textAlign?: VariantProps<typeof wrapperVariants>["textAlign"];
    titleCase?: VariantProps<typeof titleVariants>["case"];
    titleWeight?: VariantProps<typeof titleVariants>["weight"];
    titleForeground?: VariantProps<typeof titleVariants>["color"];
    subTitleSize?: VariantProps<typeof subtitleVariants>["size"];
    subTitleCase?: VariantProps<typeof subtitleVariants>["case"];
    subTitleWeight?: VariantProps<typeof subtitleVariants>["weight"];
    subTitleForeground?: VariantProps<typeof subtitleVariants>["color"];
};


// ================================================================================================


export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

function Heading({
    level,
    icon,
    title,
    subtitle,
    children,
    as,
    size,
    id,
    className,
    childrenClassName,
    titleClassName,
    subtitleClassName,
    align,
    textAlign,
    titleCase,
    titleWeight,
    titleForeground,
    subTitleSize,
    subTitleCase,
    subTitleWeight,
    subTitleForeground,
}: TitleProps & { level: HeadingLevel }) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
    const visualSize = size ?? (`h${level}` as const);

    return (
        <div className={cn(wrapperVariants({ align, textAlign }), className)}>
            {hasTitle && (
                <Tag
                    id={id}
                    className={cn(
                        titleVariants({
                            size: visualSize,
                            case: titleCase,
                            weight: titleWeight,
                            color: titleForeground,
                        }),
                        titleClassName
                    )}
                >
                    {icon &&
                        <span className="*:size-8 flex items-center justify-center">
                            {icon}
                        </span>
                    }
                    {title}
                </Tag>
            )}

            {subtitle !== undefined && subtitle !== null && subtitle !== "" && (
                <p
                    className={cn(
                        subtitleVariants({
                            size: subTitleSize,
                            case: subTitleCase,
                            weight: subTitleWeight,
                            color: subTitleForeground,
                        }),
                        subtitleClassName
                    )}
                >
                    {subtitle}
                </p>
            )}

            {children && 
                <div className={cn("mt-4", childrenClassName)}>
                    {children}
                </div>
            }
        </div>
    );
}

export function H1(props: TitleProps) {
    return <Heading level={1} {...props} />;
}

export function H2(props: TitleProps) {
    return <Heading level={2} {...props} align={"center"} />;
}

export function H3(props: TitleProps) {
    return <Heading level={3} {...props} />;
}

export function H4(props: TitleProps) {
    return <Heading level={4} {...props} />;
}

export function H5(props: TitleProps) {
    return <Heading level={5} {...props} />;
}

export function H6(props: TitleProps) {
    return <Heading level={6} {...props} />;
}