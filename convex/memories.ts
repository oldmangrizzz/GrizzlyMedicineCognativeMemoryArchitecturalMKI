import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const store = mutation({
  args: {
    vector: v.array(v.number()),
    type: v.string(),
    layer: v.number(),
    context: v.string(),
    confidence: v.number(),
    associations: v.array(v.string()),
    metadata: v.object({
      dimensions: v.optional(v.object({
        spatial: v.optional(v.array(v.number())),
        temporal: v.optional(v.number()),
      })),
      cognitivePattern: v.string(),
      emotionalContext: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("memories", {
      ...args,
      timestamp: Date.now(),
    });
  },
});

export const retrieve = query({
  args: {
    vector: v.array(v.number()),
    type: v.optional(v.string()),
    limit: v.number(),
  },
  handler: async (ctx, args) => {
    const memories = await ctx.db
      .query("memories")
      .filter((q) => args.type ? q.eq(q.field("type"), args.type) : q)
      .collect();
    
    // Sort by vector similarity (simplified for now)
    return memories
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, args.limit);
  },
});