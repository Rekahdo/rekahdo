import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { stackTable } from "./schema";

export const insert = mutation({
    args: { ...stackTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.insert("stack", { ...args });
    },
});

export const update = mutation({
    args: { id: v.id("stack"), ...stackTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.patch('stack', args.id, { ...args })
    },
});

export const findAll = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("stack").order("desc").collect();
    },
});