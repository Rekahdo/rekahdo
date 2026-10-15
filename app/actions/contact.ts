'use server'

import { sendMessageSchema, contactSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateZodData } from "./about";
import { somethingWentWrong } from "@/convex/errors";

export async function createContactAction(data: z.infer<typeof contactSchema>) {
    const { parsed, token } = await validateZodData(contactSchema, data)

    await fetchMutation(
        api.contact.save,
        { ...parsed },
        { token }
    )
}

export async function createContactMeAction(data: z.infer<typeof sendMessageSchema>, save: boolean = false) {
    const parsed = sendMessageSchema.safeParse(data);
    if (!parsed.success) throw somethingWentWrong();

    if (save) {
        await fetchMutation(
            api.contactMe.insert,
            { ...parsed.data },
        )
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, message: "Message Sent" };
}