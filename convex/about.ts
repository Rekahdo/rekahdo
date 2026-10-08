import { mutation, query } from "./_generated/server";
import { aboutTable } from "./schema";
import { authenticateUser } from "./hero";

export const save = mutation({
    args: { ...aboutTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)

        const about = await ctx.db.query("about").first();

        if (about === null)
            return await ctx.db.insert("about", { ...args });

        return await ctx.db.patch('about', about._id, { ...args })
    },
});

export const get = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("about").first();
    },
});