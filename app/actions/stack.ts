"use server";

import z from "zod";
import { validateFormData } from "./about";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { stackSchema } from "@/schemas/zod-schemas";
import { VId } from "convex/values";
import { Id } from "@/convex/_generated/dataModel";

export async function createStackAction({
  values,
  postUrl,
}: {
  values: z.infer<typeof stackSchema>;
  postUrl: string;
}) {
  const { parsed, token } = await validateFormData(stackSchema, values);

  await fetchMutation(api.stack.insert, { ...parsed }, { token });
}

export async function updateStackAction({
  stackId,
  values,
  postUrl,
}: {
  stackId: Id<"stack">;
  values: z.infer<typeof stackSchema>;
  postUrl: string;
}) {
  const { parsed, token } = await validateFormData(stackSchema, values);

  await fetchMutation(api.stack.update, { id: stackId, ...parsed }, { token });
}

export async function createStacksAction(data: z.infer<typeof stackSchema>[]) {
  const parsed = z.array(stackSchema).parse(data);
  return await fetchMutation(api.stack.insertMany, { stacks: parsed });
}
