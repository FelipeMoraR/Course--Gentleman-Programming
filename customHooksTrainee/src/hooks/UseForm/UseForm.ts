

//Objetivo: Hook para manejar formularios con inputs, cambios y reseteo.
interface ReturnParam<T>{
    values: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
  }

const useForm = <T extends Record<string, any>>(initialValues: T): ReturnParam<T> => { //<T extends Record<string, any>> means that T must be an object, they keys must be string and the values could be any
    // lógica
};