import { IconButtonPropTypes } from "./types";

export const IconButton = ({
  children,
  additionalClasses,
  onClick,
  name,
  disabled,
}: IconButtonPropTypes) => {
  return (
    <button
      className={`grid size-11 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-950 shadow-lg transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-90 ${additionalClasses || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="sr-only">{name}</span>
      {children}
    </button>
  );
};
