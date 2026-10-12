import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { stackTable } from "./schema";

export const insertMany = mutation({
    args: { stacks: v.array(v.object(stackTable)) },
    handler: async (ctx, args) => {
        // await authenticateUser(ctx);

        const existing = await ctx.db.query("stack").collect();
        await Promise.all(existing.map((row) => ctx.db.delete(row._id)));

        const ids = await Promise.all(
            args.stacks.map((stack) => ctx.db.insert("stack", stack))
        );
        
        return ids;
    },
});

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
    handler: async (ctx, _) => {
        return (await ctx.db.query("stack").collect())
            .sort((dis, dat) => dat.percentage - dis.percentage);
    },
});