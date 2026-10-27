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

export function currentDatetime(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  const datePart = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const timePart = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${datePart} · ${timePart}`;
}
