import { InputPropTypes } from "./types";

export const Input = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  required,
  error,
}: InputPropTypes) => {
  return (
    <div>
      <label className="font-medium text-neutral-700">
        {label}
        {required && <span>*</span>}
      </label>
      <input
        className={`w-full rounded-xl border bg-neutral-50 p-3 shadow-md outline-2 outline-transparent ${error ? "border-red-400" : "border-neutral-200"}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
