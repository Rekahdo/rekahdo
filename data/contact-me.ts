export type ContactData = {
    email: string;
    phone: string;
    location: string;
    socialLinks: {
        platform: string;
        url: string;
        icon: string;
    }[];
};

export const contactMeData: Promise<ContactData> = Promise.resolve({
    email: "okaforrichard76@gmail.com",
    phone: "2349059405621",
    location: "Lagos, Nigeria",
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/rekahdo", icon: "github" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/rekahdo", icon: "linkedin" },
        { platform: "x", url: "https://x.com/real_rekahdo", icon: "x" },
    ],
});