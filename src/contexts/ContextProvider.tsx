import { createContext, useContext, type JSX, type ReactNode } from "react";

export const Provider = {
    HERO: "Hero",
    HEADER: "Header",
    ABOUT: "About",
    CONTACT: "Contact",
    FOOTER: "Footer",
    GROWTH: "Growth",
    PROJECTS: "Projects",
    RESOURCES: "Resources",
    SERVICES: "Services",
    STACK_USAGE: "StackUsage",
    TECH_STACK: "TechStack",
};

type ProviderType = (typeof Provider)[keyof typeof Provider];

export type ContextChildrenType = {
    children: ReactNode;
};

export type ContextValueType<T> = {
    data: T | undefined;
    reload: () => T;
} | null;

export class ContextProvider<T> {

    private Context: React.Context<ContextValueType<T>>;

    constructor() {
        this.Context = createContext<ContextValueType<T>>(null);
    }

    public context(provider: ProviderType): ContextValueType<T> {
        const context = useContext(this.Context);

        if (!context)
            throw new Error(`use${provider} must be used within <${provider}Provider>...</${provider}Provider>`,);

        return context;
    }

    public create({ children }: ContextChildrenType, data: T | undefined, reload: () => T): JSX.Element {
        return (
            <this.Context.Provider value={{ data, reload } as ContextValueType<T>}>
                {children}
            </this.Context.Provider>
        );
    }
}