
//Objetivo: Hook que reciba un valor y devuelva una versión con delay.

import { useEffect, useState } from "react";


export const useDebounce = <T>(value: T, delay: number): T => {
    const [valueDelayed, setValueDelayed] = useState<T>(value);
    
    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            setValueDelayed(value);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [value]);


    return valueDelayed;
};