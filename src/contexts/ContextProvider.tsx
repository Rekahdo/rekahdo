import { createContext, type JSX, type ReactNode } from "react";

export type ContextChildrenType = {
    children: ReactNode;
};

export type ContextValueType<T> = {
    data: T | undefined;
    reload: () => T;
}|null;

export class ContextProvider<T> {

    private Context: React.Context<ContextValueType<T>>;

    constructor(){
        this.Context = createContext<ContextValueType<T>>(null);
    }

    public context(): React.Context<ContextValueType<T>> {
        return this.Context;
    }

    public create({ children }: ContextChildrenType, data: T | undefined, reload: () => T): JSX.Element {
        return (
            <this.Context.Provider value={{ data, reload } as ContextValueType<T>}>
                {children}
            </this.Context.Provider>
        );
    }

}