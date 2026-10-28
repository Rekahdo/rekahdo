'use client'

import { createAboutAction } from "@/app/actions/about";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { aboutData } from "@/data/about";
import { aboutSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

export default function Page(props: PageProps) {
    const data = use(aboutData);

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<z.infer<typeof aboutSchema>>({
        resolver: zodResolver(aboutSchema),
        defaultValues: data,
    })

    function submit(data: z.infer<typeof aboutSchema>) {
        startTransition(async () => {
            await createAboutAction(data);
            toast.success("About Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="About"
                subtitle="Update your about section content."
                titleClassName="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="firstname" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>First Name</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="lastname" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Last Name</FieldLabel>
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
                            name="stack" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Stack</FieldLabel>
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
                            name="bio" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Bio</FieldLabel>
                                    <textarea
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                        className="min-h-32 w-full rounded-md border px-3 py-2 text-sm"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="profile.src" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Source</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="profile.alt" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Alt</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="quote.text" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Quote</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="experiences" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Experiences</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={field.value?.map((e) => `${e.years}:${e.title}`).join(", ") ?? ""}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((pair) => pair.split(":"))
                                                    .filter(([y, t]) => y && t)
                                                    .map(([years, title]) => ({
                                                        years: Number(years),
                                                        title: title.trim() as "backend" | "frontend",
                                                    }))
                                            )
                                        }
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="educations" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Educations</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={
                                            field.value
                                                ?.map((ed) => `${ed.institution}|${ed.course}|${ed.certification}|${ed.website}|${ed.logo}`)
                                                .join(", ") ?? ""
                                        }
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((entry) => entry.split("|"))
                                                    .filter((parts) => parts.length === 5)
                                                    .map(([institution, course, certification, website, logo]) => ({
                                                        institution: institution.trim(),
                                                        course: course.trim(),
                                                        certification: certification.trim(),
                                                        website: website.trim(),
                                                        logo: logo.trim(),
                                                    }))
                                            )
                                        }
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="skillTags" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Skill Tags</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={field.value?.map((t) => `${t.title}:${t.emoji}`).join(", ") ?? ""}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((pair) => pair.split(":"))
                                                    .filter(([t, em]) => t && em)
                                                    .map(([title, emoji]) => ({
                                                        title: title.trim(),
                                                        emoji: emoji.trim(),
                                                    }))
                                            )
                                        }
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl
                            type="submit"
                            content="Submit"
                            isPending={isPending}
                            className="md:col-span-2"
                        />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}