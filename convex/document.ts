import { documentTable } from "./schema";
import { mutation, query } from "./_generated/server";
import { authenticateUser } from "./hero";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const save = mutation({
  args: { ...documentTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);

    const document = await ctx.db
      .query("document")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .first();

    if (document === null) return await ctx.db.insert("document", { ...args });

    await ctx.storage.delete(document.storageId);
    return await ctx.db.patch("document", document._id, { ...args });
  },
});

export const findAll = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("document").order("desc").collect();
  },
});

export const findByType = query({
  args: { type: documentTable.type },
  handler: async (ctx, args) => {
    const cv = await ctx.db
      .query("document")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .first();

    return Promise.resolve({
      name: cv!.name,
      type: cv!.type,
      file: await ctx.storage.getUrl(cv!.storageId),
    });
  },
});

export const deleteByStorageId = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.delete(args.storageId);
  },
});