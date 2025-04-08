import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

import { useGlobalContext } from "../../context/global.contex";

export const CardDefault = ({ children }: CardProps ) => {
    const {setValue} = useGlobalContext();

    return (
        <div style={{
            border: '1px solid black',
            borderRadius: '4px',
            backgroundColor: 'red',
            padding: '10px',
            color: 'gold',
            cursor: 'pointer'
        }} onClick={() => setValue(prev => prev + 10)}>
            
            {children}
        </div>
    )
}


export const CardPurple = ({ children }: CardProps ) => {
    const {value} = useGlobalContext();


    return (
        <div style={{
            border: '1px solid yellow',
            borderRadius: '4px',
            backgroundColor: 'purple',
            padding: '10px',
            color: 'orange'
        }}>
            {value}
            {children}
        </div>
    )
}

