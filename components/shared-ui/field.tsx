import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { ElementType, HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { cn } from "cn";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "../ui/input-group";
import { X, Eye, EyeOff } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const fieldVariants = cva(cn(), {
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
        },
    },
});

const BARE_TYPES = new Set<string>([
    "file",
    "checkbox",
    "radio",
    "color",
    "range",
    "hidden",
    "image",
]);

export interface AppFieldProps extends VariantProps<typeof fieldVariants> {
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
    type?: HTMLInputTypeAttribute | undefined;
    accept?: string;
    multiple?: boolean;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    autoComplete?: string;
    rows?: number;
}

export default function AppField({
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
    type,
    accept,
    multiple,
    min,
    max,
    step,
    autoComplete,
    rows,
    ...props
}: AppFieldProps) {
    const isInput = as === "input";
    const isBare = isInput && type !== undefined && BARE_TYPES.has(type);
    const errorId = `${field.name}-error`;

    const resolvedMinHeight =
        height !== undefined
            ? typeof height === "number"
                ? `${height}rem`
                : height
            : isInput
                ? "3rem"
                : "6rem";

    const inputProps = {
        id: field.name,
        ...field,
        type,
        "aria-invalid": fieldState.invalid,
        "aria-describedby": fieldState.invalid ? errorId : undefined,
        "aria-disabled": isPending,
        disabled: isPending,
        placeholder,
        accept,
        min,
        max,
        step,
        autoComplete,
    } as Record<string, unknown>;

    return (
        <Field className="flex flex-col gap-2">
            <AppFieldLabel
                label={label}
                fieldName={field.name}
                important={important}
            />

            {isBare ?
                (
                    <BareField
                        className={className}
                        type={type}
                        field={field}
                        multiple={multiple}
                        inputProps={inputProps}
                    />
                ) : (
                    <NotBareField
                        className={className}
                        label={label}
                        type={type}
                        field={field}
                        fieldState={fieldState}
                        isPending={isPending}
                        isInput={isInput}
                        isPassword={type === "password"}
                        clearable={clearable}
                        height={resolvedMinHeight}
                        align={align ?? "inline-start"}
                        alignLabel={alignLabel}
                        startIcon={startIcon}
                        endIcon={endIcon}
                        rows={rows}
                        multiple={multiple}
                        inputProps={inputProps}
                        Tag={
                            (isInput ? InputGroupInput
                                : InputGroupTextarea) as ElementType
                        }
                        variantProps={props}
                    />
                )
            }

            <FieldError id={errorId} errors={[fieldState.error]} />
        </Field>
    );
}

// LABEL
interface AppFieldLabelProps {
    label: string;
    fieldName: string;
    important?: boolean;
}

function AppFieldLabel({ label, fieldName, important }: AppFieldLabelProps) {
    return (
        <FieldLabel
            htmlFor={fieldName}
            className={cn(
                "gap-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors",
                important && "after:text-destructive after:content-['*']"
            )}
        >
            {label}
        </FieldLabel>
    );
}

// BARE INPUT
interface BareFieldProps {
    className?: string;
    type: HTMLInputTypeAttribute;
    inputProps: Record<string, unknown>;
    field: ControllerRenderProps<any, any>;
    multiple?: boolean;
}

function BareField({ className, type, inputProps, field, multiple }: BareFieldProps) {
    if (type === "file") {
        delete inputProps.value;
        inputProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            field.onChange(multiple ? files : files?.[0] ?? null);
        };
    }

    if (type === "checkbox" || type === "radio") {
        inputProps.checked = Boolean(field.value);
        delete inputProps.value;
        inputProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(
                type === "checkbox" ? e.target.checked : e.target.value
            );
        };
    }

    return (
        <>
            {type === "color" || type === "range" ? (
                <input
                    {...inputProps}
                    className={cn(
                        "w-full",
                        type === "color" &&
                        "h-10 w-20 cursor-pointer rounded-md border border-input bg-background p-1",
                        type === "range" && "accent-primary",
                        className
                    )}
                />
            ) : (
                <input
                    {...inputProps}
                    className={cn(
                        "rounded-xl border border-input bg-background p-2 text-sm shadow-xs transition-colors",
                        "file:me-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-foreground hover:file:bg-muted-foreground/20",
                        "hover:border-ring/50",
                        "aria-invalid:border-destructive",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                />
            )}
        </>
    );
}

// NOT BARE INPUT
interface NotBareFieldProps {
    className?: string;
    label: string;
    type?: HTMLInputTypeAttribute | undefined;
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    isPending?: boolean;
    isInput: boolean;
    isPassword: boolean;
    clearable: boolean;
    height?: AppFieldProps["height"];
    align?: "inline-start" | "inline-end" | "block-start" | "block-end";
    alignLabel?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    rows?: number;
    multiple?: boolean;
    inputProps: Record<string, unknown>;
    Tag: ElementType;
    variantProps: VariantProps<typeof fieldVariants>;
}

function NotBareField({
    className,
    label,
    type,
    field,
    fieldState,
    isPending,
    isInput,
    isPassword,
    clearable,
    height,
    align = "inline-start",
    alignLabel,
    startIcon,
    endIcon,
    rows,
    multiple,
    inputProps,
    Tag,
    variantProps,
}: NotBareFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const hasAddon = Boolean(startIcon || endIcon || alignLabel);
    const isBlock = align === "block-start" || align === "block-end";

    const safeValue = field.value ?? "";

    const hasValue =
        safeValue !== undefined &&
        safeValue !== null &&
        String(safeValue).length > 0;

    const showClearButton =
        clearable && hasValue && !isPending && !isPassword;
    const showPasswordToggle = isPassword && !isPending;

    const resolvedType = isPassword
        ? showPassword
            ? "text"
            : "password"
        : type;


    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        field.onChange("");
    };

    const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setShowPassword((v) => !v);
    };

    return (
        <InputGroup
            data-invalid={fieldState.invalid}
            data-disabled={isPending}
            className={cn(
                "gap-0 p-2!",
                "rounded-xl border border-input bg-background transition-colors duration-200 shadow-xs",
                "hover:border-ring/50 hover:bg-background",
                isBlock && "gap-1",
                className
            )}
            style={{ minHeight: height }}
        >
            {hasAddon && (
                <InputGroupAddon
                    align={align}
                    className="*:text-muted-foreground flex items-center gap-4 p-2"
                >
                    {startIcon}

                    {alignLabel && (
                        <InputGroupText className="font-mono text-xs">
                            {alignLabel}
                        </InputGroupText>
                    )}

                    {endIcon && <span className="ms-auto">{endIcon}</span>}
                </InputGroupAddon>
            )}

            <div
                className={cn(
                    "flex w-full h-full px-2",
                    isInput ? "items-center" : "py-2"
                )}
            >
                <Tag
                    {...inputProps}
                    value={safeValue}
                    type={resolvedType}
                    rows={!isInput ? (rows ?? 6) : undefined}
                    className={cn(
                        "min-h-full p-0! text-sm sm:text-base",
                        fieldVariants({ ...variantProps })
                    )}
                />

                {showPasswordToggle && (
                    <InputGroupButton
                        type="button"
                        onClick={handleTogglePassword}
                        aria-label={
                            showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                        className={cn(
                            "flex items-center justify-center rounded-full",
                            "text-muted-foreground hover:text-foreground",
                            "transition-all"
                        )}
                    >
                        {showPassword ? (
                            <EyeOff className="size-4" />
                        ) : (
                            <Eye className="size-4" />
                        )}
                    </InputGroupButton>
                )}

                {showClearButton && (
                    <InputGroupButton
                        type="button"
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
    );
}