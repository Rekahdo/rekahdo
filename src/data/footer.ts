type FooterSocialLink = {
  platform: string;
  url: string;
  hidden: boolean;
}

type FooterQuickLink = {
  name: string;
  path: string;
  hidden: boolean;
}

type FooterType = {
  hidden: boolean;
  copyrightText: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
}

export const footerData: FooterType = {
  hidden: false,
  copyrightText: "© 2026 Richard Okafor (Rekahdo). All rights reserved.",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/username", hidden: false },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username", hidden: false }
  ],
  quickLinks: [
    { name: "Home", path: "#home", hidden: false },
    { name: "About", path: "#about", hidden: false },
    { name: "Tech-Stack", path: "#tech-stack", hidden: false },
    { name: "Projects", path: "#projects", hidden: false },
    { name: "Contact", path: "#contact", hidden: false }
  ]
}