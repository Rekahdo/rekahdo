import { useEffect, useState } from "react";
import type { ServicesType } from "../data/services";
import { servicesData } from "../data/services";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

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
