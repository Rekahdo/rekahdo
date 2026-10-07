'use server'

import { heroSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getToken } from "../../lib/auth-server";
import { notAuthenticated, somethingWentWrong } from "@/convex/errors";

export async function createHeroAction(data: z.infer<typeof heroSchema>) {
    const parsed = heroSchema.safeParse(data);
    if (!parsed.success) throw somethingWentWrong();

    const token = await getToken();
    if (!token) throw notAuthenticated();

    await fetchMutation(
        api.hero.createHero,
        { ...parsed.data },
        { token }
    )
}