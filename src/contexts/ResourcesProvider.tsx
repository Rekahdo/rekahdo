import { useEffect, useState } from "react";
import { resourcesData } from "../data/resources";
import { ContextProvider } from "./ContextProvider";
import type { ContextChildrenType, ResourcesType } from "../utils/type";

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
