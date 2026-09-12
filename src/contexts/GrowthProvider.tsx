import { useEffect, useState } from "react";
import { growthData } from "../data/growth";
import { ContextProvider } from "./ContextProvider";
import type { ContextChildrenType, GrowthType } from "../utils/type";

export const GrowthContext = new ContextProvider<GrowthType>()

export const GrowthProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<GrowthType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): GrowthType{
        setData(_ => growthData)
        return growthData;
    }

    return (
        GrowthContext.create({children}, data, fetchData)
    );
};
