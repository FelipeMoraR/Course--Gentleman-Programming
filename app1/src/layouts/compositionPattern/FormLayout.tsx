import { InputHTMLAttributes, ReactNode } from "react";


interface FormLayoutProps {
    children: ReactNode; 
}

type InputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

//Compound Components Pattern 
export const FormLayout = ({ children } : FormLayoutProps) => (
    <form action="">
        {children}
    </form>
)

FormLayout.Input = ({label, ...props} : InputProps) => (
    <div>
        <label>{label}</label>
        <input {...props} />
        
    </div>
)