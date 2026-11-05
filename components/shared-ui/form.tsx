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

export interface AppFormProps<TValues extends FieldValues> {
    title: string;
    submitText: string;
    fields: (Omit<AppFieldProps, "field" | "fieldState"> & { name: Path<TValues> })[];
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

    const { handleSubmit, reset, control } = form;

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

    const paddingStyle = "p-6! md:p-8!";
    const gapStyle = "gap-6! md:gap-8!";
    const footerStyle = cn(
        "bg-transparent! border-0! p-0! m-0! gap-4! flex! flex-col-reverse!",
        "rounded-b-xl! sm:flex-row! sm:justify-end!",
    );

    const Title = () => {
        return (<H2 title={title} />)
    }

    const Content = () => {
        return (
            <FieldGroup className={gapStyle}>
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
        )
    }

    const FooterButtons = () => {
        return (
            <>
                <ButtonImpl
                    variant={'destructive'}
                    isDisabled={isPending}
                    type="reset"
                    onClick={() => reset()}
                    text={"reset"}
                    height="md"
                />

                <ButtonImpl
                    isPending={isPending}
                    type="submit"
                    text={submitText}
                    height="md"
                />
            </>
        );
    }

    return (
        <>{ui.type === "card" ?
            (
                <Card className={cn("w-full shadow-lg rounded-2xl flex flex-col",
                    paddingStyle, gapStyle, sizeClass, className)}>
                    <CardHeader className="p-0!">
                        <Title />
                    </CardHeader>

                    <form onSubmit={handleSubmit(submit)} className={cn("flex flex-col", gapStyle)}>
                        <Content />

                        <CardFooter className={footerStyle}>
                            <FooterButtons />
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

                    <DialogContent className={cn("shadow-2xl p-0! max-sm:w-9/10", paddingStyle, sizeClass)}>
                        <DialogHeader className="p-0!">
                            <DialogTitle>
                                <Title />
                            </DialogTitle>
                        </DialogHeader>

                        <form onSubmit={handleSubmit(submit)} className={cn("flex flex-col", gapStyle)}>
                            <Content />

                            <DialogFooter className={cn(footerStyle)}>
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

                                <FooterButtons />
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )
        }</>
    );
}