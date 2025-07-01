import { ModalPropTypes } from "./types";

export const Modal = ({
  children,
  showModal,
}: ModalPropTypes) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 grid h-full w-full place-items-center bg-neutral-950/25 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${showModal ? "" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative mx-auto flex w-[calc(100%-2.5rem)] max-w-xl flex-col items-center overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-50 p-5 shadow-xl">
        {children}
      </div>
    </div>
  );
};
