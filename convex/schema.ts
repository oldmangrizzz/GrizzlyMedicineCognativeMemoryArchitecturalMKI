import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  memories: defineTable({
    vector: v.array(v.number()),
    type: v.string(),
    layer: v.number(),
    timestamp: v.number(),
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
  }),
  patterns: defineTable({
    type: v.string(),
    vector: v.array(v.number()),
    strength: v.number(),
    connections: v.array(v.string()),
    lastAccessed: v.number(),
  }),
  cognitiveState: defineTable({
    timestamp: v.number(),
    currentPattern: v.string(),
    emotionalState: v.string(),
    activeMemories: v.array(v.string()),
    contextVector: v.array(v.number()),
  }),
});