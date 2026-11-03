import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const imageValidator = v.object({
  src: v.id("_storage"),
  srcDark: v.optional(v.id("_storage")),
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

export const fileTable = {
  name: v.string(),
  type: v.union(
    v.literal("cv"),
    v.literal("hero"),
    v.literal("about"),
    v.literal("logo"),
    v.literal("stack"),
    v.literal("project"),
    v.literal("icon"),
  ),
  storageId: v.id("_storage"),
};

export const fileValidator = v.object(fileTable);

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
        logo: imageValidator,
      }),
    ),
  ),
  skillTags: v.optional(v.array(tagValidator)),
};

export const aboutValidator = v.object(aboutTable);

export const stackTable = {
  name: v.string(),
  icon: imageValidator,
  doc: v.string(),
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
  display: v.boolean(),
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
  file: defineTable({
    ...fileTable,
  }).index("by_type", ["type"]),

  role: defineTable({
    ...roleTable,
  }).index("by_userId", ["userId"]),

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
  }).index("by_type", ["type"]),

  project: defineTable({
    ...projectTable,
  })
    .index("by_display", ["display"])
    .index("by_status", ["status"]),

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
