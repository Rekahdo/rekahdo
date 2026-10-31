'use client'

import { FieldGroup } from "@/components/ui/field";
import { Controller, useForm, FieldValues, Path, UseFormReturn, DefaultValues } from "react-hook-form";
import { ReactNode, useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, ButtonImplProps } from "@/components/shared-ui/button-impl";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";
import AppField from "./field";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

export interface DialogProps<TValues extends FieldValues> {
    triggerText: string;
    triggerIcon?: ReactNode;
    triggerVariant?: ButtonImplProps["variant"];
    triggerProps?: ButtonImplProps;
    title: string;
    size?: "sm" | "md" | "lg";
    submitText: string;
    cancelText?: string;
    schema: ZodType<TValues, any, any>;
    defaultValues: DefaultValues<TValues>;
    fields: DialogFieldProps<TValues>[];
    onSubmit: (data: TValues, form: UseFormReturn<TValues>) => void | Promise<void>;
    resetOnClose?: boolean;
}

export interface DialogFieldProps<TValues extends FieldValues> {
    name: Path<TValues>;
    label: string;
    placeholder?: string;
    type?: React.ComponentProps<typeof AppField>["type"];
    important?: boolean;
    as?: "input" | "textarea";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    clearable?: boolean;
    accept?: string;
    multiple?: boolean;
    autoComplete?: string;
    rows?: number;
}

export function DialogForm<TValues extends FieldValues>({
    triggerText,
    triggerIcon,
    triggerVariant,
    triggerProps,
    title,
    size = "md",
    submitText,
    cancelText = "Cancel",
    schema,
    defaultValues,
    fields,
    onSubmit,
    resetOnClose = true,
}: DialogProps<TValues>) {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TValues>({
        resolver: zodResolver(schema as any),
        defaultValues,
    });

    const { handleSubmit, control, reset } = form;

    const sizeClass = {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
    }[size];

    function submit(data: TValues) {
        startTransition(async () => {
            await onSubmit(data, form);
        });
    }

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <ButtonImpl
                        text={triggerText}
                        icon={triggerIcon}
                        variant={triggerVariant}
                        showTextAt="sm"
                        {...triggerProps}
                    />
                }
            />
            <DialogContent className={sizeClass}>
                <DialogHeader>
                    <DialogTitle>
                        <H2 title={title} />
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
                    <FieldGroup>
                        {fields.map((f) => (
                            <Controller
                                key={f.name}
                                name={f.name}
                                control={control}
                                render={({ field, fieldState }) => (
                                    <AppField
                                        field={field}
                                        fieldState={fieldState}
                                        label={f.label}
                                        placeholder={f.placeholder}
                                        type={f.type}
                                        important={f.important}
                                        as={f.as}
                                        startIcon={f.startIcon}
                                        endIcon={f.endIcon}
                                        clearable={f.clearable}
                                        accept={f.accept}
                                        multiple={f.multiple}
                                        autoComplete={f.autoComplete}
                                        rows={f.rows}
                                    />
                                )}
                            />
                        ))}
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose
                            onClick={() => resetOnClose && reset()}
                            render={
                                <ButtonImpl
                                    variant="outline"
                                    text={cancelText}
                                    height="md"
                                />
                            }
                        />

                        <ButtonImpl
                            isPending={isPending}
                            type="submit"
                            text={submitText}
                            height="md"
                        />

                        <ButtonImpl
                            variant={'destructive'}
                            isPending={isPending}
                            type="reset"
                            text={"reset"}
                            height="md"
                        />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}