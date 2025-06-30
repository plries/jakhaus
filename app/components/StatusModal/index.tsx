"use client";
import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";
import { StatusModalPropTypes } from "./types";

export const StatusModal = ({
  children,
  showModal,
  success,
}: StatusModalPropTypes) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 grid h-full w-full place-items-center bg-neutral-950/25 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${showModal && success ? "" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative mx-auto flex w-[calc(100%-2.5rem)] max-w-xl flex-col items-center overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-50 p-5 shadow-xl">
        <div
          className={`m-5 rounded-full border p-1 ${success ? "border-green-950/5 bg-green-600/10" : "border-red-950/5 bg-red-600/10"}`}
        >
          {success ? (
            <CheckCircleIcon
              className="text-green-600"
              weight="fill"
              size={64}
            />
          ) : (
            <XCircleIcon className="text-red-600" weight="fill" size={64} />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
