"use client";
import Image from "next/image";
import { UploadSimpleIcon, XIcon } from "@phosphor-icons/react";
import { UploadDropzonePropTypes } from "./types";
import { useUploadDropzone } from "./useUploadDropzone";
import { IconButton } from "../IconButton";
import { UPLOAD_BUTTON_CONST } from "./const";

export const UploadDropzone = ({
  label,
  text,
  required,
  caption,
  htmlFor,
  onChange,
}: UploadDropzonePropTypes) => {
  const hook = useUploadDropzone();

  return (
    <div ref={hook.dropzoneRef}>
      <p className="mb-1 font-medium text-neutral-700">
        {label}
        {required && <span>*</span>}
      </p>
      <label
        htmlFor={htmlFor}
        className="flex h-fit w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-neutral-300 px-5 pb-10 text-nowrap shadow-inner transition-all duration-150 ease-in-out hover:bg-neutral-100 active:scale-98"
      >
        {hook.uploadedFiles && hook.previewUrls && (
          <span className="grid w-full grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
            {hook.uploadedFiles.map((file, index) => {
              const previewUrl = hook.previewUrls[index];
              if (!previewUrl) return null;

              return (
                <span key={index} className="relative mt-7.5 w-full">
                  <IconButton
                    additionalClasses="absolute -right-4 -top-4 place-self-end"
                    name={UPLOAD_BUTTON_CONST.DELETE}
                    onClick={() => hook.clearFile(index)}
                  >
                    <XIcon />
                  </IconButton>
                  <Image
                    src={previewUrl}
                    alt={file.name}
                    width={1920}
                    height={1080}
                    className="mt-2 rounded-md border border-neutral-950/10 shadow-sm"
                  />
                  <span className="flex justify-center px-2">
                    <p className="-mt-2 w-fit overflow-hidden rounded-full border border-neutral-950/10 bg-neutral-50 px-2 py-1 text-center !text-sm text-nowrap text-ellipsis !text-neutral-600 shadow-sm">
                      {file.name}
                    </p>
                  </span>
                </span>
              );
            })}
          </span>
        )}
        <UploadSimpleIcon size={24} className="mt-10" />
        <span className="mt-5 font-medium text-neutral-600">{text}</span>
        <span className="!text-sm text-neutral-400">{caption}</span>
      </label>
      <input
        id={htmlFor}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(event) => {
          hook.handleFileUpload(event);
          if (onChange) onChange(event.target.files![0]);
        }}
        multiple
      />
    </div>
  );
};
