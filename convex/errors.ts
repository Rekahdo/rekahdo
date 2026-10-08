import { ConvexError } from "convex/values";

export const notAuthenticated = () =>
  new ConvexError({
    code: "NOT_AUTHENTICATED",
    message: "Not authenticated",
  });

export const somethingWentWrong = () =>
  new Error(    "Something went wrong");