import { useForm } from "react-hook-form";

import PasswordField from "./components/PasswordField/PasswordField";
import EmailField from "./components/EmailField.tsx/EmailField";

import { ISignUpForm } from "./types";

import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getFieldState,
  } = useForm<ISignUpForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  const onSubmit = (data: ISignUpForm) => {
    // NOTE: No description for on submit
    alert(JSON.stringify(data));
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.heading}>Sign Up</h2>

      <EmailField control={control} name="email" error={errors.email} />

      <PasswordField
        control={control}
        name="password"
        error={errors.password}
        isDirty={getFieldState("password").isDirty}
      />

      <button className={styles.submitButton} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
