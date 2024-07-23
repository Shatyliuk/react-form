import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from "react-hook-form";
import cn from "classnames";
import styles from "./TextField.module.scss";

const TextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  error,
  inputProps,
}: {
  control: Control<T>;
  name: Path<T>;
  defaultValue?: PathValue<T, Path<T>>;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  error?: FieldError | boolean;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}) => {
  return (
    <>
      <Controller
        render={({ field, fieldState }) => (
          <input
            className={cn(styles.input, {
              [styles.inputError]: error,
              [styles.inputSuccess]: fieldState.isDirty && !error,
            })}
            {...field}
            {...inputProps}
          />
        )}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        name={name}
      />

      {error && typeof error !== "boolean" && (
        <p className={styles.error}>{error.message}</p>
      )}
    </>
  );
};

export default TextField;
