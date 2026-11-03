import { GenericMutationCtx, GenericQueryCtx } from "convex/server";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";
import { heroTable } from "./schema";
import { DataModel } from "./_generated/dataModel";
import { notAuthenticated } from "./errors";

export const authenticateUser = async (
  ctx: GenericMutationCtx<DataModel> | GenericQueryCtx<DataModel>,
) => {
  const user = await authComponent.safeGetAuthUser(ctx);
  if (!user) throw notAuthenticated();
  return user;
};

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
