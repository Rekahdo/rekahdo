import type { ErrorPageData } from '../utils/type';

export const errorPages: Record<number, ErrorPageData> = {
  400: {
    statusCode: 400,
    message: "Bad Request",
    description: "The request you made is invalid. Please check your input and try again."
  },
  401: {
    statusCode: 401,
    message: "Unauthorized",
    description: "You need to log in to access this page. Please authenticate and try again."
  },
  403: {
    statusCode: 403,
    message: "Access Forbidden",
    description: "You do not have permission to access this resource."
  },
  404: {
    statusCode: 404,
    message: "Page Not Found",
    description: "The page you are looking for might have been removed or is temporarily unavailable."
  },
  500: {
    statusCode: 500,
    message: "Internal Server Error",
    description: "Something went wrong on our end. Our team has been notified. Please try again later."
  },
  503: {
    statusCode: 503,
    message: "Service Unavailable",
    description: "The service is temporarily unavailable. We're working on it. Please try again soon."
  }
}

export const getErrorPage = (statusCode: number): ErrorPageData => {
  return errorPages[statusCode] || {
    statusCode,
    message: "Error",
    description: "An unexpected error occurred. Please try again later."
  }
}
