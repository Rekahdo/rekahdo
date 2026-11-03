"use server";

import z from "zod";
import { validateFormData } from "./header";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { footerSchema } from "@/schemas/zod-schemas";

export async function saveFooterAction({
    values,
  }: {
    values: z.infer<typeof footerSchema>;
  }) {
  const { parsed, token } = await validateFormData(footerSchema, values);

  await fetchMutation(api.footer.save, { ...parsed }, { token });
}
