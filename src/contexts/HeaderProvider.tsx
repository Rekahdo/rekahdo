import { createContext, useEffect, useState, type ReactNode } from "react";
import { headerData } from "../data/header";
import type { HeaderType } from "../sections/header/HeaderType";

type HeaderPropsType = {
    children: ReactNode
}

export type HeaderContextType = {
    data: HeaderType | undefined,
    reloadHeader: () => HeaderType
}

export const HeaderContext = createContext<HeaderContextType|null>(null);

export const HeaderProvider = ({ children }: HeaderPropsType) => {

    const [data, setData] = useState<HeaderType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeaderType{
        setData(_ => headerData)
        return headerData;
    }

    return (
        <HeaderContext.Provider value={{data, reloadHeader: fetchData}}>
            {children}
        </HeaderContext.Provider>
    );
};