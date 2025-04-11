import { useState } from "react";

type UseToggleProps = boolean;

interface UseToggleReturn {
    value: boolean;
    toggle: () => void;
}



export const useToggle = (initialValue: UseToggleProps): UseToggleReturn => {
    const [ value, setValue ] = useState<boolean>(initialValue);
    
    const toggle = () => setValue(prev => !prev);

    return {
        value,
        toggle
    }

}