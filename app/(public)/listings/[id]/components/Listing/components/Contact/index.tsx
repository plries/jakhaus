"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionPropTypes } from "@/app/types";
import {
  AtIcon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { CONTACT_CONST } from "./const";

export const Contact = ({ CONSTANTS }: SectionPropTypes) => {
  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative mx-auto mb-5 grid w-[calc(100%-1.25rem)] grid-cols-4 gap-5 rounded-4xl border border-neutral-800/50 p-10 shadow-xl md:grid-cols-8 lg:grid-cols-12 lg:px-0"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full rounded-4xl bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
        <div className="h-full w-full rounded-4xl bg-gradient-to-b from-neutral-700 to-neutral-950" />
      </div>
      <div className="col-span-full grid auto-rows-min grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-ful grid auto-rows-min grid-cols-1 gap-5 md:col-span-4 lg:col-span-5 lg:col-start-2">
          <div
            className={`w-fit ${CONSTANTS.AGENT.LOGO_DARK ? "rounded-4xl border border-neutral-950/10 bg-neutral-50/75 p-5 shadow-inner shadow-neutral-50/75" : ""}`}
          >
            <Image
              src={CONSTANTS.AGENT.LOGO}
              alt={CONSTANTS.AGENT.SUBTITLE}
              className="max-w-32 object-contain drop-shadow-md"
              width={1920}
              height={1080}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50">
              <div>
                <EnvelopeIcon />
              </div>
              <Link
                className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                href={`mailto:${CONSTANTS.AGENT.EMAIL}`}
                target="_blank"
              >
                {CONSTANTS.AGENT.EMAIL}
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50">
              <div>
                <PhoneIcon />
              </div>
              <Link
                className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                href={`tel:${CONSTANTS.AGENT.PHONE}`}
                target="_blank"
              >
                {CONSTANTS.AGENT.PHONE.replaceAll("-", ".")}
              </Link>
            </div>
            {CONSTANTS.AGENT.WEBSITE && (
              <div className="flex flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50">
                <div>
                  <LinkIcon />
                </div>
                <Link
                  className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                  href={CONSTANTS.AGENT.WEBSITE}
                  target="_blank"
                >
                  {CONSTANTS.AGENT.WEBSITE.replace("https://", "")}
                </Link>
              </div>
            )}
            {CONSTANTS.AGENT.INSTAGRAM && (
              <div className="flex flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50">
                <div>
                  <AtIcon />
                </div>
                <Link
                  className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                  href={`https://instagram.com/${CONSTANTS.AGENT.INSTAGRAM}`}
                  target="_blank"
                >
                  {CONSTANTS.AGENT.INSTAGRAM}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-full grid auto-rows-min grid-cols-1 gap-5 md:col-span-4 md:col-start-5 md:place-items-end lg:col-span-5 lg:col-start-7">
          <Image
            src={CONSTANTS.BROKERAGE.LOGO}
            alt={CONSTANTS.BROKERAGE.TITLE}
            className="max-w-32 object-contain drop-shadow-md"
            width={1920}
            height={1080}
          />
          <p className="text-neutral-400">{CONSTANTS.BROKERAGE.ADDRESS}</p>
        </div>
      </div>
      <div className="col-span-full flex flex-row items-center justify-end gap-1 lg:col-span-10 lg:col-start-2">
        <p className="!text-sm text-neutral-500">{CONTACT_CONST.POWERED_BY}</p>
      </div>
    </footer>
  );
};
