import z from "zod";

const imageValidator = z.object({
    src: z.string(),
    alt: z.string(),
});

const tagValidator = z.object({
    title: z.string(),
    emoji: z.optional(z.string()),
});

const socialLinkValidator = z.object({
    platform: z.string(),
    url: z.string(),
    icon: z.string(),
});

export const signUpSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.email(),
    password: z.string().min(8).max(30),
    adminApiKey: z.string().nonempty(),
})

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().nonempty(),
})

export const documentSchema = z.object({
    href: z.string(),
    name: z.string().nonempty().max(50),
    type: z.enum(['cv'])
})

export const headerSchema = z.object({
    downloadCv: documentSchema,
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
    name: z.string(),
    iconSrc: z.string(),
    iconDarkSrc: z.optional(z.string()),
    percentage: z.number(),
    description: z.string(),
    usages: z.array(tagValidator),
    type: z.enum(["language", "tool", "resource"])
})

export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: imageValidator,
    github: z.string(),
    deployment: z.optional(z.string()),
    technologies: z.array(tagValidator),
    status: z.enum(["development", "deployed", "maintenance"]),
})

export const contactSchema = z.object({
    email: z.email(),
    phone: z.string(),
    location: z.string(),
    socialLinks: z.array(socialLinkValidator),
});

export const contactMeSchema = z.object({
    name: z.string(),
    email: z.email(),
    subject: z.string(),
    message: z.string(),
})

export const footerSchema = z.object({
    name: z.string().min(2).max(50),
    tagline: z.optional(z.string()),
    email: z.optional(z.email()),
    phone: z.optional(z.string()),
    location: z.optional(z.string()),
    github: z.optional(z.string()),
    linkedIn: z.optional(z.string()),
    x: z.optional(z.string()),
    instagram: z.optional(z.string()),
    copyright: z.optional(z.string()),
})