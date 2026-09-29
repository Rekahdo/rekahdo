'use client'

import { useEffect, useState } from "react";
import { aboutMeData } from "../data/about-me";
import { ContextProvider, ContextValueType, Provider, type ContextChildrenType } from "./ContextProvider";
import type { AboutProps } from "../components/sections/about-section";

export const AboutContext = new ContextProvider<AboutProps>()

export const AboutProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<AboutProps>()

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): AboutProps {
        setData(aboutMeData)
        return aboutMeData;
    }

    return (
        AboutContext.create({ children }, data, fetchData)
    );
};


export const useAbout = (): ContextValueType<AboutProps> => {
    return AboutContext.context(Provider.ABOUT);
};