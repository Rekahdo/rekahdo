'use client'

import { useEffect, useState } from "react";
import { ContextProvider, ContextValueType, Provider, type ContextChildrenType } from "./ContextProvider";
import { ProjectsProps } from "@/components/sections/project-section";
import { projectsData } from "@/data/projects";

export const ProjectsContext = new ContextProvider<ProjectsProps>()

export const ProjectsProvider = ({ children }: ContextChildrenType) => {

    const [data, setData] = useState<ProjectsProps>()

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): ProjectsProps {
        setData(_ => projectsData)
        return projectsData;
    }

    return (
        ProjectsContext.create({ children }, data, fetchData)
    );
};

export const useProjects = (): ContextValueType<ProjectsProps> => {
    return ProjectsContext.context(Provider.PROJECTS);
};