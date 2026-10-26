'use client'

import { createProjectsAction } from "@/app/actions/project";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { projectsData } from "@/data/project";
import { projectSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useTransition } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

type ProjectItem = z.infer<typeof projectSchema>;

const multiProjectSchema = z.object({
    projects: z.array(projectSchema),
});

type MultiProjectForm = z.infer<typeof multiProjectSchema>;

const emptyProject: ProjectItem = {
    title: "",
    description: "",
    image: { src: "", alt: "" },
    github: "",
    deployment: undefined,
    technologies: [],
    status: "development",
};

export default function Page(props: PageProps) {
    const data = use(projectsData);

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<MultiProjectForm>({
        resolver: zodResolver(multiProjectSchema),
        defaultValues: {
            projects: data,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "projects",
    });

    function submit(data: MultiProjectForm) {
        startTransition(async () => {
            await createProjectsAction(data.projects);
            toast.success("Projects Uploaded Successfully");
        });
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1
                title="Projects"
                subtitle="Manage all your portfolio projects in one place."
                titleClassName="text-center items-center"
            />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">
                                Projects ({fields.length})
                            </h2>
                            <button
                                type="button"
                                onClick={() => append({ ...emptyProject })}
                                className="text-sm underline"
                            >
                                + Add Project
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="rounded-md border p-4 grid md:grid-cols-2 gap-4"
                            >
                                <div className="md:col-span-2 flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        {field.title || `Project ${index + 1}`}
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
                                    name={`projects.${index}.title`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field className="md:col-span-2">
                                            <FieldLabel>Title</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`projects.${index}.description`}
                                    control={control}
                                    render={({ field, fieldState }) => (
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
                                    name={`projects.${index}.image.src`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Image Source</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`projects.${index}.image.alt`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Image Alt</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`projects.${index}.github`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>GitHub</FieldLabel>
                                            <Input type="url" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`projects.${index}.deployment`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Deployment (optional)</FieldLabel>
                                            <Input
                                                type="url"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value ?? ""}
                                                onChange={(e) => field.onChange(e.target.value || undefined)}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`projects.${index}.technologies`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field className="md:col-span-2">
                                            <FieldLabel>Technologies (comma separated)</FieldLabel>
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
                                    name={`projects.${index}.status`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Status</FieldLabel>
                                            <select
                                                aria-invalid={fieldState.invalid}
                                                {...field}
                                                className="h-9 w-full rounded-md border px-3 text-sm"
                                            >
                                                <option value="development">Development</option>
                                                <option value="deployed">Deployed</option>
                                                <option value="maintenance">Maintenance</option>
                                            </select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                            </div>
                        ))}

                        <ButtonImpl
                            type="submit"
                            text="Submit All"
                            isPending={isPending}
                        />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}