import { useEffect, useState } from "react";
import type { HeroType } from "../sections/hero/HeroType";
import { heroData } from "../data/hero";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const HeroContext = new ContextProvider<HeroType>()

export const HeroProvider = ( {children}: ContextChildrenType) => {

    const [data, setData] = useState<HeroType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeroType{
        setData(_ => heroData)
        return heroData;
    }

    return (
        HeroContext.create({children}, data, fetchData)
    );
};