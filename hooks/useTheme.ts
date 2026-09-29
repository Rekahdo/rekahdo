import { getRootDocument } from "@/lib/utils";

export type ThemeObserver = MutationObserver & {
  cleanup?: () => void;
};

function listenerToThemeChange(toggleOn: () => void, toggleOff: () => void): ThemeObserver | null {
  const root = getRootDocument();
  if (!root) return null;

  const sync = () => {
    const isDark = root.classList.contains("dark");
    if (isDark) {
      toggleOn();
    } else {
      toggleOff();
    }
  };

  // Immediately synchronize with current theme state upon listening
  sync();

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        sync();
      }
    } 
  }) as ThemeObserver;

  observer.observe(root, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const handlePageShow = () => sync();
  const handlePopState = () => sync();

  window.addEventListener("pageshow", handlePageShow);
  window.addEventListener("popstate", handlePopState);

  observer.cleanup = () => {
    window.removeEventListener("pageshow", handlePageShow);
    window.removeEventListener("popstate", handlePopState);
  };

  return observer;
}

function stopListeningToThemeChange(observer?: ThemeObserver | null) {
  if (observer) {
    observer.disconnect();
    observer.cleanup?.();
  }
}

export function useTheme(){
    return {listen: listenerToThemeChange, stop: stopListeningToThemeChange}
}