"use server";

import { headerSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateFormData } from "./about";
import z from "zod";

export async function createHeaderAction(data: z.infer<typeof headerSchema>) {
  const { parsed, token } = await validateFormData(headerSchema, data);

  await fetchMutation(api.header.save, { ...parsed }, { token });
}
