import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./header";
import { serviceTable } from "./schema";

export const insert = mutation({
  args: { ...serviceTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);
    return await ctx.db.insert("service", { ...args });
  },
});

export const update = mutation({
  args: { id: v.id("service"), ...serviceTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);
    return await ctx.db.patch("service", args.id, { ...args });
  },
});

export const findAll = query({
  args: {},
  handler: async (ctx, _) => {
    return await ctx.db.query("service").withIndex("by_order").collect();
  },
});
