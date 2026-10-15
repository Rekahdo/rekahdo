import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { sendMessageTable } from "./schema";

export const insert = mutation({
    args: { ...sendMessageTable },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.insert("sendMessage", { ...args });
    },
});

export const getAll = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("sendMessage").order("desc").collect();
    },
});