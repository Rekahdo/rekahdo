'use server'

import z from "zod";
import { validateZodData } from "./about";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { redirect, RedirectType } from "next/navigation";
import { stackSchema } from "@/schemas/zod-schemas";
import { ADMIN_DASHBOARD } from "../(admin)/admin/auth/page";

export async function createStackAction(data: z.infer<typeof stackSchema>) {

    const { parsed, token } = await validateZodData(stackSchema, data)

    await fetchMutation(
        api.stack.createStack,
        { ...parsed },
        { token }
    )
}