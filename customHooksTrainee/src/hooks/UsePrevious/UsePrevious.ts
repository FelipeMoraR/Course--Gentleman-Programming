import { useEffect, useRef } from "react";

//Objetivo: Obtener el valor anterior de una variable de estado.
// export const usePrevious = <T>(value: T): T | undefined => {
//     const [values, setlValues] = useState<Array<T>>([]);
    
//     useEffect(() => {
//       setlValues(prev => {
//         if(prev.length === 2) return [prev[1], value];

//         return [...values, value];
//       });
//     }, [value]);

//     if(values.length === 1) return undefined;

//     return values[0];    
// };

export const usePrevious = <T>(value: T): T | undefined => {
  const prev = useRef<T>(undefined);

  useEffect(() => {
    prev.current = value;
  }, [value]);


  return prev.current;
}