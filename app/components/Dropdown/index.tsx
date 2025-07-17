"use client";
import ReactDOM from "react-dom";
import { IconContext, LinkIcon, CheckIcon } from "@phosphor-icons/react";
import { Button, IconButton } from "@/app/components";
import { DropdownPropTypes } from "./types";
import { useDropdown } from "./useDropdown";

export const Dropdown = ({ options, button }: DropdownPropTypes) => {
  const hook = useDropdown();
  return (
    <IconContext.Provider value={{ size: 20, weight: "regular" }}>
      <div className="relative">
        <IconButton
          buttonRef={hook.buttonRef}
          onClick={hook.toggleOpen}
          name={button.name}
          additionalClasses={`${hook.isOpen ? "!bg-neutral-950/5" : ""} ${button.additionalClasses}`}
        >
          {button.icon}
        </IconButton>
        {hook.isOpen &&
          ReactDOM.createPortal(
            <div
              ref={hook.dropdownRef}
              className="animate-fade-in absolute z-50 mt-2.5 flex w-60 flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-3 opacity-0 shadow-lg transition-opacity"
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
                    if (option.label !== "Copy listing URL") {
                      hook.toggleOpen();
                    } else {
                      hook.setCopied(true);
                    }
                  }}
                  disabled={option.disabled}
                  additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none ${option.label === "Delete" ? "!text-red-700 hover:!bg-red-50 relative after:absolute mt-4 after:-top-2 after:left-0 after:w-full after:h-[1px] after:bg-neutral-200" : "!text-neutral-600"}`}
                  href={option.href}
                  target={option.label === "Edit" ? "" : "_blank"}
                >
                  {option.icon}
                  {option.label === "Copy listing URL" &&
                    (hook.copied ? <CheckIcon /> : <LinkIcon />)}
                  {option.label}
                </Button>
              ))}
            </div>,
            document.body,
          )}
      </div>
    </IconContext.Provider>
  );
};
