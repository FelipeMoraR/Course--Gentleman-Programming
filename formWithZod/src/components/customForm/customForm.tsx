import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/customInput/customInput";
import {schema, FormValues} from "../models/formModel";


export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ //formState: {isDirty, isValid, errors} //isDirty: if the input is already touched
        resolver: zodResolver(schema), //How we are going to validate the form
        mode: 'onBlur' //mode validate When the form is going to validate the inputs
    }); //This is reac-hook-form

    const onSubmit: SubmitHandler<FormValues> = (data) => { //SubmitHandler is a type(interface) that we are going to use to validate the data (FormValues)
        console.info(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name = "name" control = {control} label = "Name" type = "text" error = {errors.name} />
            <InputForm name = "email" control = {control} label = "Email" type = "email" error = {errors.email} />
            <InputForm name = "password" control = {control} label = "Password" type = "password" error = {errors.password} />
            <InputForm name = "confirmPassword" control = {control} label = "Confirm password" type = "password" error = {errors.confirmPassword} />
            <button type="submit">Submit</button>
        </form>
    )
}


