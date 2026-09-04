import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Header } from "../sections/header/HeaderInterface";
import { headerData } from "../data/header";

export const HeaderContext = createContext<null>(null);

export const HeaderProvider = ({ children }: PropsWithChildren) => {

    const [header, setHeader] = useState<Header|{}>({}) 

    useEffect(() => {
        setHeader(h => headerData)
    }, [])

    return (
        <HeaderContext.Provider value={null}>
            {children}
        </HeaderContext.Provider>
    );
};