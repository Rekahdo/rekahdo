'use server'

import { aboutSchema, stackSchema } from "@/schemas/zod-schemas";
import z from "zod";

export async function createAboutAction(data: z.infer<typeof aboutSchema>) {

}