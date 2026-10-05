import { GenericMutationCtx } from "convex/server";
import { mutation } from "./_generated/server";
import { aboutTable } from "./schema";
import { DataModel } from "./_generated/dataModel";
import { authComponent } from "./auth";
import { notAuthenticated } from "./errors";

export const authenticateUser = async (ctx: GenericMutationCtx<DataModel>) => {
  const user = await authComponent.safeGetAuthUser(ctx);
  if (!user) throw notAuthenticated();
  return user;
};

export const createAbout = mutation({
    args: {
        ...aboutTable
    },
    handler: async (ctx, args) => {
        await authenticateUser(ctx)
        return await ctx.db.insert("about", { ...args });
    },
});