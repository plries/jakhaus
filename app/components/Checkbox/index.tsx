"use client";
import { CheckIcon } from "@phosphor-icons/react";
import { CheckboxPropTypes } from "./types";

export const Checkbox = ({ label, htmlFor, disabled, onChange }: CheckboxPropTypes) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 ${disabled ? "pointer-events-none opacity-50" : ""}`}
    >
      <div className="relative h-6 w-6">
        <input
          type="checkbox"
          className="peer h-6 w-6 appearance-none rounded-md border border-neutral-200 bg-neutral-50 shadow-md checked:border-neutral-900 checked:bg-neutral-950 focus:outline-2 focus:outline-neutral-950/10"
          id={htmlFor}
          onChange={onChange}
          disabled={disabled}
        />
        <CheckIcon
          weight="bold"
          className="pointer-events-none absolute top-0 left-0 hidden h-6 w-6 p-1 text-neutral-50 peer-checked:block"
        />
      </div>
      {label && (
        <label
          className="leading-none font-medium text-neutral-700"
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
    </div>
  );
};
