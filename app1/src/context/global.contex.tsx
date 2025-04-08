import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context. It will be undefined if used outside its Provider.
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Custom hook to consume the context.
// Will throw an error if used outside of the GlobalProvider.
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
};

// Provider component that wraps parts of the app that need access to the context.
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<number>(0);

    return (
        <GlobalContext.Provider value={{ value, setValue }}>
            {children}
        </GlobalContext.Provider>
    );
};
