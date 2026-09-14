import { Download, Send } from 'lucide-react';

export const Position = {
    LEFT: "Left",
    RIGHT: "Right",
} as const;

export const Icon = {
    DOWNLOAD: {
        btnId: 1,
        icon: <Download size={16} />,
        position: Position.LEFT,
    },
    SEND: {
        btnId: 4,
        icon: <Send size={16} />,
        position: Position.RIGHT,
    }
} as const;

export const Provider = {
    HERO: "Hero",
    HEADER: "Header",
    ABOUT: "About",
    CONTACT: "Contact",
    FOOTER: "Footer",
    GROWTH: "Growth",
    PROJECTS: "Projects",
    RESOURCES: "Resources",
    SERVICES: "Services",
    STACK_USAGE: "StackUsage",
    TECH_STACK: "TechStack",
} as const;

export const ImageType = {
  ICON: 'icons',
  LOGO: 'logos',
  ME: 'me',
} as const;
