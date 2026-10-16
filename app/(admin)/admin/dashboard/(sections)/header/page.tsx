'use client'

import { createHeaderAction } from "@/app/actions/header";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
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

    const { handleSubmit, control } = useForm<z.infer<typeof headerSchema>>({
        resolver: zodResolver(headerSchema),
        defaultValues: {},
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
                subtitle="Update the header content shown at the top of your portfolio."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-4">
                        <ButtonImpl type="submit" text="Submit" isPending={isPending} />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}