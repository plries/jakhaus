import { ButtonPropTypes } from "./types";

export const Button = ({
  type,
  children,
  additionalClasses,
  onClick,
  disabled,
}: ButtonPropTypes) => {
  return (
    <button
      className={`flex h-11 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-950 shadow-lg transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-98 ${additionalClasses || ""}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
