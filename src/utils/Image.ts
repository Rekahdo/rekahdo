import { ImageType } from './enum';
import type { ImageFileType } from './type';

export const getImageUrl = (name: string, type: ImageFileType) => {
  return new URL(`../images/${type}/${name}`, import.meta.url).href;
};