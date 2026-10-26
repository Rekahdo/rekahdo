import z from "zod";

const imageValidator = z.object({
  src: z.string(),
  srcDark: z.optional(z.string()),
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
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().nonempty(),
});

export const roleSchema = z.object({
  userId: z.string(),
  role: z.enum(["admin", "editor"]),
});

export const documentSchema = z.object({
  href: z.string(),
  name: z.string().nonempty().max(50),
  type: z.enum(["cv"]),
});

export const headerSchema = z.object({
  
});

export const heroSchema = z.object({
  badge: z.optional(z.string()),
  greetings: z.optional(z.string()),
  introduction: z.optional(z.string()),
  headline: z.optional(z.string()),
  description: z.string(),
  availableForWork: z.boolean(),
  image: z.optional(imageValidator),
  tags: z.optional(z.array(tagValidator)),
});

export const aboutSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  role: z.string(),
  stack: z.string(),
  headline: z.optional(z.string()),
  bio: z.optional(z.string()),
  profile: z.optional(imageValidator),
  experiences: z.optional(
    z.array(
      z.object({
        years: z.number(),
        title: z.enum(["backend", "frontend"]),
      }),
    ),
  ),
  quote: z.optional(
    z.object({
      text: z.string(),
    }),
  ),
  educations: z.optional(
    z.array(
      z.object({
        institution: z.string(),
        course: z.string(),
        certification: z.string(),
        website: z.string(),
        logo: z.string(),
      }),
    ),
  ),
  skillTags: z.optional(z.array(tagValidator)),
});

export const stackSchema = z.object({
  name: z.string(),
  icon: imageValidator,
  percentage: z.number(),
  description: z.string(),
  usages: z.array(tagValidator),
  type: z.enum(["language", "tool", "resource"]),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: imageValidator,
  github: z.string(),
  deployment: z.optional(z.string()),
  technologies: z.array(tagValidator),
  status: z.enum(["development", "deployed", "maintenance"]),
});

export const contactSchema = z.object({
  email: z.email(),
  phone: z.string(),
  location: z.string(),
  facebook: z.string(),
  whatsapp: z.string(),
  github: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  tiktok: z.string(),
  x: z.string(),
});

export const sendMessageSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  subject: z.string().min(2),
  message: z.string().nonempty(),
});

export const footerSchema = z.object({
  copyright: z.optional(z.string()),
});
