import { documentTable } from "./schema";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";

export const save = mutation({
    args: { ...documentTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)

        const document = await ctx.db
            .query("document")
            .withIndex("by_type", (q) => q.eq("type", args.type))
            .first();

        if (document === null)
            return await ctx.db.insert("document", { ...args });

        return await ctx.db.patch('document', document._id, { ...args })
    },
});

export const findAll = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("document").order("desc").collect();
    },
});

export const findByType = query({
    args: { type: documentTable.type },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("document")
            .withIndex("by_type", (q) => q.eq("type", args.type))
            .first();
    },
});