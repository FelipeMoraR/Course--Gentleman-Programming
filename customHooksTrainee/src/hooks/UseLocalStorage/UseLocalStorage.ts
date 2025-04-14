//Objetivo: Hook para leer/escribir datos en localStorage.

import { useEffect, useState } from "react";


interface Params {
  key: string;
  initialValue: string;
}

interface ParamsReturn {
  value: string;
  setValue: (newVal: string) => void;
}

export const useLocalStorage = ({key , initialValue} : Params): ParamsReturn => {
    const [value, setValue] = useState<string>('');

    const handlerSetValue = (newVal: string) => {
      localStorage.setItem(key, newVal);
      setValue(newVal);
    };

    useEffect(() => {
      const getLocal = localStorage.getItem(key);
      
      if(getLocal) {
        setValue(getLocal);
        return
      };

      handlerSetValue(initialValue);
    }, [key]);

    return {value, setValue: handlerSetValue}
};