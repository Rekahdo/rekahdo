import { useEffect, useState } from "react";
import { heroData } from "../data/hero";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";
import type { HeroType } from "../sections/hero/HeroSection";

export const HeroContext = new ContextProvider<HeroType>()

export const HeroProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<HeroType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeroType{
        setData(heroData)
        return heroData;
    }

    return (
        HeroContext.create({children}, data, fetchData)
    );
};