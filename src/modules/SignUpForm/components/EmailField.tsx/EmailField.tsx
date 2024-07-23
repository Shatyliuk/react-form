import { Control, FieldError } from "react-hook-form";
import TextField from "../../../../components/TextField/TextField";
import { ISignUpForm } from "../../types";

import styles from "./EmailField.module.scss";

const EmailField = ({
  control,
  name,
  defaultValue,
  error,
}: {
  control: Control<ISignUpForm>;
  name: keyof ISignUpForm;
  defaultValue?: string;
  error?: FieldError;
}) => {
  return (
    <div className={styles.wrapper}>
      <TextField
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{
          required: "This field is required",
          validate: {
            email: (email) =>
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                email
              )
                ? undefined
                : "Please enter valid email",
          },
        }}
        error={error}
        inputProps={{
          placeholder: "Email",
        }}
      />
    </div>
  );
};

export default EmailField;
