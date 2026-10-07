import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";
import { headerTable } from "./schema";
import { notAuthenticated } from "./errors";

export const save = mutation({
  args: { ...headerTable },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) throw notAuthenticated();

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