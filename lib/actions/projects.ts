'use server'

import { projectSchema } from "@/schemas/zod-schemas";
import z from "zod";

export async function createProjectAction(data: z.infer<typeof projectSchema>) {

}