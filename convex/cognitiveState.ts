import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const update = mutation({
  args: {
    currentPattern: v.string(),
    emotionalState: v.string(),
    activeMemories: v.array(v.string()),
    contextVector: v.array(v.number()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("cognitiveState", {
      ...args,
      timestamp: Date.now(),
    });
  },
});

export const getCurrent = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("cognitiveState")
      .order("desc")
      .first();
  },
});