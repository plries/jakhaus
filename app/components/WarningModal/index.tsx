"use client";
import { WarningCircleIcon } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { WarningModalPropTypes } from "./types";

export const WarningModal = ({
  children,
  showModal,
  toggleModal,
}: WarningModalPropTypes) => {
  return (
    <Modal showModal={showModal} toggleModal={toggleModal}>
      <div
        className={`m-5 rounded-full border border-red-950/5 bg-red-600/10 p-1`}
      >
        <WarningCircleIcon className="text-red-600" weight="fill" size={64} />
      </div>
      {children}
    </Modal>
  );
};
