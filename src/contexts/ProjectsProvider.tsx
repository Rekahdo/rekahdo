import { useEffect, useState } from "react";
import type { ProjectsType } from "../data/projects";
import { projectsData } from "../data/projects";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const ProjectsContext = new ContextProvider<ProjectsType>()

export const ProjectsProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<ProjectsType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): ProjectsType{
        setData(_ => projectsData)
        return projectsData;
    }

    return (
        ProjectsContext.create({children}, data, fetchData)
    );
};
