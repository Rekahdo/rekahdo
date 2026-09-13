export function windowTheme(): MediaQueryList {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

export function themeIsDark(): boolean {
  if (localStorage.dark !== undefined) return localStorage.dark === "true";
  return windowTheme().matches;
}

export const rootDocument: HTMLElement = document.documentElement;