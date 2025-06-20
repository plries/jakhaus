"use client";
import Image from "next/image";
import { LIGHTBOX_CONST } from "./const";
import { LightboxPropTypes } from "./types";
import { IconButton } from "@/app/components";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

export const Lightbox = ({
  CONSTANTS,
  FULL_ADDRESS,
  isOpen,
  closeLightbox,
  photoIndex,
  nextPhoto,
  prevPhoto,
}: LightboxPropTypes) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 grid h-full w-full place-items-center bg-neutral-950/75 backdrop-blur-lg transition-opacity duration-300 ease-in-out ${isOpen ? "" : "pointer-events-none opacity-0"}`}
    >
      <IconButton
        name={LIGHTBOX_CONST.BUTTONS.CLOSE}
        onClick={closeLightbox}
        additionalClasses="absolute top-5 right-5 bg-transparent hover:!bg-neutral-50/75 hover:!text-neutral-950 !text-neutral-50 border-0 !shadow-none"
      >
        <XIcon />
      </IconButton>
      <div className="relative">
        <div className="relative mx-auto w-full max-w-7xl px-5 md:w-[calc(100%-10rem)]">
          <IconButton
            name={LIGHTBOX_CONST.BUTTONS.PREV}
            onClick={prevPhoto}
            additionalClasses="absolute top-1/2 -translate-y-1/2 left-10 lg:left-0 lg:-translate-x-full !bg-neutral-50/75 backdrop-blur-md !border-neutral-950/10"
          >
            <CaretLeftIcon />
          </IconButton>
          <Image
            src={CONSTANTS.PHOTOS[photoIndex]}
            alt={FULL_ADDRESS}
            width={1920}
            height={1080}
            className="w-full rounded-2xl border border-neutral-50/10 object-cover object-center shadow-lg"
          />
          <IconButton
            name={LIGHTBOX_CONST.BUTTONS.PREV}
            onClick={nextPhoto}
            additionalClasses="absolute top-1/2 -translate-y-1/2 right-10 lg:right-0 lg:translate-x-full !bg-neutral-50/75 backdrop-blur-md !border-neutral-950/10"
          >
            <CaretRightIcon />
          </IconButton>
        </div>
        <div className="absolute top-full left-1/2 mx-auto w-full -translate-x-1/2 p-5 md:w-[calc(100%-10rem)]">
          <div className="flex flex-row justify-between gap-5">
            <p className="text-neutral-50">{FULL_ADDRESS}</p>
            <p className="text-right text-neutral-50/75">
              {LIGHTBOX_CONST.SHOWING} {photoIndex + 1}/
              {CONSTANTS.PHOTOS.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
