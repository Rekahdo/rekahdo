'use client'

import { useEffect, useState } from "react";
import { techStacksData } from "../data/tech-stack";
import { ContextProvider, ContextValueType, Provider, type ContextChildrenType } from "./ContextProvider";
import { TechStackProps } from "@/components/sections/tech-stack-section";

export const TechStackContext = new ContextProvider<TechStackProps>()

export const TechStackProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<TechStackProps>()

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): TechStackProps {
        setData(_ => techStacksData)
        return techStacksData;
    }

    return (
        TechStackContext.create({ children }, data, fetchData)
    );
};

export const useTechStack = (): ContextValueType<TechStackProps> => {
    return TechStackContext.context(Provider.TECH_STACK);
};