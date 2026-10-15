'use client'

import { createContactAction } from "@/app/actions/contact";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { contactSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type ContactForm = z.infer<typeof contactSchema>;

export default function Page() {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "okaforrichard76@gmail.com",
            phone: "2349059405621",
            location: "Lagos, Nigeria",
            github: "https://github.com/rekahdo",
            linkedin: "https://www.linkedin.com/in/rekahdo",
            x: "https://x.com/real_rekahdo",
        },
    });

    function submit(data: ContactForm) {
        startTransition(async () => {
            await createContactAction(data);
            toast.success("Contact Uploaded Successfully");
        });
    }

    return (
        <div className="flex max-w-6xl flex-col gap-6">
            <H1
                title="Contact"
                subtitle="Update your contact links so visitors can reach you."
                className="text-center items-center"
            />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input
                                        type="email"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input
                                        type="tel"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="location"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Location</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="github"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>GitHub URL</FieldLabel>
                                    <Input
                                        type="url"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="linkedin"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>LinkedIn URL</FieldLabel>
                                    <Input
                                        type="url"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="x"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>X URL</FieldLabel>
                                    <Input
                                        type="url"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <ButtonImpl
                            type="submit"
                            text="Submit"
                            isPending={isPending}
                            className="md:col-span-2"
                        />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}
