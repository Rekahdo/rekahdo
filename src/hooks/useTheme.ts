import { rootDocument } from "../utils/utils";

function listenerToThemeChange(toggleOn: () => void, toggleOff: () => void): MutationObserver {
  const root = rootDocument;

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const isDark = root.classList.contains("dark");
        isDark ? toggleOn() : toggleOff();
      }
    } 
  });

  observer.observe(root, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return observer;
}

function stopListeningToThemeChange(observer: MutationObserver) {
  observer.disconnect();
}

export function useTheme(){
    return {listen: listenerToThemeChange, stop: stopListeningToThemeChange}
}