"use server";

import { heroSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getToken } from "../../lib/auth-server";
import { notAuthenticated, somethingWentWrong } from "@/convex/errors";
import { uploadFile } from "./file";

export async function saveHeroAction({
  values,
  postUrl,
}: {
  values: z.infer<typeof heroSchema>;
  postUrl: string;
}) {
  const parsed = heroSchema.safeParse(values);
  if (!parsed.success) throw somethingWentWrong();

  const token = await getToken();
  if (!token) throw notAuthenticated();

  const image = async () => {
    if (parsed.data.image) {
      const light = parsed.data.image.src;
      const dark = parsed.data.image.srcDark;

      const { storageId: src } = await uploadFile({ file: light, postUrl });
      const { storageId: srcDark } = dark
        ? await uploadFile({ file: dark, postUrl })
        : undefined;

      return { ...parsed.data.image, src, srcDark };
    }

    return undefined;
  };

  const data = { ...parsed.data, image: await image() };

  await fetchMutation(api.hero.save, { ...data }, { token });
}
