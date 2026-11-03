"use server";

import { fileSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateFormData } from "./header";
import z from "zod";

export async function uploadFile({
  file,
  postUrl,
}: {
  file: File;
  postUrl: string;
}) {
  const result = await fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!result.ok) {
    throw new Error("Upload failed");
  }

  return await result.json();
}

export async function saveFileAction({
  values,
  postUrl,
}: {
  values: z.infer<typeof fileSchema>;
  postUrl: string;
}) {
  const { parsed, token } = await validateFormData(fileSchema, values);

  if (parsed.file instanceof File) {
    const { storageId } = await uploadFile({file: parsed.file, postUrl});

    await fetchMutation(
      api.file.saveByType,
      {
        name: parsed.name,
        type: parsed.type,
        storageId,
      },
      { token },
    );
  } else {
    throw new Error("Please select a file");
  }
}
