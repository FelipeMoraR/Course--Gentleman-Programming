
//Objetivo: Hook que reciba un valor y devuelva una versión con delay.

import { useEffect, useState } from "react";

type ValueParam<T> = T; 

export const useDebounce = <T>(value: T, delay: number): T => {
    const [valueDelayed, setValueDelayed] = useState<ValueParam<T>>(value);
    
    useEffect(() => {
        setValueDelayed(value);
        
        console.log('valueDelayed => ', valueDelayed);
    }, [value]);


    return valueDelayed;
};