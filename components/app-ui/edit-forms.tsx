'use client'

import { documentSchema, heroSchema } from "@/schemas/zod-schemas";
import EditPen from "../shared-ui/edit-pen";
import z from "zod";
import { UseFormReturn } from "react-hook-form";
import { use } from "react";
import { heroData } from "@/data/hero";
import { saveDocumentAction } from "@/app/actions/document";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export function HeaderEditForm() {
    const data = useQuery(api.document.findByType, { type: "cv" });

    if (data === undefined) return null;

    async function submit(data: z.infer<typeof documentSchema>) {
        await saveDocumentAction(data);
        toast.success("Cv Uploaded Successfully");
    }

    return (
        <EditPen
            title="Header"
            size="sm"
            submitText="Update"
            schema={documentSchema}
            defaultValues={{
                type: data?.type,
                name: data?.name,
                href: data?.href,
            }}
            fields={[
                {
                    name: "href",
                    label: "File",
                    type: "file",
                },
                {
                    name: "type",
                    label: "Type",
                },
                {
                    name: "name",
                    label: "File Name",
                },
            ]}
            onSubmit={submit}
        />
    );
}


export function HeroEditForm() {
    const data = use(heroData);

    async function submit(parsed: z.infer<typeof heroSchema>,
        form: UseFormReturn<z.infer<typeof heroSchema>>) {
    }

    return (
        <EditPen
            title="Header"
            size="sm"
            submitText="Update"
            schema={heroSchema}
            defaultValues={data}
            fields={[
                {
                    name: "greetings",
                    label: "Greetings",
                    placeholder: "Hello or Hi There",
                },
                {
                    name: "introduction",
                    label: "Introduction",
                    placeholder: "I'm or My name is",
                },
                {
                    name: "description",
                    label: "Description",
                    placeholder: "I am a full stack developer with many years of building",
                },
                {
                    name: "availableForWork",
                    label: "Available For Work",
                    placeholder: "React, TypeScript, Node",
                },
            ]}
            onSubmit={submit}
        />
    );
}