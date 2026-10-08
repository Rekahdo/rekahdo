import { mutation, query } from "./_generated/server";
import { contactTable } from "./schema";
import { authenticateUser } from "./hero";

export const save = mutation({
    args: { ...contactTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)

        const contact = await ctx.db.query("contact").first();

        if (contact === null)
            return await ctx.db.insert("contact", { ...args });

        return await ctx.db.patch('contact', contact._id, { ...args })
    },
});

export const get = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("contact").first();
    },
});