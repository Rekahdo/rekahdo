'use client'

import { fileSchema, heroSchema } from "@/schemas/zod-schemas";
import EditPen from "../shared-ui/edit-pen";
import z from "zod";
import { saveFileAction } from "@/app/actions/file";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { saveHeroAction } from "@/app/actions/hero";

export function HeaderEditForm() {
    const data = useQuery(api.file.findByType, { type: "cv" });
    const generateUploadUrl = useMutation(api.file.generateUploadUrl);

    if (data === undefined) return null;

    async function submit(values: z.infer<typeof fileSchema>) {
        const postUrl = await generateUploadUrl()
        await saveFileAction({ values, postUrl });
        toast.success("Cv Uploaded Successfully");
    }

    return (
        <EditPen
            title="Header"
            size="sm"
            submitText="Update"
            schema={fileSchema}
            defaultValues={{
                type: data?.type,
                name: data?.name,
            }}
            fields={[
                {
                    name: "file",
                    label: "File",
                    type: "file",
                    accept: "application/pdf,image/png,image/jpeg",
                },
                {
                    name: "name",
                    label: "Name",
                    placeholder: "Curriculum Vitae",
                },
                {
                    name: "type",
                    label: "Type",
                },
            ]}
            onSubmit={submit}
        />
    );
}

export function HeroEditForm() {
    const data = useQuery(api.hero.get);
    const generateUploadUrl = useMutation(api.file.generateUploadUrl);

    if (data === undefined) return null;

    async function submit(values: z.infer<typeof heroSchema>) {
        const postUrl = await generateUploadUrl()
        await saveHeroAction({ values, postUrl });
        toast.success("Hero Saved Successfully");
    }

    return (
        <EditPen
            title="Hero"
            size="sm"
            submitText="Update"
            schema={heroSchema}
            defaultValues={{
                badge: data?.badge,
                greetings: data?.greetings,
                introduction: data?.introduction,
                headline: data?.headline,
                description: data?.description ?? "",
                availableForWork: data?.availableForWork ?? false,
                image: undefined,
                tags: data?.tags,
            }}
            fields={[
                {
                    name: "badge",
                    label: "Badge",
                    placeholder: "Available for work",
                },
                {
                    name: "greetings",
                    label: "Greetings",
                    placeholder: "Hello, I'm",
                },
                {
                    name: "introduction",
                    label: "Introduction",
                    placeholder: "John Doe",
                },
                {
                    name: "headline",
                    label: "Headline",
                    placeholder: "Full Stack Developer",
                },
                {
                    name: "description",
                    label: "Description",
                    type: "textarea",
                },
                {
                    name: "availableForWork",
                    label: "Available for work",
                    type: "checkbox",
                },
                {
                    name: "image",
                    label: "Image",
                    type: "image",
                    accept: "image/png,image/jpeg,image/svg+xml",
                },
                {
                    name: "tags",
                    label: "Tags",
                    type: "tags",
                },
            ]}
            onSubmit={submit}
        />
    );
}