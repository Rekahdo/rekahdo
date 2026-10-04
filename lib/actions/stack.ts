'use server'

import { stackSchema } from "@/schemas/zod-schemas";
import z from "zod";

export async function createStackAction(data: z.infer<typeof stackSchema>) {

}