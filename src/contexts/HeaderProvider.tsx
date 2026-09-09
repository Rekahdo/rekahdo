import { createContext, useEffect, useState } from "react";
import { headerData } from "../data/header";
import type { HeaderType } from "../sections/header/HeaderType";
import { type ContextChildrenType, type ContextValueType } from "./ContextProvider";

export const HeaderContext = createContext<ContextValueType<HeaderType>>(null);

export const HeaderProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<HeaderType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeaderType{
        setData(_ => headerData)
        return headerData;
    }

    return (
        <HeaderContext.Provider value={{data, reload: fetchData}}>
            {children}
        </HeaderContext.Provider>
    );
};