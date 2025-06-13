"use client";
import Image from "next/image";
import {
  IconContext,
  BedIcon,
  BathtubIcon,
  SelectionIcon,
} from "@phosphor-icons/react";
import { OverviewPropTypes } from "./types";
import { OVERVIEW_CONST } from "./const";

export const Overview = ({ constants, fullAddress }: OverviewPropTypes) => {
  const words = constants.overview.description.split(" ");
  const mid = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, mid).join(" ");
  const secondHalf = words.slice(mid).join(" ");

  return (
    <IconContext.Provider value={{ weight: "light", size: 32 }}>
      <div className="relative">
        <div className="mask-gradient absolute bottom-0 z-10 h-1/6 w-full bg-neutral-50/50 backdrop-blur-2xl" />
        <Image
          src={constants.featuredPhoto}
          alt={fullAddress}
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
          {constants.address.street} {constants.address.unit}
          <span className="block text-xl font-normal text-neutral-400 md:text-2xl lg:text-3xl">
            {constants.address.city}, {constants.address.province}{" "}
            {constants.address.postal}
          </span>
        </h1>
        <Image
          src={constants.agent.logo}
          alt={constants.agent.brokerage}
          width={1920}
          height={1080}
          className="col-span-full max-w-32 lg:col-span-2 lg:col-start-10 lg:justify-self-end"
        />
        <p className="col-span-full grid grid-cols-1 gap-5 text-neutral-400 md:grid-cols-2 lg:col-span-10 lg:col-start-2">
          <span>{firstHalf}</span>
          <span>{secondHalf}</span>
        </p>
        <div className="col-span-full flex flex-row gap-5 lg:col-span-10 lg:col-start-2">
          {OVERVIEW_CONST.DETAILS.map((detail) => (
            <div
              key={detail.name}
              className="flex w-full flex-row rounded-xl border border-neutral-50/10 bg-neutral-800/50 shadow-xl"
            >
              <div className="grid place-items-center border-r border-r-neutral-50/10 p-8 text-neutral-50 md:p-12 lg:p-16">
                {detail.name === "Bedroom" ? (
                  <BedIcon />
                ) : detail.name === "Bathroom" ? (
                  <BathtubIcon />
                ) : (
                  <SelectionIcon />
                )}
              </div>
              <div className="grid w-full place-items-center">
                <p className="text-2xl font-medium text-neutral-50 md:text-3xl">
                  {detail.name === "Bedroom"
                    ? constants.overview.bedrooms
                    : detail.name === "Bathroom"
                      ? constants.overview.bathrooms
                      : constants.overview.sqft}
                  <span className="block text-sm font-normal text-neutral-400 md:text-base lg:text-lg">
                    {" "}
                    {detail.name}
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
