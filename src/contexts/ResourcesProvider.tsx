import { useEffect, useState } from "react";
import type { ResourcesType } from "../data/resources";
import { resourcesData } from "../data/resources";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const ResourcesContext = new ContextProvider<ResourcesType>()

export const ResourcesProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<ResourcesType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): ResourcesType{
        setData(_ => resourcesData)
        return resourcesData;
    }

    return (
        ResourcesContext.create({children}, data, fetchData)
    );
};
