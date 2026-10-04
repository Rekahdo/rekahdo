'use client'

import { useEffect, useState } from "react";

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
} as const;

type Matches = Record<keyof typeof queries, boolean>;

const empty: Matches = {
  xs: false, maxSm: false, sm: false,
  maxMd: false, md: false,
  maxMlg: false, mlg: false,
  maxLg: false, lg: false,
};

export function useWidthMedia() {
  const [matches, setMatches] = useState<Matches>(empty);

  useEffect(() => {
    const mediaList = Object.entries(queries).map(([key, query]) => ({
      key: key as keyof typeof queries,
      mql: window.matchMedia(query),
    }));

    const handleChange = () => {
      const next = { ...empty };
      for (const { key, mql } of mediaList) next[key] = mql.matches;
      setMatches(next);
    };

    handleChange();

    mediaList.forEach(({ mql }) => mql.addEventListener("change", handleChange));
    return () => {
      mediaList.forEach(({ mql }) => mql.removeEventListener("change", handleChange));
    };
  }, []);

  return matches;
}