import { useState } from "react";
import { Control, FieldError } from "react-hook-form";
import cn from "classnames";

import HidePassword from "../../../../assets/hide_password.svg?react";

import TextField from "../../../../components/TextField/TextField";
import { ISignUpForm } from "../../types";

import styles from "./PasswordField.module.scss";

const errors = {
  required: "This field is required",
  minLength: "8 characters or more (no spaces)",
  maxLength: "64 characters or less (no spaces)",
  validateUppercase: "Uppercase and lowercase letters",
  validateNumber: "At least one digit",
};

const PasswordField = ({
  control,
  name,
  defaultValue,
  error,
  isDirty,
}: {
  control: Control<ISignUpForm>;
  name: keyof ISignUpForm;
  defaultValue?: string;
  error?: FieldError;
  isDirty?: boolean;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <TextField
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{
          required: "This field is required",
          validate: {
            validateUppercase: (val) =>
              /[A-Z]/.test(val) ? undefined : "Uppercase and lowercase letters",
            validateNumber: (val) =>
              /^(?=\D*\d)[a-zA-Z0-9 -]+$/.test(val)
                ? undefined
                : "At least one digit",

            minLength: (value) =>
              value.trim().length >= 8
                ? undefined
                : "8 characters or more (no spaces)",
            maxLength: (value) =>
              value.trim().length <= 64
                ? undefined
                : "64 characters or less (no spaces)",
          },
        }}
        inputProps={{
          type: isPasswordVisible ? "text" : "password",
          placeholder: "Create a password",
        }}
        error={!!error}
      />
      <button
        className={styles.button}
        onClick={handlePasswordVisibility}
        type="button"
      >
        <HidePassword />
      </button>

      <ul>
        {Object.entries(errors).map(([key, value]) => (
          <li key={key} className={styles.listItem}>
            <p
              className={cn(styles.validation, {
                [styles.error]: isDirty && error?.types && error?.types[key],
                [styles.success]:
                  (isDirty && !error) || (error?.types && !error?.types[key]),
              })}
            >
              {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordField;
