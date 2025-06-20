"use client";
import { CheckIcon } from "@phosphor-icons/react";
import { CheckboxPropTypes } from "./types";

export const Checkbox = ({ label }: CheckboxPropTypes) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="relative h-6 w-6">
        <input
          type="checkbox"
          className="peer h-6 w-6 appearance-none rounded-sm border border-neutral-200 shadow-md checked:bg-neutral-500 focus:outline-2 focus:outline-neutral-950/10"
        />
        <CheckIcon
          weight="bold"
          className="pointer-events-none absolute top-0 left-0 hidden h-6 w-6 p-1 text-neutral-50 peer-checked:block"
        />
      </div>
      {label && <label className="font-medium text-neutral-700">{label}</label>}
    </div>
  );
};
