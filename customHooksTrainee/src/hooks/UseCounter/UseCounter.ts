
//Objetivo: Un contador con funciones para incrementar, decrementar y resetear.

import { useState } from "react";

type Param = number;

interface ReturnParam {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}


export const useCounter = (initialValue: Param): ReturnParam => {
    const [ counter, setCounter] = useState<Param>(initialValue);

    const increment = () => setCounter(prev => prev + 1);
    
    const decrement = () => setCounter(prev => {
        if(initialValue === prev) return prev;
        
        return prev - 1
    });
    
    const reset = () => setCounter(initialValue);
    
    return {
        count: counter,
        increment,
        decrement,
        reset
    }

};