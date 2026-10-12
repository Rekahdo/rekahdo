'use server'

import { projectSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateZodData } from "./about";

export async function createProjectAction(data: z.infer<typeof projectSchema>) {

    const { parsed, token } = await validateZodData(projectSchema, data)

    await fetchMutation(
        api.project.insert,
        { ...parsed },
        { token }
    )
}

export async function createProjectsAction(data: z.infer<typeof projectSchema>[]) {
    const parsed = z.array(projectSchema).parse(data);
    return await fetchMutation(api.project.insertMany, { projects: parsed });
}