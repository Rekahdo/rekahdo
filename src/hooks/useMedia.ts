import { useEffect, useState } from "react";

export function useWidthMedia() {
  const queries = {
    xs: "(max-width: 638px)",
    belowSm: "(max-width: 639px)",
    sm: "(min-width: 639px)",
    belowMd: "(max-width: 767px)",
    md: "(min-width: 767px)",
    belowLg: "(max-width: 1023px)",
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
    belowSm: checkWidth(queries.belowSm),
    sm: checkWidth(queries.sm),
    belowMd: checkWidth(queries.belowMd),
    md: checkWidth(queries.md),
    belowLg: checkWidth(queries.belowLg),
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
        belowSm: mediaList.find((item) => item.key === "belowSm")!.mql.matches,
        sm: mediaList.find((item) => item.key === "sm")!.mql.matches,
        belowMd: mediaList.find((item) => item.key === "belowMd")!.mql.matches,
        md: mediaList.find((item) => item.key === "md")!.mql.matches,
        belowLg: mediaList.find((item) => item.key === "belowLg")!.mql.matches,
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