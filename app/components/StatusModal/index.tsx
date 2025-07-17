"use client";
import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";
import { StatusModalPropTypes } from "./types";
import { Modal } from "../Modal";

export const StatusModal = ({
  children,
  showModal,
  success,
}: StatusModalPropTypes) => {
  return (
    <Modal showModal={showModal}>
      <div
        className={`m-5 rounded-full border p-1 ${success ? "border-green-950/5 bg-green-600/10" : "border-red-950/5 bg-red-600/10"}`}
      >
        {success ? (
          <CheckCircleIcon className="text-green-600" weight="fill" size={64} />
        ) : (
          <XCircleIcon className="text-red-600" weight="fill" size={64} />
        )}
      </div>
      {children}
    </Modal>
  );
};
