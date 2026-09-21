import { useEffect, useState } from "react";
import { stackUsageData } from "../data/stack-usage";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";
import type { StackUsageType } from "../data/type";

export const StackUsageContext = new ContextProvider<StackUsageType>()

export const StackUsageProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<StackUsageType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): StackUsageType{
        setData(_ => stackUsageData)
        return stackUsageData;
    }

    return (
        StackUsageContext.create({children}, data, fetchData)
    );
};
