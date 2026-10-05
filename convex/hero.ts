import { mutation } from "./_generated/server";
import { authComponent } from "./auth";
import { heroTable } from "./schema";
import { notAuthenticated } from "./errors";

export const createHero = mutation({
  args: { ...heroTable },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) throw notAuthenticated();

    const id = await ctx.db.insert("hero", { ...args });
    return id;
  },
});