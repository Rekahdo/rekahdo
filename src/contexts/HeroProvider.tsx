import { useEffect, useState } from "react";
import { heroData } from "../data/hero";
import { ContextProvider } from "./ContextProvider";
import type { ContextChildrenType, HeroType } from "../utils/type";

export const HeroContext = new ContextProvider<HeroType>()

export const HeroProvider = ({children}: ContextChildrenType) => {

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