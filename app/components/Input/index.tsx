"use client";
import {
  CaretDownIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { InputPropTypes } from "./types";
import { useInput } from "./useInput";
import { INPUT_CONST } from "./const";

export const Input = ({
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  required,
  error,
  htmlFor,
  selector,
  onFocus,
  inputRef,
  onKeyDown,
  disabled,
  maxLength,
  password,
}: InputPropTypes) => {
  const hook = useInput();

  return (
    <div className={`${disabled ? "pointer-events-none opacity-50" : ""}`}>
      {label && (
        <label htmlFor={htmlFor} className="mb-1 font-medium text-neutral-700">
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <div
        ref={inputRef}
        className={`relative flex w-full flex-row items-center gap-2 rounded-xl border bg-neutral-50 p-3 shadow-sm focus-within:shadow-md transition-all ease-in-out duration-150 outline-2 outline-transparent required:!border-red-400 focus-within:outline-2 focus-within:outline-neutral-950/10 ${error ? "border-red-400" : "border-neutral-200"}`}
      >
        {type === "search" && (
          <MagnifyingGlassIcon size={20} className="text-neutral-400" />
        )}
        <input
          id={htmlFor}
          className="w-full placeholder:text-neutral-950/25 focus:outline-none"
          type={password ? (hook.showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            if (onChange) onChange(event);
          }}
          required={required}
          onFocus={onFocus}
          min={type === "number" ? 0 : undefined}
          onKeyDown={onKeyDown}
          disabled={disabled}
          maxLength={maxLength}
        />
        {selector && <CaretDownIcon size={20} className="text-neutral-400" />}
        {password && (
          <button
            name={
              hook.showPassword
                ? INPUT_CONST.HIDE_PASSWORD
                : INPUT_CONST.HIDE_PASSWORD
            }
            onClick={hook.toggleShowPassword}
            className="!size-6 cursor-pointer"
          >
            {hook.showPassword ? (
              <EyeSlashIcon size={20} />
            ) : (
              <EyeIcon size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
