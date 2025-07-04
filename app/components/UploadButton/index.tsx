"use client";
import Image from "next/image";
import { UploadSimpleIcon, XIcon } from "@phosphor-icons/react";
import { UploadButtonPropTypes } from "./types";
import { useUploadButton } from "./useUploadButton";
import { IconButton } from "../IconButton";
import { UPLOAD_BUTTON_CONST } from "./const";

export const UploadButton = ({
  label,
  text,
  required,
  htmlFor,
  disabled,
  onChange,
  onClear,
  isDarkLogo,
  preview,
}: UploadButtonPropTypes) => {
  const hook = useUploadButton();

  return (
    <div className={`${disabled ? "pointer-events-none opacity-50" : ""}`}>
      <p className="mb-1 font-medium text-neutral-700">
        {label}
        {required && <span>*</span>}
      </p>
      <label
        ref={hook.labelRef}
        htmlFor={htmlFor}
        className="flex h-11 w-fit cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-nowrap text-neutral-600 shadow-md transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-98"
      >
        <UploadSimpleIcon />
        {text}
      </label>
      <input
        id={htmlFor}
        type="file"
        className="peer hidden"
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            hook.handleFileUpload(event);
            if (onChange) onChange(file);
          }
        }}
        disabled={disabled}
      />
      {(hook.previewUrl || preview) && (
        <div className="relative mt-5 max-w-64">
          <IconButton
            additionalClasses="absolute -right-4 -top-4 place-self-end"
            name={UPLOAD_BUTTON_CONST.DELETE}
            onClick={() => {
              hook.clearFile();
              if (onClear) onClear();
            }}
          >
            <XIcon />
          </IconButton>
          <Image
            src={hook.previewUrl || preview!}
            alt={hook.uploadedFile?.name || "Preview"}
            width={1920}
            height={1080}
            className={`mt-2 w-auto max-w-64 rounded-md border border-neutral-950/10 shadow-sm transition-colors duration-150 ease-in-out ${isDarkLogo ? "bg-neutral-50" : "bg-neutral-950"}`}
          />
          {hook.uploadedFile?.name && (
            <div className="flex justify-center px-2">
              <p className="-mt-2 w-fit overflow-hidden rounded-full border border-neutral-950/10 bg-neutral-50 px-2 py-1 text-center !text-sm text-nowrap text-ellipsis !text-neutral-600 shadow-sm">
                {hook.uploadedFile.name}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
