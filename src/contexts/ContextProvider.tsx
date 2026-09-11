import { createContext, useContext, type JSX } from "react";
import type { ProviderType, ContextChildrenType, ContextValueType } from "../utils/type";

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