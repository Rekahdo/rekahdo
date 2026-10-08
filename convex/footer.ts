import { mutation, query } from "./_generated/server";
import { footerTable } from "./schema";
import { authenticateUser } from "./hero";

export const save = mutation({
    args: { ...footerTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)

        const footer = await ctx.db.query("footer").first();

        if (footer === null)
            return await ctx.db.insert("footer", { ...args });

        return await ctx.db.patch('footer', footer._id, { ...args })
    },
});

export const get = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("footer").first();
    },
});