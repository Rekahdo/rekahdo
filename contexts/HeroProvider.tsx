'use client'

import { useEffect, useState } from "react";
import { heroData } from "../data/hero";
import { ContextProvider, ContextValueType, Provider, type ContextChildrenType } from "./ContextProvider";
import type { HeroProps } from "../components/sections/hero-section";

export const HeroContext = new ContextProvider<HeroProps>()

export const HeroProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<HeroProps>()

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeroProps {
        setData(heroData)
        return heroData;
    }

    return (
        HeroContext.create({ children }, data, fetchData)
    );
};

export const useHero = (): ContextValueType<HeroProps> => {
    return HeroContext.context(Provider.HERO);
};