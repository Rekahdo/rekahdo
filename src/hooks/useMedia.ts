import { useEffect, useState } from "react";

export function useWidthMedia() {
  const queries = {
    below: "(max-width: 638px)",
    small: "(min-width: 639px)",
    medium: "(min-width: 767px)",
    xMedium: "(min-width: 895px)",
    large: "(min-width: 1023px)",
    xLarge: "(min-width: 1279px)",
  };

  const checkWidth = (query: string) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState({
    below: checkWidth(queries.below),
    small: checkWidth(queries.small),
    medium: checkWidth(queries.medium),
    xMedium: checkWidth(queries.xMedium),
    large: checkWidth(queries.large),
    xLarge: checkWidth(queries.xLarge),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaList = Object.entries(queries).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const handleChange = () => {
      setMatches({
        below: mediaList.find((item) => item.key === "below")!.mql.matches,
        small: mediaList.find((item) => item.key === "small")!.mql.matches,
        medium: mediaList.find((item) => item.key === "medium")!.mql.matches,
        xMedium: mediaList.find((item) => item.key === "xMedium")!.mql.matches,
        large: mediaList.find((item) => item.key === "large")!.mql.matches,
        xLarge: mediaList.find((item) => item.key === "xLarge")!.mql.matches,
      });
    };

    mediaList.forEach(({ mql }) => mql.addEventListener("change", handleChange));

    return () => {
      mediaList.forEach(({ mql }) => mql.removeEventListener("change", handleChange));
    };
  }, []);

  return matches;
}