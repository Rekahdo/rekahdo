'use server'

import z from "zod";
import { validateZodData } from "./about";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { ADMIN_DASHBOARD } from "@/lib/routes";
import { redirect, RedirectType } from "next/navigation";
import { stackSchema } from "@/schemas/zod-schemas";

export async function createStackAction(data: z.infer<typeof stackSchema>) {

    const { parsed, token } = await validateZodData(stackSchema, data)

    await fetchMutation(
        api.stack.createStack,
        { ...parsed },
        { token }
    )

    redirect(ADMIN_DASHBOARD, RedirectType.push)

}