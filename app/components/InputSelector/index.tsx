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
    option.label?.toLowerCase().includes(hook.inputValue.toLowerCase()),
  );

  return (
    <div className="relative">
      <Input
        type={input.type}
        placeholder={input.placeholder}
        label={input.label}
        htmlFor={input.htmlFor}
        value={input.disabled ? "" : hook.inputValue}
        onChange={(event) => {
          if (input.onChange) input.onChange(event);
          hook.setInputValue(event.target.value);
        }}
        required={input.required}
        error={input.error}
        onFocus={(event) => {
          hook.toggleOpen();
          event.target.select();
        }}
        inputRef={hook.inputRef}
        onKeyDown={(event) => {
          if (!hook.isOpen) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            hook.setHighlightedIndex((prev) =>
              prev < filteredOptions.length - 1 ? prev + 1 : 0,
            );
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            hook.setHighlightedIndex((prev) =>
              prev > 0 ? prev - 1 : filteredOptions.length - 1,
            );
          }

          if (event.key === "Enter" && hook.highlightedIndex >= 0) {
            const option = filteredOptions[hook.highlightedIndex];
            if (option) {
              event.preventDefault();
              option.onClick?.();
              hook.setInputValue(option.label!);
              hook.setSelectedOption(option.label!);
              hook.setIsOpen(false);
            }
          }

          if (event.key === "Escape") {
            hook.setIsOpen(false);
          }
        }}
        disabled={input.disabled}
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
                  hook.setInputValue(option.label!);
                  hook.setSelectedOption(option.label!);
                  hook.setIsOpen(false);

                  if (input.onChange && hook.inputRef.current) {
                    const syntheticEvent = {
                      target: {
                        value: option.label,
                      },
                    } as React.ChangeEvent<HTMLInputElement>;

                    input.onChange(syntheticEvent);
                  }

                  option.onClick?.();
                }}
                additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none !text-neutral-600 ${
                  hook.highlightedIndex === index ? "!bg-neutral-100" : ""
                }`}
              >
                {option.label}
              </Button>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2">
                <p className="text-neutral-500">
                  {INPUT_SELECTOR_CONST.NO_OPTIONS}
                </p>
              </div>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
};
