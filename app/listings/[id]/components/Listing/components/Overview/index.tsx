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
    <IconContext.Provider value={{ weight: "thin", size: 32 }}>
      <section className="mx-auto w-[calc(100%-1.25rem)] overflow-hidden rounded-4xl border border-neutral-800/50 shadow-xl">
        <div className="relative" id="overview">
          <div className="mask-gradient absolute bottom-0 z-10 h-1/6 w-full bg-neutral-50/50 backdrop-blur-2xl" />
          <Image
            src={CONSTANTS.FEATURED_PHOTO}
            alt={FULL_ADDRESS || ""}
            className="aspect-video w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative border-t border-neutral-800/50">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-0 left-0 h-full w-full bg-cover bg-center mix-blend-multiply"
              style={{ backgroundImage: "url('/images/overlay.jpg')" }}
            />
            <div className="h-full w-full bg-gradient-to-b from-neutral-700 to-neutral-950" />
          </div>
          <div className="z-10 grid grid-cols-4 gap-5 p-5 md:grid-cols-8 md:p-10 lg:grid-cols-12 lg:gap-10 lg:px-0">
            <h1 className="col-span-full text-3xl font-medium tracking-tighter text-neutral-50 md:text-4xl lg:col-span-8 lg:col-start-2 lg:text-6xl">
              {CONSTANTS.ADDRESS.STREET} {CONSTANTS.ADDRESS.UNIT}
              <span className="block text-xl font-normal tracking-tight text-neutral-400 md:text-2xl lg:text-3xl">
                {CONSTANTS.ADDRESS.CITY}, {CONSTANTS.ADDRESS.PROVINCE}{" "}
                {CONSTANTS.ADDRESS.POSTAL_CODE}
              </span>
            </h1>
            <Image
              src={CONSTANTS.AGENT.LOGO}
              alt={CONSTANTS.AGENT.BROKERAGE}
              width={1920}
              height={1080}
              className="col-span-full max-h-12 max-w-32 lg:col-span-2 lg:col-start-10 lg:justify-self-end"
            />
            <div className="mask-gradient-x col-span-full -mx-8 flex flex-col gap-5 overflow-x-scroll px-8 lg:col-span-10 lg:col-start-2 lg:flex-row lg:pb-5">
              {OVERVIEW_CONST.DETAILS.map((DETAIL) => (
                <div
                  key={DETAIL.NAME}
                  className="flex w-full flex-row rounded-xl border border-neutral-50/10 bg-neutral-800/50 shadow-inner shadow-neutral-50/10"
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
                    <p className="!text-2xl font-medium tracking-tighter text-nowrap text-neutral-50 md:!text-3xl">
                      {DETAIL.NAME === "Bedroom"
                        ? CONSTANTS.OVERVIEW.BEDROOMS
                        : DETAIL.NAME === "Bathroom"
                          ? CONSTANTS.OVERVIEW.BATHROOMS
                          : CONSTANTS.OVERVIEW.SQUARE_FEET}
                      <span className="block text-sm font-normal tracking-tight text-neutral-400">
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
        </div>
      </section>
    </IconContext.Provider>
  );
};
