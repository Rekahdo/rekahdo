import { mutation, query } from "./_generated/server";
import { heroTable } from "./schema";
import { authenticateUser } from "./header";

export const save = mutation({
  args: { ...heroTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);

    const hero = await ctx.db.query("hero").first();

    if (hero === null) return await ctx.db.insert("hero", { ...args });

    await ctx.db.patch(hero._id, { ...args });
    return hero._id;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("hero").first();
    if (!data) return null;

    if (!data.image) return data;

    return {
      ...data,
      image: {
        ...data.image,
        src: (await ctx.storage.getUrl(data.image.src)) ?? undefined,
        srcDark: data.image.srcDark
          ? ((await ctx.storage.getUrl(data.image.srcDark)) ?? undefined)
          : undefined,
      },
    };
  },
});
