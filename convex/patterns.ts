import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    type: v.string(),
    vector: v.array(v.number()),
    strength: v.number(),
    connections: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("patterns", {
      ...args,
      lastAccessed: Date.now(),
    });
  },
});

export const getActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("patterns")
      .order("desc")
      .take(10);
  },
});