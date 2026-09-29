import { useEffect, useState } from "react";

export function useWidthMedia() {
  const queries = {
    xs: "(max-width: 638px)",
    maxSm: "(max-width: 639px)",
    sm: "(min-width: 639px)",
    maxMd: "(max-width: 767px)",
    md: "(min-width: 767px)",
    maxMlg: "(max-width: 900px)",
    mlg: "(min-width: 900px)",
    maxLg: "(max-width: 1023px)",
    lg: "(min-width: 1023px)",
  };

  const checkWidth = (query: string) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState({
    xs: checkWidth(queries.xs),
    maxSm: checkWidth(queries.maxSm),
    sm: checkWidth(queries.sm),
    maxMd: checkWidth(queries.maxMd),
    md: checkWidth(queries.md),
    maxMlg: checkWidth(queries.maxMlg),
    mlg: checkWidth(queries.mlg),
    maxLg: checkWidth(queries.maxLg),
    lg: checkWidth(queries.lg),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaList = Object.entries(queries).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const handleChange = () => {
      setMatches({
        xs: mediaList.find((item) => item.key === "xs")!.mql.matches,
        maxSm: mediaList.find((item) => item.key === "maxSm")!.mql.matches,
        sm: mediaList.find((item) => item.key === "sm")!.mql.matches,
        maxMd: mediaList.find((item) => item.key === "maxMd")!.mql.matches,
        md: mediaList.find((item) => item.key === "md")!.mql.matches,
        maxMlg: mediaList.find((item) => item.key === "maxMlg")!.mql.matches,
        mlg: mediaList.find((item) => item.key === "mlg")!.mql.matches,
        maxLg: mediaList.find((item) => item.key === "maxLg")!.mql.matches,
        lg: mediaList.find((item) => item.key === "lg")!.mql.matches,
      });
    };

    mediaList.forEach(({ mql }) => mql.addEventListener("change", handleChange));

    return () => {
      mediaList.forEach(({ mql }) => mql.removeEventListener("change", handleChange));
    };
  }, []);

  return matches;
}