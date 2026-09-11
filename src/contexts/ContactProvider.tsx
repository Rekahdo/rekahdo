import { useEffect, useState } from "react";
import type { ContactMeType } from "../data/contact-me";
import { contactMeData } from "../data/contact-me";
import { ContextProvider, type ContextChildrenType } from "./ContextProvider";

export const ContactContext = new ContextProvider<ContactMeType>()

export const ContactProvider = ({children}: ContextChildrenType) => {

    const [data, setData] = useState<ContactMeType>() 

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData(): ContactMeType{
        setData(_ => contactMeData)
        return contactMeData;
    }

    return (
        ContactContext.create({children}, data, fetchData)
    );
};
