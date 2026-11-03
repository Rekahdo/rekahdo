"use server";

import { projectSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateFormData } from "./about";
import { Id } from "@/convex/_generated/dataModel";

export async function createProjectAction({
  projectId,
  values,
  postUrl,
}: {
  projectId: Id<"project">;
  values: z.infer<typeof projectSchema>;
  postUrl: string;
}) {
  const { parsed, token } = await validateFormData(projectSchema, values);

  await fetchMutation(api.project.update, { id: projectId, ...parsed }, { token });
}

export async function createProjectsAction(
  data: z.infer<typeof projectSchema>[],
) {
  const parsed = z.array(projectSchema).parse(data);
  return await fetchMutation(api.project.insertMany, { projects: parsed });
}
