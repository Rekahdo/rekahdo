import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const imageValidator = v.object({
  src: v.string(),
  srcDark: v.optional(v.string()),
  alt: v.string(),
});

export const tagValidator = v.object({
  title: v.string(),
  emoji: v.optional(v.string()),
});

export const socialLinkValidator = v.object({
  platform: v.string(),
  url: v.string(),
  icon: v.string(),
});

export const roleTable = {
  userId: v.string(),
  role: v.union(v.literal("admin"), v.literal("editor")),
};

export const roleValidator = v.object(roleTable);

export const documentTable = {
  href: v.string(),
  name: v.string(),
  type: v.union(v.literal("cv")),
};

export const documentValidator = v.object(documentTable);

export const headerTable = {};

export const headerValidator = v.object(headerTable);

export const heroTable = {
  badge: v.optional(v.string()),
  greetings: v.optional(v.string()),
  introduction: v.optional(v.string()),
  headline: v.optional(v.string()),
  description: v.string(),
  availableForWork: v.boolean(),
  image: v.optional(imageValidator),
  tags: v.optional(v.array(tagValidator)),
};

export const heroValidator = v.object(heroTable);

export const aboutTable = {
  firstname: v.string(),
  lastname: v.string(),
  role: v.string(),
  stack: v.string(),
  headline: v.optional(v.string()),
  bio: v.optional(v.string()),
  profile: v.optional(imageValidator),
  experiences: v.optional(
    v.array(
      v.object({
        years: v.number(),
        title: v.union(v.literal("backend"), v.literal("frontend")),
      }),
    ),
  ),
  quote: v.optional(
    v.object({
      text: v.string(),
    }),
  ),
  educations: v.optional(
    v.array(
      v.object({
        institution: v.string(),
        course: v.string(),
        certification: v.string(),
        website: v.string(),
        logo: v.string(),
      }),
    ),
  ),
  skillTags: v.optional(v.array(tagValidator)),
};

export const aboutValidator = v.object(aboutTable);

export const stackTable = {
  name: v.string(),
  icon: imageValidator,
  percentage: v.number(),
  description: v.string(),
  usages: v.array(tagValidator),
  type: v.union(
    v.literal("language"),
    v.literal("tool"),
    v.literal("resource"),
  ),
};

export const stackValidator = v.object(stackTable);

export const projectTable = {
  title: v.string(),
  description: v.string(),
  image: imageValidator,
  github: v.string(),
  deployment: v.optional(v.string()),
  technologies: v.array(tagValidator),
  status: v.union(
    v.literal("development"),
    v.literal("deployed"),
    v.literal("maintenance"),
  ),
};

export const projectValidator = v.object(projectTable);

export const contactTable = {
  email: v.string(),
  phone: v.string(),
  location: v.string(),
  facebook: v.string(),
  whatsapp: v.string(),
  github: v.string(),
  linkedin: v.string(),
  instagram: v.string(),
  tiktok: v.string(),
  x: v.string(),
};

export const contactValidator = v.object(contactTable);

export const sendMessageTable = {
  name: v.string(),
  email: v.string(),
  subject: v.string(),
  message: v.string(),
};

export const sendMessageValidator = v.object(sendMessageTable);

export const footerTable = {
  copyright: v.optional(v.string()),
};

export const footerValidator = v.object(footerTable);

export default defineSchema({
  document: defineTable({
    ...documentTable,
  }).index("by_type", ["type"]),

  role: defineTable({
    ...roleTable,
  }),

  header: defineTable({
    ...headerTable,
  }),

  hero: defineTable({
    ...heroTable,
  }),

  about: defineTable({
    ...aboutTable,
  }),

  stack: defineTable({
    ...stackTable,
  }),

  project: defineTable({
    ...projectTable,
  }),

  contact: defineTable({
    ...contactTable,
  }),

  sendMessage: defineTable({
    ...sendMessageTable,
  }),

  footer: defineTable({
    ...footerTable,
  }),
});
