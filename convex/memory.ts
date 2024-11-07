import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const store = mutation({
  args: {
    vector: v.array(v.number()),
    type: v.string(),
    metadata: v.any(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("memories", {
      vector: args.vector,
      type: args.type,
      metadata: args.metadata,
      timestamp: Date.now(),
    });
    return id;
  },
});

export const retrieve = query({
  args: {
    type: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let q = ctx.db.query("memories");
    if (args.type) {
      q = q.filter((q) => q.eq(q.field("type"), args.type));
    }
    if (args.limit) {
      q = q.take(args.limit);
    }
    return await q.collect();
  },
});