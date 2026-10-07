'use client'

import { createProjectAction } from "@/app/actions/project";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { projectSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

export default function Page(props: PageProps) {

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "Portfolio — Personal Developer Showcase",
            description:
                "A personal portfolio site with a fluid glassmorphism UI, custom gradient mesh animations, and dynamic project filtering — content is served and managed through Convex.",
            image: {
                src: "https://picsum.photos/seed/portfolio/800/450",
                alt: "Personal developer portfolio preview",
            },
            github: "https://github.com/Rekahdo/rekahdo",
            deployment: "https://rekahdo.vercel.app",
            technologies: [
                { title: "Next.js" },
                { title: "TypeScript" },
                { title: "Tailwind CSS" },
                { title: "Shadcn UI" },
                { title: "Base UI" },
                { title: "Convex" },
            ],
            status: "development",
        },
    })

    function submit(data: z.infer<typeof projectSchema>) {
        startTransition(async () => {
            await createProjectAction(data);
            toast.success("Project Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="Project"
                subtitle="Add or update a project in your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="title" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Title</FieldLabel>
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
                            name="github" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>GitHub</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="deployment" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Deployment (optional)</FieldLabel>
                                    <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="technologies" control={control} render={({ field, fieldState }) => (
                                <Field className="md:col-span-2">
                                    <FieldLabel>Technologies</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={field.value?.map((t) => t.title).join(", ") ?? ""}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((t) => ({ title: t.trim() }))
                                                    .filter((t) => t.title !== "")
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
                            name="status" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Status</FieldLabel>
                                    <select
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                        className="h-9 w-full rounded-md border px-3 text-sm"
                                    >
                                        <option value="development">Development</option>
                                        <option value="deployed">Deployed</option>
                                        <option value="maintainance">Maintenance</option>
                                    </select>
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