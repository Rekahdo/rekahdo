export type FooterData = {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedIn: string;
    x: string;
    instagram: string;
    copyright: string;
};

export const footerData: Promise<FooterData> = Promise.resolve({
    name: "Richard Okafor",
    tagline: "Frontend Engineer | Full-Stack Perspective",
    email: "okaforrichard76@gmail.com",
    phone: "+234 905 940 5621",
    location: "Lagos, Nigeria",
    github: "https://github.com/Rekahdo",
    linkedIn: "https://www.linkedin.com/in/richard-okafor",
    x: "https://x.com/rekahdo",
    instagram: "https://instagram.com/rekahdo",
    copyright: `© ${new Date().getFullYear()} Richard Okafor. All rights reserved. Built with passion`,
});