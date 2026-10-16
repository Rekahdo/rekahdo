import { footerValidator } from "@/convex/schema";
import { Infer } from "convex/values";



export const footerData: Promise<Infer<typeof footerValidator>> = Promise.resolve({
    copyright: `© ${new Date().getFullYear()} Richard Okafor. All rights reserved. Built with passion`,
});