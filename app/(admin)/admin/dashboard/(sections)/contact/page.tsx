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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {}

type ContactForm = z.infer<typeof contactSchema>;

export default function Page(props: PageProps) {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "okaforrichard76@gmail.com",
            phone: "2349059405621",
            location: "Lagos, Nigeria",
            socialLinks: [
                { platform: "GitHub", url: "https://github.com/rekahdo", icon: "github" },
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/rekahdo", icon: "linkedin" },
                { platform: "x", url: "https://x.com/real_rekahdo", icon: "x" },
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "socialLinks",
    });

    function submit(data: ContactForm) {
        startTransition(async () => {
            await createContactAction(data);
            toast.success("Contact Uploaded Successfully");
        });
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1
                title="Contact"
                subtitle="Update your contact links so visitors can reach you."
                className="text-center items-center"
            />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input type="email" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input type="tel" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="location"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Location</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <div className="md:col-span-2 flex items-center justify-between">
                            <h2 className="text-lg font-medium">
                                Social Links ({fields.length})
                            </h2>
                            <button
                                type="button"
                                onClick={() =>
                                    append({ platform: "", url: "", icon: "" })
                                }
                                className="text-sm underline"
                            >
                                + Add Link
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="md:col-span-2 rounded-md border p-4 grid md:grid-cols-3 gap-4"
                            >
                                <div className="md:col-span-3 flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        {field.platform || `Link ${index + 1}`}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="text-sm text-red-500 underline"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <Controller
                                    name={`socialLinks.${index}.platform`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Platform</FieldLabel>
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
                                    name={`socialLinks.${index}.url`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>URL</FieldLabel>
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
                                    name={`socialLinks.${index}.icon`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Icon</FieldLabel>
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
                            </div>
                        ))}

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