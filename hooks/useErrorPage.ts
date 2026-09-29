import { getErrorPage } from "../data/error-pages";
import type { ErrorPageData } from "../lib/prop-types";

export const useErrorPage = (statusCode: number): ErrorPageData => {
  return getErrorPage(statusCode);
};
