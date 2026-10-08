'use client'

import { createFooterAction } from "@/app/actions/footer";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { footerSchema } from "@/schemas/zod-schemas";
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
        resolver: zodResolver(footerSchema),
        defaultValues: {
            name: "Richard Okafor",
            tagline: "Frontend Engineer | Full-Stack Perspective",
            email: "okaforrichard76@gmail.com",
            phone: "+234 905 940 5621",
            location: "Lagos, Nigeria",
            github: "https://github.com/Rekahdo",
            linkedIn: "https://www.linkedin.com/in/richard-okafor",
            x: "https://x.com/rekahdo",
            instagram: "https://instagram.com/rekahdo",
            copyright: `© ${new Date().getFullYear()} Richard Okafor. All rights reserved. Built with passion`,
        },
    })

    function submit(data: z.infer<typeof footerSchema>) {
        startTransition(async () => {
            await createFooterAction(data);
            toast.success("Footer Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="Footer"
                subtitle="Update the footer content shown at the bottom of your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="name" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="tagline" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tagline</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

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
                            name="location" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Location</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
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

                        <Controller
                            name="copyright" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Copyright</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl type="submit" text="Submit" isPending={isPending} />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}