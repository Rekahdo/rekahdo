import { useEffect, useState } from "react";
import { techStacksData } from "../data/tech-stack";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";
import type { TechStackType } from "../sections/stack/StackSection";

export const TechStackContext = new ContextProvider<TechStackType>()

export const TechStackProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<TechStackType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): TechStackType{
        setData(_ => techStacksData)
        return techStacksData;
    }

    return (
        TechStackContext.create({children}, data, fetchData)
    );
};
