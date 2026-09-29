import z from "zod";

export const ContactSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.email(),
})