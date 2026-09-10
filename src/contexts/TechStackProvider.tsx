import { useEffect, useState } from "react";
import type { TechStack } from "../data/tech-stack";
import { techStacksData } from "../data/tech-stack";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const TechStackContext = new ContextProvider<TechStack[]>()

export const TechStackProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<TechStack[]>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): TechStack[]{
        setData(_ => techStacksData)
        return techStacksData;
    }

    return (
        TechStackContext.create({children}, data, fetchData)
    );
};
