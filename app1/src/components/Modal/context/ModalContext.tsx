import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

interface Props {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<Props | undefined>(undefined);

export const ModalContextProvider = ({children} : {children: ReactNode}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if(!context) throw new Error('Provider missing');

    return context
}
