'use server'

import { sendMessageSchema, contactSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { validateZodData } from "./about";
import { somethingWentWrong } from "@/convex/errors";
import { Resend } from 'resend';
import SendMessage from "@/emails/send-message";
import { createElement } from "react";

export async function createContactAction(data: z.infer<typeof contactSchema>) {
    const { parsed, token } = await validateZodData(contactSchema, data)

    await fetchMutation(
        api.contact.save,
        { ...parsed },
        { token }
    )
}

export async function createSendMessageAction({ data, save = false, from }
    : { data: z.infer<typeof sendMessageSchema>, save?: boolean, from: string }) {

    const parsed = sendMessageSchema.safeParse(data);
    if (!parsed.success) throw somethingWentWrong();
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: from,
      subject: parsed.data.subject,
      react: createElement(SendMessage, {
        ...parsed.data,
        date: new Date().toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      }),
    });

    if (error) {
      console.error("Failed to send email via Resend: ", error);
      throw new Error(error.message);
    }

    if (save) {
        await fetchMutation(
            api.sendMessage.insert,
            { ...parsed.data },
        )
    }

    return { success: true, message: "Message Sent" };
}