'use server'

import { heroSchema } from "@/schemas/zod-schemas";
import z from "zod";

export async function createHeroAction(data: z.infer<typeof heroSchema>) {

}