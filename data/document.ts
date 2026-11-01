export type DocumentType = "cv";

export type DocumentData = Record<
  DocumentType,
  { name: string; type: DocumentType; file: string }
>;

export const documentData: Promise<DocumentData> = Promise.resolve({
  cv: {
    name: "Richard_Okafor_CV.pdf",
    type: "cv",
    file: "/docs/CV - Okafor Richard.pdf",
  },
});
