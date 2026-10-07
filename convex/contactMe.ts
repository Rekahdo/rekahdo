import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { contactMeTable } from "./schema";

export const insert = mutation({
    args: { ...contactMeTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.insert("contactMe", { ...args });
    },
});

export const getAll = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("contactMe").order("desc").collect();
    },
});