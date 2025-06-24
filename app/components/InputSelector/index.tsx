"use client";
import ReactDOM from "react-dom";
import { Button } from "../Button";
import { useInputSelector } from "./useInputSelector";
import { InputSelectorPropTypes } from "./types";
import { Input } from "../Input";
import { INPUT_SELECTOR_CONST } from "./const";

export const InputSelector = ({ input, options }: InputSelectorPropTypes) => {
  const hook = useInputSelector();

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(hook.inputValue.toLowerCase()),
  );

  return (
    <div className="relative">
      <Input
        type={input.type}
        placeholder={input.placeholder}
        label={input.label}
        htmlFor={input.htmlFor}
        value={hook.inputValue}
        onChange={(e) => {
          hook.setInputValue(e.target.value);
          input.onChange?.(e);
        }}
        required={input.required}
        error={input.error}
        onFocus={() => hook.toggleOpen()}
        inputRef={hook.inputRef}
        onKeyDown={(e) => {
          if (!hook.isOpen) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            hook.setHighlightedIndex((prev) =>
              prev < filteredOptions.length - 1 ? prev + 1 : 0,
            );
          }

          if (e.key === "ArrowUp") {
            e.preventDefault();
            hook.setHighlightedIndex((prev) =>
              prev > 0 ? prev - 1 : filteredOptions.length - 1,
            );
          }

          if (e.key === "Enter" && hook.highlightedIndex >= 0) {
            const option = filteredOptions[hook.highlightedIndex];
            if (option) {
              e.preventDefault();
              option.onClick?.();
              hook.setInputValue(option.label);
              hook.setSelectedOption(option.label);
              hook.setIsOpen(false);
            }
          }

          if (e.key === "Escape") {
            hook.setIsOpen(false);
          }
        }}
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
              width: hook.inputRef.current?.offsetWidth,
            }}
          >
            {filteredOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => {
                  option.onClick?.();
                  hook.setInputValue(option.label);
                  hook.setSelectedOption(option.label);
                  hook.setIsOpen(false);
                }}
                additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none !text-neutral-600 ${
                  hook.highlightedIndex === index ? "!bg-neutral-100" : ""
                }`}
              >
                {option.label}
              </Button>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2 text-neutral-500">
                {INPUT_SELECTOR_CONST.NO_OPTIONS}
              </div>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
};
