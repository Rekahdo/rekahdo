import { useContext } from "react";
import { HeaderContext, type HeaderContextType } from "../contexts/HeaderProvider";

export const useHeader = (): HeaderContextType => {
    const context = useContext(HeaderContext);

    if(!context)
        throw new Error("useHeader must be used within HeaderProvider");

    return context;
}