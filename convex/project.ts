import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { projectTable } from "./schema";

export const insertMany = mutation({
    args: { projects: v.array(v.object(projectTable)) },
    handler: async (ctx, args) => {

        const existing = await ctx.db.query("project").collect();
        await Promise.all(existing.map((row) => ctx.db.delete(row._id)));

        const ids = await Promise.all(
            args.projects.map((project) => ctx.db.insert("project", project))
        );
        
        return ids;
    },
});

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