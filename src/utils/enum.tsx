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

export const ImageType = {
  ICON: 'icons',
  LOGO: 'logos',
  ME: 'me',
} as const;
