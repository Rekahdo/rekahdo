export type HeaderData = {
    downloadCv: {
        name: string;
        href: string;
        type: "cv";
    };
};

export const headerData: Promise<HeaderData> = Promise.resolve({
    downloadCv: {
        name: "Richard_Okafor_CV.pdf",
        href: "/docs/Richard_Okafor_CV.pdf",
        type: "cv",
    },
});