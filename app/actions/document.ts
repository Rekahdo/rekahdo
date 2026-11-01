  "use server";

  import { documentSchema } from "@/schemas/zod-schemas";
  import { fetchMutation } from "convex/nextjs";
  import { api } from "@/convex/_generated/api";
  import { validateFormData } from "./about";
  import z from "zod";

  export async function saveDocumentAction({
    values,
    postUrl,
  }: {
    values: z.infer<typeof documentSchema>;
    postUrl: string;
  }) {
    const { parsed, token } = await validateFormData(documentSchema, values);

    if (parsed.file instanceof File) {
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": parsed.file.type },
        body: parsed.file,
      });

      if (!result.ok) {
        throw new Error("Upload failed");
      }

      const { storageId } = await result.json();

      await fetchMutation(
        api.document.save,
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
