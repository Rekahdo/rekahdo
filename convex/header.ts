import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";
import { headerTable } from "./schema";
import { notAuthenticated } from "./errors";
import { GenericMutationCtx, GenericQueryCtx } from "convex/server";
import { DataModel } from "./_generated/dataModel";

export const authenticateUser = async (
  ctx: GenericMutationCtx<DataModel> | GenericQueryCtx<DataModel>,
) => {
  const user = await authComponent.safeGetAuthUser(ctx);
  if (!user) throw notAuthenticated();
  return user;
};

export const save = mutation({
  args: { ...headerTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);

    const header = await ctx.db.query("header").first();

    if (header === null)
      return await ctx.db.insert("header", { ...args });

    return await ctx.db.patch('header', header._id, { ...args })
  },
});

export const get = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("header").first();
  },
});