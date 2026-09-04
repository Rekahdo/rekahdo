export const ImageType = {
  ICON: 'icons',
  LOGO: 'logos',
  ME: 'me',
} as const;

export type ImageType = typeof ImageType[keyof typeof ImageType];

export const getImageUrl = (name: string, type: ImageType) => {
  return new URL(`../images/${type}/${name}`, import.meta.url).href;
};