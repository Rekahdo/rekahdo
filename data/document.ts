import { documentValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type DocumentType = "cv";
export type DocumentData = Record<DocumentType, Infer<typeof documentValidator>>;

export const documentData: Promise<DocumentData> = Promise.resolve({
  cv: {
    name: "Richard_Okafor_CV.pdf",
    href: "/docs/CV - Okafor Richard.pdf",
    type: "cv",
  },
});
