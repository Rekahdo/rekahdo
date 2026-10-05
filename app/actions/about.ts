'use server'

import { api } from "@/convex/_generated/api";
import { aboutSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import z, { ZodObject, ZodRawShape } from "zod";
import { redirect, RedirectType } from "next/navigation";
import { ADMIN_DASHBOARD } from "@/lib/routes";
import { notAuthenticated, somethingWentWrong } from "@/convex/errors";
import { getToken } from "@/lib/auth-server";

type ActionType<D> = {
    parsed: D;
    token: string;
};

export async function validateZodData<S extends ZodObject<ZodRawShape>>(
    schema: S, data: z.infer<S>,
): Promise<ActionType<z.infer<S>>> {

    const parsed = schema.safeParse(data);
    if (!parsed.success) throw somethingWentWrong();

    const token = await getToken();
    if (!token) throw notAuthenticated();

    return { parsed: parsed.data, token };
}

export async function createAboutAction(data: z.infer<typeof aboutSchema>) {

    const { parsed, token } = await validateZodData(aboutSchema, data)

    await fetchMutation(
        api.about.createAbout,
        { ...parsed },
        { token }
    )

    redirect(ADMIN_DASHBOARD, RedirectType.push)

}