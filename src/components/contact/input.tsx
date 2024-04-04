import {
  UseFormRegister,
  FieldValues,
  FieldError,
  Path,
} from "react-hook-form";

type InputProps<TFormFields extends FieldValues> =
  React.JSX.IntrinsicElements["input"] & {
    label: string;
    name: Path<TFormFields>;
    required: boolean;
    register: UseFormRegister<TFormFields>;
    error: FieldError | undefined;
  };

const Input = <TFormFields extends FieldValues>({
  name,
  label,
  error,
  required,
  register,
  ...restProps
}: InputProps<TFormFields>) => {
  return (
    <label htmlFor={name} className="flex flex-1 flex-col">
      <span className="font-display text-sm tracking-tight lg:text-base lg:tracking-normal">
        {label} {required && <span className="text-navy-700">*</span>}
      </span>
      <input
        id={name}
        {...register(name, { required: required })}
        className={`h-12 min-w-0 rounded-tr-xl rounded-bl-xl border bg-neutral-50 border-neutral-100 px-2 lg:h-14 lg:px-4 lg:text-lg ${
          error
            ? "border-papaya-200 outline-papaya-500 focus:outline-papaya-500"
            : "focus:outline-navy-700"
        }`}
        {...restProps}
      />
      {error && (
        <span className="px-2 text-sm  tracking-tighter text-papaya-400 lg:px-4 lg:text-base lg:tracking-normal">
          {error.message}
        </span>
      )}
    </label>
  );
};

export default Input;
