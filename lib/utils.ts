export { cn } from "cn";

export function windowTheme(): MediaQueryList | null {
  if (typeof window === "undefined") return null;
  return window.matchMedia("(prefers-color-scheme: dark)");
}

export function themeIsDark(): boolean {
  if (typeof window === "undefined") return false;

  const root = getRootDocument();
  if (root?.classList.contains("dark")) {
    return true;
  }

  const storedTheme =
    localStorage.getItem("theme") ?? localStorage.getItem("dark");
  if (storedTheme !== null) {
    return storedTheme === "dark" || storedTheme === "true";
  }

  return windowTheme()?.matches ?? false;
}

export function getRootDocument(): HTMLElement | null {
  if (typeof window === "undefined") return null;
  return document.documentElement;
}

export const MimeTypes = {
  PDF: "application/pdf",
  PNG: "image/png",
  JPEG: "image/jpeg",
  SVG: "image/svg+xml",
} as const;