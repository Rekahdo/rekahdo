import { GenericMutationCtx } from "convex/server";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";
import { heroTable } from "./schema";
import { DataModel } from "./_generated/dataModel";
import { notAuthenticated } from "./errors";

export const authenticateUser = async (ctx: GenericMutationCtx<DataModel>) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) throw notAuthenticated();
    return user;
};

export const save = mutation({
  args: { ...heroTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx)

    const hero = await ctx.db.query("hero").first();

    if (hero === null)
      return await ctx.db.insert("hero", { ...args });

    return await ctx.db.patch('hero', hero._id, { ...args })
  },
});

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("hero").first();
  },
});