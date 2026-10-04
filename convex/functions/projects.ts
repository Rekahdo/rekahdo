import { mutation } from "../_generated/server";
import { projectTable } from "../schema";

export const createProjects = mutation({
    args: {
        ...projectTable
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("projects", { ...args });
        return id;
    },
});