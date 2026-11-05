'use client'

import { FieldGroup } from "@/components/ui/field";
import { Controller, useForm, FieldValues, Path, UseFormReturn, DefaultValues } from "react-hook-form";
import { ReactNode, useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, ButtonImplProps } from "@/components/shared-ui/button-impl";
import AppField, { AppFieldProps } from "./field";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { cn } from "cn";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";

// ==========================================
// AUTH FORM CLASS
// ==========================================

type AuthFormConfig<TValues extends FieldValues> = {
    title: string;
    submitText: string;
    form: UseFormReturn<TValues, any, TValues>;
    fields: (Omit<AppFieldProps, "field" | "fieldState"> & { name: Path<TValues> })[];
    isPending: boolean;
}

class AuthForm<TValues extends FieldValues> {
    private readonly formProp: AuthFormConfig<TValues>;

    constructor({ formProps }: { formProps: AuthFormConfig<TValues> }) {
        this.formProp = formProps;
    }

    get title() {
        return <H2 title={this.formProp.title} />
    }

    get fields() {
        return (
            <FieldGroup>
                {this.formProp.fields.map((f) => (
                    <Controller
                        key={f.name}
                        name={f.name}
                        control={this.formProp.form.control}
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
        );
    }

    get footer() {
        return ({
            className: "flex flex-col-reverse *:grow sm:flex-row sm:justify-end gap-4 px-0 bg-transparent!",
            buttons: <>
                <ButtonImpl
                    variant={'destructive'}
                    isDisabled={this.formProp.isPending}
                    type="reset"
                    onClick={() => this.formProp.form.reset()}
                    text={"reset"}
                    height="md"
                />

                <ButtonImpl
                    isPending={this.formProp.isPending}
                    type="submit"
                    text={this.formProp.submitText}
                    height="md"
                />
            </>
        });
    }
}

// ==========================================
// FORM COMPONENT
// ==========================================

type CardType = {
    type: "card";
}

type DialogType = {
    type: "dialog";
    triggerText: string;
    triggerIcon?: ReactNode;
    triggerVariant?: ButtonImplProps["variant"];
    triggerProps?: ButtonImplProps;
}

export interface AppFormProps<TValues extends FieldValues> extends Omit<AuthFormConfig<TValues>, "form" | "isPending"> {
    ui?: CardType | DialogType;
    size: "sm" | "md" | "lg";
    schema: ZodType<TValues, any, any>;
    defaultValues: DefaultValues<TValues>;
    onSubmit: (values: TValues, form: UseFormReturn<TValues>) => void | Promise<void>;
    className?: string;
}

export function AppForm<TValues extends FieldValues>({
    ui = { type: "card" },
    schema,
    size,
    defaultValues,
    onSubmit,
    className,
    title,
    submitText,
    fields,
}: AppFormProps<TValues>) {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TValues>({
        resolver: zodResolver(schema as any),
        defaultValues,
    });

    const { handleSubmit, reset } = form;

    const sizeClass = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
    }[size];

    function submit(values: TValues) {
        startTransition(async () => {
            await onSubmit(values, form);
        });
    }

    const authForm = new AuthForm({
        formProps: {
            title,
            submitText,
            fields,
            form,
            isPending,
        }
    });

    return (
        <>{ui.type === "card" ?
            (
                <Card className={cn("w-full p-6 md:p-8 shadow-lg rounded-2xl flex flex-col gap-6", sizeClass, className)}>
                    <CardHeader className="p-0!">
                        {authForm.title}
                    </CardHeader>

                    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
                        {authForm.fields}

                        <CardFooter className={authForm.footer.className}>
                            {authForm.footer.buttons}
                        </CardFooter>
                    </form>
                </Card>
            ) : (
                <Dialog>
                    <DialogTrigger
                        className={className}
                        render={
                            <ButtonImpl
                                text={ui.triggerText}
                                icon={ui.triggerIcon}
                                variant={ui.triggerVariant}
                                {...ui.triggerProps}
                            />
                        }
                    />

                    <DialogContent className={cn("shadow-2xl", sizeClass)}>
                        <DialogHeader>
                            <DialogTitle>
                                {authForm.title}
                            </DialogTitle>
                        </DialogHeader>

                        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
                            {authForm.fields}

                            <DialogFooter className={authForm.footer.className}>
                                <DialogClose
                                    onClick={() => reset()}
                                    render={
                                        <ButtonImpl
                                            variant="outline"
                                            text={"Cancel"}
                                            height="md"
                                        />
                                    }
                                />

                                {authForm.footer.buttons}
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )
        }</>
    );
}