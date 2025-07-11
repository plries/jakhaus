"use client";
import ReactDOM from "react-dom";
import { ModalPropTypes } from "./types";
import { IconButton } from "../IconButton";
import { MODAL_CONST } from "./const";
import { XIcon } from "@phosphor-icons/react";

export const Modal = ({ children, showModal, toggleModal }: ModalPropTypes) => {
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <div className="animate-fade-in fixed top-0 left-0 z-50 grid h-full w-full place-items-center bg-neutral-950/25 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
            <div className="relative mx-auto flex w-[calc(100%-2.5rem)] max-w-xl flex-col items-center overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-50 p-5 shadow-xl">
              {toggleModal && (
                <IconButton
                  onClick={toggleModal}
                  name={MODAL_CONST.CLOSE}
                  additionalClasses="absolute top-5 right-5 !shadow-none rounded-xl border-none"
                >
                  <XIcon />
                </IconButton>
              )}
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
