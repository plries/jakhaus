import {
  ArrowDownIcon,
  ArrowUpIcon,
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
    <div className="relative">
      <IconButton
        buttonRef={hook.buttonRef}
        onClick={hook.toggleOpen}
        name={button.name}
        additionalClasses={`${hook.isOpen ? "!bg-neutral-950/5" : ""} ${button.additionalClasses}`}
      >
        {button.icon}
      </IconButton>
      <div
        ref={hook.dropdownRef}
        className={`absolute top-full right-0 z-50 flex w-60 flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-lg transition-all duration-150 ease-in-out ${hook.isOpen ? "mt-2.5" : "pointer-events-none opacity-0"}`}
      >
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => {
              option.onClick();
              hook.toggleOpen();
            }}
            additionalClasses={`!w-full font-normal !justify-start bg-transparent hover:!bg-neutral-100 !shadow-none !border-none ${option.label === "Delete" || option.label === "Deactivate" ? "!text-red-700 hover:!bg-red-50" : option.label === "Reactivate" ? "!text-sky-700 hover:!bg-sky-50" : "!text-neutral-600"}`}
          >
            {option.label === "Delete" && <TrashIcon />}
            {(option.label === "Deactivate" ||
              option.label === "Reactivate") && <PowerIcon />}
            {option.label === "Edit" && <NotePencilIcon />}
            {option.label === "Asc" && <ArrowUpIcon />}
            {option.label === "Desc" && <ArrowDownIcon />}
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
