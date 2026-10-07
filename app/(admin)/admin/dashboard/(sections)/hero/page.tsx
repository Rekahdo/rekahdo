'use client'

import { createHeroAction } from "@/app/actions/hero";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { heroSchema } from "@/schemas/zod-schemas";
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
        resolver: zodResolver(heroSchema),
        defaultValues: {
            badge: "developer that help your business grow",
            greetings: "Hi there",
            introduction: "I'M",
            name: "RICHARD",
            headline: "",
            role: "Full Stack Web Engineer",
            description:
                "Welcome to my portfolio! I specialize in crafting fast, responsive, and engaging user interfaces using React, TypeScript, and modern web technologies. I build scalable web applications focused on performance, clean code, and great user experience",
            availableForWork: false,
            image: {
                src: "/images/me/richard.svg",
                alt: "richard okafor",
            },
            tags: [
                { title: "Clean-Code" },
                { title: "Object Oriented" },
                { title: "Component Based" },
            ],
        },
    })

    function submit(data: z.infer<typeof heroSchema>) {
        startTransition(async () => {
            await createHeroAction(data);
            toast.success("Hero Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="Hero"
                subtitle="Update your hero section content shown at the top of your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="badge" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Badge</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="greetings" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Greetings</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="introduction" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Introduction</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

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
                            name="headline" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Headline</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="role" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Role</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="description" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Description</FieldLabel>
                                    <textarea
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                        className="min-h-24 w-full rounded-md border px-3 py-2 text-sm"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="availableForWork" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Available For Work</FieldLabel>
                                    <Input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="image.src" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Source</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="image.alt" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Alt</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${0}.title`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 1 Title</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${0}.emoji`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 1 Emoji</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${1}.title`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 2 Title</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${1}.emoji`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 2 Emoji</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${2}.title`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 3 Title</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name={`tags.${2}.emoji`} control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Tag 3    Emoji</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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