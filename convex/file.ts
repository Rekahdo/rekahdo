import { mutation } from "./_generated/server";
import { fileTable } from "./schema";
import { query } from "./_generated/server";
import { authenticateUser } from "./header";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveByType = mutation({
  args: { ...fileTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);

    const file = await ctx.db
      .query("file")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .first();

    if (file === null) return await ctx.db.insert("file", { ...args });

    await ctx.storage.delete(file.storageId);
    return await ctx.db.patch("file", file._id, { ...args });
  },
});

export const saveById = mutation({
  args: { id: v.id("file"), ...fileTable },
  handler: async (ctx, args) => {
    await authenticateUser(ctx);

    const file = await ctx.db
      .query("file")
      .filter((q) => q.eq(q.field("_id"), args.id))
      .first();

    if (file === null) return await ctx.db.insert("file", { ...args });

    await ctx.storage.delete(file.storageId);
    return await ctx.db.patch("file", file._id, { ...args });
  },
});

export const findAll = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("file").order("desc").collect();
  },
});

export const findByType = query({
  args: { type: fileTable.type },
  handler: async (ctx, args) => {
    const file = await ctx.db
      .query("file")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .first();

    if (file === null) return null;

    return {
      name: file.name,
      type: file.type,
      file: await ctx.storage.getUrl(file.storageId),
    };
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
