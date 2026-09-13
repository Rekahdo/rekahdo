import { getErrorPage } from "../data/error-pages";
import type { ErrorPageData } from "../utils/type";

export const useErrorPage = (statusCode: number): ErrorPageData => {
  return getErrorPage(statusCode);
};
