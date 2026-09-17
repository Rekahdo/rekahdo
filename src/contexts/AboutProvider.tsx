import { useEffect, useState } from "react";
import { aboutMeData } from "../data/about-me";
import { ContextProvider } from "./ContextProvider";
import type { AboutType, ContextChildrenType } from "../data/type";

export const AboutContext = new ContextProvider<AboutType>()

export const AboutProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<AboutType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): AboutType{
        setData(aboutMeData)
        return aboutMeData;
    }

    return (
        AboutContext.create({children}, data, fetchData)
    );
};
