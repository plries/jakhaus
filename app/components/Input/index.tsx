"use client";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { InputPropTypes } from "./types";

export const Input = ({
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  required,
  error,
  htmlFor,
}: InputPropTypes) => {
  return (
    <div>
      {label && (
        <label htmlFor={htmlFor} className="font-medium text-neutral-700 mb-1">
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <div
        className={`flex w-full flex-row items-center gap-2 rounded-xl border bg-neutral-50 p-3 shadow-md outline-2 outline-transparent focus-within:outline-2 focus-within:outline-neutral-950/10 ${error ? "border-red-400" : "border-neutral-200"}`}
      >
        {type === "search" && (
          <MagnifyingGlassIcon size={20} className="text-neutral-400" />
        )}
        <input
          id={htmlFor}
          className="w-full placeholder:text-neutral-400 focus:outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};
