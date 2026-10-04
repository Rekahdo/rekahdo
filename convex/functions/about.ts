import { mutation } from "../_generated/server";
import { aboutTable } from "../schema";

export const createAbout = mutation({
    args: {
        ...aboutTable
    },
    handler: async (ctx, args) => {

        const id = await ctx.db.insert("about", { ...args });
        return id;
    },
});