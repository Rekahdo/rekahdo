import { mutation } from "./_generated/server";
import { authComponent } from "./auth";
import { headerTable } from "./schema";
import { notAuthenticated } from "./errors";

export const createHeader = mutation({
  args: { ...headerTable },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) throw notAuthenticated();

    const id = await ctx.db.insert("header", { ...args });
    return id;
  },
});