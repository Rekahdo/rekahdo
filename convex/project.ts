import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { projectTable } from "./schema";

export const insert = mutation({
    args: { ...projectTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.insert("project", { ...args });
    },
});

export const update = mutation({
    args: { id: v.id("project"), ...projectTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.patch('project', args.id, { ...args })
    },
});

export const findAll = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("project").order("desc").collect();
    },
});