"use server";

import { api } from "@/convex/_generated/api";
import { aboutSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import z, { ZodObject, ZodRawShape } from "zod";
import { notAuthenticated, somethingWentWrong } from "@/convex/errors";
import { getToken } from "@/lib/auth-server";

type ActionType<D> = {
  parsed: D;
  token: string;
};

export async function validateFormData<S extends ZodObject<ZodRawShape>>(
  schema: S,
  data: z.infer<S>,
): Promise<ActionType<z.infer<S>>> {
  const parsed = schema.safeParse(data);
  if (!parsed.success) throw somethingWentWrong();

  const token = await getToken();
  if (!token) throw notAuthenticated();

  return { parsed: parsed.data, token };
}

export async function saveAboutAction({
    values,
    postUrl,
  }: {
    values: z.infer<typeof aboutSchema>;
    postUrl: string;
  }) {
  const { parsed, token } = await validateFormData(aboutSchema, values);

  await fetchMutation(api.about.save, { ...parsed }, { token });
}
