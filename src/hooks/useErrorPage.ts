import { getErrorPage, type ErrorPageData } from "../data/error-pages";

export const useErrorPage = (statusCode: number): ErrorPageData => {
  return getErrorPage(statusCode);
};
