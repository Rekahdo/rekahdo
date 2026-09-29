'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { headerData } from "../data/header";
import type { ContextChildrenType, ContextValueType } from "./ContextProvider";
import { HeaderProps } from "@/components/sections/header-section";

export const HeaderContext = createContext<ContextValueType<HeaderProps>>(null);

export const HeaderProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<HeaderProps>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): HeaderProps{
        setData(headerData)
        return headerData;
    }

    return (
        <HeaderContext.Provider value={{data, reload: fetchData}}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeader = (): ContextValueType<HeaderProps> => {
  const context = useContext(HeaderContext);

  if (!context)
    throw new Error("useHeader must be used within HeaderProvider");

  return context;
};