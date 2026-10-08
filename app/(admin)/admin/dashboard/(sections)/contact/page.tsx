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

export interface PageProps {

}

export default function Page(props: PageProps) {

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "okaforrichard76@gmail.com",
            phone: "2349059405621",
            github: "https://github.com/rekahdo",
            linkedIn: "https://www.linkedin.com/in/rekahdo",
            x: "https://x.com/real_rekahdo",
            instagram: "",
        }
    })

    function submit(data: z.infer<typeof contactSchema>) {
        startTransition(async () => {
            await createContactAction(data);
            toast.success("Contact Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="Contact"
                subtitle="Update your contact links so visitors can reach you."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="email" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input type="email" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="phone" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input type="tel" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="github" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>GitHub</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="linkedIn" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>LinkedIn</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="x" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>X (Twitter)</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="instagram" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Instagram</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl type="submit" text="Submit" isPending={isPending} className="md:col-span-2" />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}