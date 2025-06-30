"use client";
import ReactDOM from "react-dom";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  IconContext,
  LinkIcon,
  NotePencilIcon,
  PowerIcon,
  TrashIcon,
} from "@phosphor-icons/react";
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
                  additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none ${option.label === "Delete" || option.label === "Deactivate" ? "!text-red-700 hover:!bg-red-50" : option.label === "Reactivate" ? "!text-sky-700 hover:!bg-sky-50" : "!text-neutral-600"}`}
                  href={option.href}
                  target="_blank"
                >
                  {option.label === "Edit" && <NotePencilIcon />}
                  {option.label === "View listing" && <ArrowUpRightIcon />}
                  {option.label === "Copy listing URL" && <LinkIcon />}
                  {(option.label === "Deactivate" ||
                    option.label === "Reactivate") && <PowerIcon />}
                  {option.label === "Delete" && <TrashIcon />}

                  {option.label === "Asc" && <ArrowUpIcon />}
                  {option.label === "Desc" && <ArrowDownIcon />}
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
