import { useState } from "react";


//Objetivo: Hook para manejar formularios con inputs, cambios y reseteo.
interface ReturnParam<T>{
    values: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
  }

export const useForm = <T extends Record<string, any>>(initialValues: T): ReturnParam<T> => { //<T extends Record<string, any>> means that T must be an object, they keys must be string and the values could be any
  const [ values, setValues ] = useState<T>(initialValues);  

  const reset = () => setValues(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, value, checked } = e.target; 
    
    if(initialValues[id] === undefined){
      e.target.value = ''
      console.log(`The ${id} doesnt exist in the initial values`);
      return
    }

    const newValue = type === 'checkbox' ? checked : value;

    setValues({
      ...values,
      [id]: newValue
    });
  }

  return {
    values,
    handleChange,
    reset
  }
};