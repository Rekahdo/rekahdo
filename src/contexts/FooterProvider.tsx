import { useEffect, useState } from "react";
import { footerData } from "../data/footer";
import { ContextProvider  } from "./ContextProvider";
import type { ContextChildrenType, FooterType } from "../utils/type";

export const FooterContext = new ContextProvider<FooterType>()

export const FooterProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<FooterType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): FooterType{
        setData(_ => footerData)
        return footerData;
    }

    return (
        FooterContext.create({children}, data, fetchData)
    );
};
