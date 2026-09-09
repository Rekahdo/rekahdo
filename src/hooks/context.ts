import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderProvider";
import type { ContextValueType } from "../contexts/ContextProvider";
import type { HeaderType } from "../sections/header/HeaderType";
import type { HeroType } from "../sections/hero/HeroType";
import { HeroContext } from "../contexts/HeroProvider";

function returnContext<T>(
  reactContext: React.Context<ContextValueType<T>>,
  methodCall: string, provider: string,
): ContextValueType<T> {
  const context = useContext(reactContext);

  if (!context)
    throw new Error(
      `${methodCall} must be used within <${provider}>...</${provider}>`,
    );

  return context;
}

export const useHeader = (): ContextValueType<HeaderType> => {
  return returnContext<HeaderType>(HeaderContext, "useHeader", "HeaderProvider");
};

export const useHero = (): ContextValueType<HeroType> => {
  return returnContext<HeroType>(HeroContext.context(), "useHero", "HeroProvider");
};
