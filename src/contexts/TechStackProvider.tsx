import { useEffect, useState } from "react";
import { techStacksData } from "../data/tech-stack";
import { ContextProvider } from "./ContextProvider";
import type { ContextChildrenType, TechStack } from "../utils/type";

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
