import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export const CardDefault = ({ children }: CardProps ) => {
    return (
        <div style={{
            border: '1px solid black',
            borderRadius: '4px',
            backgroundColor: 'red',
            padding: '10px',
            color: 'gold'
        }}>
            {children}
        </div>
    )
}


export const CardPurple = ({ children }: CardProps ) => {
    return (
        <div style={{
            border: '1px solid yellow',
            borderRadius: '4px',
            backgroundColor: 'purple',
            padding: '10px',
            color: 'orange'
        }}>
            {children}
        </div>
    )
}

