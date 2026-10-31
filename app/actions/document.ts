"use server";

import { documentSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateFormData } from "./about";
import z from "zod";

export async function saveDocumentAction(data: z.infer<typeof documentSchema>) {
  const { parsed, token } = await validateFormData(documentSchema, data);

  await fetchMutation(api.document.save, { ...parsed }, { token });
}
