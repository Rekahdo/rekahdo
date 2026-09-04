import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderProvider";

export const useHeader = () => useContext(HeaderContext)