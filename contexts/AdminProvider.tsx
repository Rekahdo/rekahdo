'use client'

import { createContext, ReactNode, useContext } from "react";

type AdminType = {
    isAdminPage?: boolean;
}

export const AdminContext = createContext<AdminType>({
    isAdminPage: false,
})

export interface AdminProviderProps {
    children: ReactNode;
    isAdminPage?: boolean;
}

export function AdminProvider({ children, isAdminPage = false }: AdminProviderProps) {
    return (
        <AdminContext value={{ isAdminPage }}>
            {children}
        </AdminContext>
    );
}

export const useAdmin = () => useContext(AdminContext);