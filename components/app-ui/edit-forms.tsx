'use client'

import { documentSchema } from "@/schemas/zod-schemas";
import EditPen from "../shared-ui/edit-pen";
import z from "zod";
import { saveDocumentAction } from "@/app/actions/document";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export function HeaderEditForm() {
    const data = useQuery(api.document.findByType, { type: "cv" });
    const generateUploadUrl = useMutation(api.document.generateUploadUrl);

    if (data === undefined) return null;

    async function submit(values: z.infer<typeof documentSchema>) {
        const postUrl = await generateUploadUrl()
        await saveDocumentAction({ values, postUrl });
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
                    placeholder: "My CV",
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