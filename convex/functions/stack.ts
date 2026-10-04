import { mutation } from "../_generated/server";
import { stackTable } from "../schema";

export const createStack = mutation({
    args: {
        ...stackTable
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("stacks", { ...args });
        return id;
    },
});