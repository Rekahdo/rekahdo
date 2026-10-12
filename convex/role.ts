import { mutation } from "./_generated/server";
import { roleTable } from "./schema";

export const createRole = mutation({
  args: { ...roleTable },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("role", { ...args });
    return id;
  },
});