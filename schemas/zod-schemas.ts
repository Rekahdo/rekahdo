import z from "zod";

const imageValidator = z.object({
    src: z.string(),
    alt: z.string(),
});

const tagValidator = z.object({
    title: z.string(),
    emoji: z.string(),
});

const stackValidator = z.object({
    name: z.string(),
    iconSrc: z.string(),
    iconDarkSrc: z.optional(z.string()),
    percentage: z.number(),
    description: z.string(),
    usages: z.array(z.string()),
})

export const heroSchema = z.object({
    badge: z.optional(z.string()),
    greetings: z.optional(z.string()),
    introduction: z.optional(z.string()),
    name: z.optional(z.string()),
    headline: z.optional(z.string()),
    role: z.string(),
    description: z.string(),
    availableForWork: z.boolean(),
    image: z.optional(imageValidator),
    tags: z.optional(z.array(tagValidator)),
})

export const aboutSchema = z.object({
    headline: z.optional(z.string()),
    bio: z.optional(z.string()),
    me: z.optional(imageValidator),
    experiences: z.optional(z.array(z.object({
        years: z.number(),
        title: z.enum(["backend", "frontend"]),
    }))),
    quote: z.optional(z.object({
        text: z.string(),
    })),
    educations: z.optional(z.array(z.object({
        institution: z.string(),
        course: z.string(),
        certification: z.string(),
        website: z.string(),
        logo: z.string(),
    }))),
    skillTags: z.optional(z.array(tagValidator)),
})

export const stackSchema = z.object({
    languages: z.optional(z.array(stackValidator)),
    tools: z.optional(z.array(stackValidator)),
    resources: z.optional(z.array(stackValidator)),
})

export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: imageValidator,
    github: z.string(),
    deployment: z.optional(z.string()),
    technologies: z.array(z.object({
        title: z.string(),
    })),
    status: z.enum(["development", "deployed", "maintainance"]),
})

export const contactSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.email(),
})