"use client";
import Image from "next/image";
import {
  IconContext,
  BedIcon,
  BathtubIcon,
  SelectionIcon,
} from "@phosphor-icons/react";
import { SectionPropTypes } from "@/app/types";
import { OVERVIEW_CONST } from "./const";

export const Overview = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <IconContext.Provider value={{ weight: "light", size: 32 }}>
      <div className="relative" id="overview">
        <div className="mask-gradient absolute bottom-0 z-10 h-1/6 w-full bg-neutral-50/50 backdrop-blur-2xl" />
        <Image
          src={CONSTANTS.FEATURED_PHOTO}
          alt={FULL_ADDRESS || ""}
          className="aspect-video w-full rounded-t-3xl"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative grid grid-cols-4 gap-5 overflow-hidden rounded-b-3xl bg-gradient-to-b from-neutral-800 to-neutral-950 p-5 shadow-xl md:grid-cols-8 md:p-10 lg:grid-cols-12 lg:gap-10">
        <Image
          className="pointer-events-none absolute top-0 left-0 h-full w-full mix-blend-overlay"
          src="/images/overlay.jpg"
          alt="grain overlay"
          width={1920}
          height={1080}
        />
        <h1 className="col-span-full text-3xl font-medium text-neutral-50 md:text-4xl lg:col-span-8 lg:col-start-2 lg:text-6xl">
          {CONSTANTS.ADDRESS.STREET} {CONSTANTS.ADDRESS.UNIT}
          <span className="block text-xl font-normal text-neutral-400 md:text-2xl lg:text-3xl">
            {CONSTANTS.ADDRESS.CITY}, {CONSTANTS.ADDRESS.PROVINCE}{" "}
            {CONSTANTS.ADDRESS.POSTAL_CODE}
          </span>
        </h1>
        <Image
          src={CONSTANTS.AGENT.LOGO}
          alt={CONSTANTS.AGENT.BROKERAGE}
          width={1920}
          height={1080}
          className="col-span-full max-w-32 lg:col-span-2 lg:col-start-10 lg:justify-self-end"
        />
        <p className="col-span-full gap-5 text-neutral-400 md:[column-count:2] lg:col-span-10 lg:col-start-2">
          {CONSTANTS.OVERVIEW.DESCRIPTION}
        </p>

        <div className="mask-gradient-x col-span-full -mx-8 flex flex-col gap-5 overflow-x-scroll px-8 lg:col-span-10 lg:col-start-2 lg:flex-row lg:pb-5">
          {OVERVIEW_CONST.DETAILS.map((DETAIL) => (
            <div
              key={DETAIL.NAME}
              className="flex w-full flex-row rounded-xl border border-neutral-50/10 bg-neutral-800/50 shadow-xl"
            >
              <div className="grid place-items-center border-r border-r-neutral-50/10 p-8 text-neutral-50 md:p-12 lg:p-16">
                {DETAIL.NAME === "Bedroom" ? (
                  <BedIcon />
                ) : DETAIL.NAME === "Bathroom" ? (
                  <BathtubIcon />
                ) : (
                  <SelectionIcon />
                )}
              </div>
              <div className="grid w-full items-center px-8 md:px-12 lg:px-16">
                <p className="text-2xl font-medium text-neutral-50 md:text-3xl">
                  {DETAIL.NAME === "Bedroom"
                    ? CONSTANTS.OVERVIEW.BEDROOMS
                    : DETAIL.NAME === "Bathroom"
                      ? CONSTANTS.OVERVIEW.BATHROOMS
                      : CONSTANTS.OVERVIEW.SQUARE_FEET}
                  <span className="block text-sm font-normal text-neutral-400 md:text-base lg:text-lg">
                    {" "}
                    {DETAIL.NAME === "Bedroom"
                      ? CONSTANTS.OVERVIEW.BEDROOMS > 1
                        ? DETAIL.NAME + "s"
                        : DETAIL.NAME
                      : ""}
                    {DETAIL.NAME === "Bathroom"
                      ? CONSTANTS.OVERVIEW.BATHROOMS > 1
                        ? DETAIL.NAME + "s"
                        : DETAIL.NAME
                      : ""}
                    {DETAIL.NAME === "Square Ft." ? "Square Ft." : ""}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};
