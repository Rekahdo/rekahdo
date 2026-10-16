'use client'

import { createFooterAction } from "@/app/actions/footer";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { footerData } from "@/data/footer";
import { footerSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

export default function Page(props: PageProps) {
    const data = use(footerData);

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<z.infer<typeof footerSchema>>({
        resolver: zodResolver(footerSchema),
        defaultValues: data,
    })

    function submit(data: z.infer<typeof footerSchema>) {
        startTransition(async () => {
            await createFooterAction(data);
            toast.success("Footer Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-lg">
            <H1 title="Footer"
                subtitle="Update the footer content shown at the bottom of your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-4">
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