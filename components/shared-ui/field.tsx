import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { ElementType, ReactNode, useState } from "react";
import { cn } from "cn";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "../ui/input-group";
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(cn(), {
    variants: {
        textcase: {
            capitalize: "capitalize",
            uppercase: "uppercase",
            lowercase: "lowercase",
        },
        align: {
            "inline-start": "inline-start",
            "inline-end": "inline-end",
            "block-start": "block-start",
            "block-end": "inline-end",
        }
    }
})

interface InputProps extends VariantProps<typeof inputVariants> {
    className?: string;
    label: string;
    important?: boolean;
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    isPending?: boolean;
    placeholder?: string;
    as?: "input" | "textarea";
    alignLabel?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    clearable?: boolean;
    height?: number | string;
}

export default function AppInput({
    className,
    label,
    important,
    field,
    fieldState,
    isPending,
    placeholder,
    as = "input",
    align = "inline-start",
    alignLabel,
    startIcon,
    endIcon,
    clearable = true,
    height,
    ...props
}: InputProps) {

    const isInput = as === "input";
    const Tag = (isInput ? InputGroupInput : InputGroupTextarea) as ElementType;
    const errorId = `${field.name}-error`;
    const hasAddon = Boolean(startIcon || endIcon || alignLabel);

    const hasValue = field.value !== undefined && field.value !== null && String(field.value).length > 0;
    const showClearButton = clearable && hasValue && !isPending;

    const isBlock = align === "block-start" || align === "block-end";

    const resolvedMinHeight = height !== undefined
        ? (typeof height === "number" ? `${height}rem` : height)
        : (isInput ? "3rem" : "6rem");

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        field.onChange("");
    };

    return (
        <Field className={cn("flex flex-col gap-2", className)}>
            <FieldLabel
                htmlFor={field.name}
                className={cn(
                    "gap-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors",
                    important && "after:text-destructive after:content-['*']"
                )}
            >
                {label}
            </FieldLabel>

            <InputGroup
                data-invalid={fieldState.invalid}
                data-disabled={isPending}
                className={cn(
                    "gap-0 p-2!",
                    "rounded-xl border border-input bg-background transition-colors duration-200 shadow-xs",
                    "hover:border-ring/50 hover:bg-background",
                    isBlock && "gap-1"
                )}
                style={{ minHeight: resolvedMinHeight }}
            >
                {hasAddon && (
                    <InputGroupAddon align={align}
                        className={cn(
                            "*:text-muted-foreground flex items-center gap-4 p-2",
                        )}>

                        {startIcon}

                        {alignLabel && (
                            <InputGroupText className="font-mono text-xs">{alignLabel}</InputGroupText>
                        )}

                        {endIcon &&
                            <span className="ms-auto">
                                {endIcon}
                            </span>
                        }

                    </InputGroupAddon>
                )}

                <div className={cn(
                    "flex w-full h-full px-2",
                    isInput ? "items-center" : "py-2",
                )}>
                    <Tag
                        id={field.name}
                        {...field}
                        aria-invalid={fieldState.invalid}
                        aria-describedby={fieldState.invalid ? errorId : undefined}
                        aria-disabled={isPending}
                        disabled={isPending}
                        placeholder={placeholder}
                        row={40}
                        className={cn("min-h-full p-0! text-sm sm:text-base", inputVariants({ ...props }))}
                    />

                    {showClearButton && (
                        <InputGroupButton
                            onClick={handleClear}
                            aria-label={`Clear ${label}`}
                            className={cn(
                                "flex items-center justify-center rounded-full",
                                "bg-muted hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground",
                                "transition-all animate-into-view size-6"
                            )}
                        >
                            <X className="size-3" />
                        </InputGroupButton>
                    )}
                </div>

            </InputGroup>

            <FieldError id={errorId} errors={[fieldState.error]} />
        </Field>
    );
}