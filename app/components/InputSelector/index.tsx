"use client";
import ReactDOM from "react-dom";
import { Button } from "../Button";
import { useInputSelector } from "./useInputSelector";
import { InputSelectorPropTypes } from "./types";
import { Input } from "../Input";

export const InputSelector = ({ input, options }: InputSelectorPropTypes) => {
  const hook = useInputSelector();

  return (
    <div className="relative">
      <Input
        type={input.type}
        placeholder={input.placeholder}
        label={input.label}
        htmlFor={input.htmlFor}
        value={input.value}
        onChange={input.onChange}
        required={input.required}
        error={input.error}
        onFocus={() => hook.toggleOpen()}
        inputRef={hook.inputRef}
        selector
      />
      {hook.isOpen &&
        ReactDOM.createPortal(
          <div
            ref={hook.dropdownRef}
            className="absolute z-50 mt-2.5 flex w-60 flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-lg"
            style={{
              left: hook.dropdownPosition.left,
              top: hook.dropdownPosition.top,
            }}
          >
            {options.map((option, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (option.onClick) option.onClick();
                  hook.toggleOpen();
                }}
                additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none !text-neutral-600`}
              >
                {option.label}
              </Button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};
