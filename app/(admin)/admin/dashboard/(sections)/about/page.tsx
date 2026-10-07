'use client'

import { createHeaderAction } from "@/app/actions/header";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { headerSchema } from "@/schemas/zod-schemas";
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
        resolver: zodResolver(headerSchema),
        defaultValues: {
            name: 'Richard_Okafor_CV.pdf',
            downloadCv: '/docs/Richard_Okafor_CV.pdf',
        }
    })

    function submit(data: z.infer<typeof headerSchema>) {
        startTransition(async () => {
            await createHeaderAction(data);
            toast.success("Cv Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-lg">
            <H1 title="Header"
                subtitle="Upload your CV so visitors can download it from your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-4">
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
                            name="downloadCv" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Download CV</FieldLabel>
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
