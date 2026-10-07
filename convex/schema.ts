import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const imageValidator = v.object({
    src: v.string(),
    alt: v.string(),
});

export const tagValidator = v.object({
    title: v.string(),
    emoji: v.string(),
});

export const stackValidator = v.object({
    name: v.string(),
    iconSrc: v.string(),
    iconDarkSrc: v.optional(v.string()),
    percentage: v.number(),
    description: v.string(),
    usages: v.array(v.string()),
})

export const roleTable = {
    userId: v.string(),
    role: v.union(
        v.literal('admin'),
        v.literal('editor'),
    ),
}

export const headerTable = {
    downloadCv: v.string(),
    name: v.string(),
}

export const heroTable = {
    badge: v.optional(v.string()),
    greetings: v.optional(v.string()),
    introduction: v.optional(v.string()),
    name: v.optional(v.string()),
    headline: v.optional(v.string()),
    role: v.string(),
    description: v.string(),
    availableForWork: v.boolean(),
    image: v.optional(imageValidator),
    tags: v.optional(v.array(tagValidator)),
}

export const aboutTable = {
    headline: v.optional(v.string()),
    bio: v.optional(v.string()),
    me: v.optional(imageValidator),
    experiences: v.optional(v.array(v.object({
        years: v.number(),
        title: v.union(
            v.literal("backend"),
            v.literal("frontend"),
        ),
    }))),
    quote: v.optional(v.object({
        text: v.string(),
    })),
    educations: v.optional(v.array(v.object({
        institution: v.string(),
        course: v.string(),
        certification: v.string(),
        website: v.string(),
        logo: v.string(),
    }))),
    skillTags: v.optional(v.array(tagValidator)),
}
export const stackTable = {
    languages: v.optional(v.array(stackValidator)),
    tools: v.optional(v.array(stackValidator)),
    resources: v.optional(v.array(stackValidator)),
}
export const projectTable = {
    title: v.string(),
    description: v.string(),
    image: imageValidator,
    github: v.string(),
    deployment: v.optional(v.string()),
    technologies: v.array(v.object({
        title: v.string(),
    })),
    status: v.union(
        v.literal("development"),
        v.literal("deployed"),
        v.literal("maintainance"),
    ),
}

export default defineSchema({
    role: defineTable({
        ...roleTable
    }),

    header: defineTable({
        ...headerTable
    }),

    hero: defineTable({
        ...heroTable
    }),

    about: defineTable({
        ...aboutTable
    }),

    stacks: defineTable({
        ...stackTable
    }),

    projects: defineTable({
        ...projectTable
    }),
});