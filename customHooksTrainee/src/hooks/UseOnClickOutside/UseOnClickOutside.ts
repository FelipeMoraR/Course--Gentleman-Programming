//Objetivo: Detectar clics fuera de un ref (para cerrar modales o dropdowns).

import { RefObject, useEffect } from "react";

export const useOnClickOutside = (ref: RefObject<HTMLElement | null> , callback: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(ref && ref.current && !ref.current.contains(e.target as Node)){ //contains(other: Node | null): boolean this is the structure of contain
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, [ref, callback]);
};