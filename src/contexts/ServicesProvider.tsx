import { useEffect, useState } from "react";
import { servicesData } from "../data/services";
import { ContextProvider } from "./ContextProvider";
import type { ContextChildrenType, ServicesType } from "../utils/type";

export const ServicesContext = new ContextProvider<ServicesType>()

export const ServicesProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<ServicesType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): ServicesType{
        setData(_ => servicesData)
        return servicesData;
    }

    return (
        ServicesContext.create({children}, data, fetchData)
    );
};
