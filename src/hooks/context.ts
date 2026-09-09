import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderProvider";
import { Provider, type ContextValueType } from "../contexts/ContextProvider";
import type { HeaderType } from "../sections/header/HeaderType";
import type { HeroType } from "../sections/hero/HeroType";
import { HeroContext } from "../contexts/HeroProvider";

export const useHeader = (): ContextValueType<HeaderType> => {
  const context = useContext(HeaderContext);

  if (!context) 
    throw new Error("useHeader must be used within HeaderProvider");

  return context;
};

export const useHero = (): ContextValueType<HeroType> => {
  return HeroContext.context(Provider.HERO);
};