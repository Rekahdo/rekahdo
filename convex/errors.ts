import { ConvexError } from "convex/values";

export const notAuthenticated = () =>
  new ConvexError({
    code: "NOT_AUTHENTICATED",
    message: "Not authenticated",
  });

export const notAuthorized = () =>
  new ConvexError({
    code: "NOT_AUTHORIZED",
    message: "Not authorized",
  });

export const somethingWentWrong = () =>
  new Error(    "Something went wrong");