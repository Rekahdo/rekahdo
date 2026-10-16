import { contactValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type ContactData = Infer<typeof contactValidator>;

export const contactData: Promise<ContactData> = Promise.resolve({
  email: "javadevrekahdo@gmail.com",
  phone: "2349059405621",
  location: "Lagos, Nigeria",
  facebook: "https://facebook.com/rekahdo",
  whatsapp: "https://wa.me/2349059405621",
  github: "https://github.com/rekahdo",
  linkedin: "https://www.linkedin.com/in/rekahdo",
  instagram: "https://instagram.com/rekahdo",
  tiktok: "https://tiktok.com/@rekahdo",
  x: "https://x.com/real_rekahdo",
});
