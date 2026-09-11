import { useEffect, useState } from "react";
import type { AboutType } from "../data/about-me";
import { aboutMeData } from "../data/about-me";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const AboutContext = new ContextProvider<AboutType>()

export const AboutProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<AboutType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): AboutType{
        setData(_ => aboutMeData)
        return aboutMeData;
    }

    return (
        AboutContext.create({children}, data, fetchData)
    );
};
