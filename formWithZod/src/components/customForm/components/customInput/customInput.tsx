import { Control, Controller, FieldError } from "react-hook-form";
import styles from "./customInput.module.css";
import { FormValues } from "../../../models/formModel";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <Controller //Controlled by the form
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`${styles.formControl} ${error ? styles.isInvalid : ""}`}
          />
        )}
      />
      {error && <p className={styles.errorInput}>{error.message}</p>}
    </div>
  );
};

export default InputForm;
