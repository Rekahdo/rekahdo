'use server'

import z from "zod";
import { validateZodData } from "./about";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { stackSchema } from "@/schemas/zod-schemas";

export async function createStackAction(data: z.infer<typeof stackSchema>) {

    const { parsed, token } = await validateZodData(stackSchema, data)

    await fetchMutation(
        api.stack.insert,
        { ...parsed },
        { token }
    )
}

export async function createStacksAction(data: z.infer<typeof stackSchema>[]) {
    const parsed = z.array(stackSchema).parse(data);
    return await fetchMutation(api.stack.insertMany, { stacks: parsed });
}