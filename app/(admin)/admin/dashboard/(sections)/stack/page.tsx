'use client'

import { createStacksAction } from "@/app/actions/stack";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { stacksData } from "@/data/stack";
import { stackSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useTransition } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps { }

type StackItem = z.infer<typeof stackSchema>;

const emptyStack: StackItem = {
    name: "",
    iconSrc: "",
    iconDarkSrc: undefined,
    percentage: 0,
    description: "",
    usages: [],
    type: "language",
};

const multiStackSchema = z.object({
    stacks: z.array(stackSchema),
});

type MultiStackForm = z.infer<typeof multiStackSchema>;

export default function Page(props: PageProps) {
    const data = use(stacksData);

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<MultiStackForm>({
        resolver: zodResolver(multiStackSchema),
        defaultValues: {
            stacks: data,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "stacks",
    });

    function submit(data: MultiStackForm) {
        startTransition(async () => {
            await createStacksAction(data.stacks);
            toast.success("Stack Uploaded Successfully");
        });
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1
                title="Tech Stack"
                subtitle="Manage all your stack entries in one place."
                className="text-center items-center"
            />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">
                                Stack Items ({fields.length})
                            </h2>
                            <button
                                type="button"
                                onClick={() => append({ ...emptyStack })}
                                className="text-sm underline"
                            >
                                + Add Stack
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="rounded-md border p-4 grid md:grid-cols-2 gap-4"
                            >
                                <div className="md:col-span-2 flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        {field.name || `Item ${index + 1}`}
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
                                    name={`stacks.${index}.name`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Name</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.type`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Type</FieldLabel>
                                            <select
                                                aria-invalid={fieldState.invalid}
                                                {...field}
                                                className="h-9 w-full rounded-md border px-3 text-sm"
                                            >
                                                <option value="language">Language</option>
                                                <option value="tool">Tool</option>
                                                <option value="resource">Resource</option>
                                            </select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.iconSrc`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Icon Source</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.iconDarkSrc`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Icon Dark Source (optional)</FieldLabel>
                                            <Input
                                                type="text"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value ?? ""}
                                                onChange={(e) =>
                                                    field.onChange(e.target.value || undefined)
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
                                    name={`stacks.${index}.percentage`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Percentage</FieldLabel>
                                            <Input
                                                type="number"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.description`}
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
                                    name={`stacks.${index}.usages`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field className="md:col-span-2">
                                            <FieldLabel>Usages (comma separated)</FieldLabel>
                                            <Input
                                                type="text"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value.map((u) => u.title).join(", ")}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        e.target.value
                                                            .split(",")
                                                            .map((title) => ({ title: title.trim() }))
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