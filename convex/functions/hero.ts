import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { heroTable } from "../schema";

export const createHero = mutation({
    args: {
        ...heroTable
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("hero", { ...args });
        return id;
    },
});