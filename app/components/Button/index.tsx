import Link from "next/link";
import { ButtonPropTypes } from "./types";

export const Button = ({
  type = "button",
  children,
  additionalClasses,
  onClick,
  disabled,
  href,
  target,
}: ButtonPropTypes) => {
  return (
    <>
      {href ? (
        <Link
          className={`flex h-11 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-nowrap text-neutral-950 shadow-md transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-98 disabled:opacity-50 ${additionalClasses || ""}`}
          href={href || ""}
          onClick={onClick}
          target={target}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`flex h-11 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-nowrap text-neutral-950 shadow-md transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-98 disabled:opacity-50 ${additionalClasses || ""}`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
