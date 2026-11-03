"use server";

import { headerSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateFormData } from "./about";
import z from "zod";

export async function saveHeaderAction({
    values,
    postUrl,
  }: {
    values: z.infer<typeof headerSchema>;
    postUrl: string;
  }) {
  const { parsed, token } = await validateFormData(headerSchema, values);

  await fetchMutation(api.header.save, { ...parsed }, { token });
}
