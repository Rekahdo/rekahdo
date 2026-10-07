'use server'

import z from "zod";
import { validateZodData } from "./about";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { footerSchema } from "@/schemas/zod-schemas";

export async function createFooterAction(data: z.infer<typeof footerSchema>) {

    const { parsed, token } = await validateZodData(footerSchema, data)

    await fetchMutation(
        api.footer.save,
        { ...parsed },
        { token }
    )
}