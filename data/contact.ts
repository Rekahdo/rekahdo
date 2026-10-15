import { contactTable, contactValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const contactData: Promise<Infer<typeof contactValidator>> = Promise.resolve({
    email: "javadevrekahdo@gmail.com",
    phone: "2349059405621",
    location: "Lagos, Nigeria",
    github: "https://github.com/rekahdo",
    linkedin: "https://www.linkedin.com/in/rekahdo",
    x: "https://x.com/real_rekahdo",
});