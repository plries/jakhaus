"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionPropTypes } from "@/app/types";
import {
  AtIcon,
  EnvelopeIcon,
  IconContext,
  PhoneIcon,
} from "@phosphor-icons/react";
import { CONTACT_CONST } from "./const";

export const Contact = ({ CONSTANTS }: SectionPropTypes) => {
  return (
    <IconContext.Provider
      value={{ weight: "light", size: 24, className: "text-neutral-50" }}
    >
      <footer
        id="contact"
        className="mx-auto mb-5 grid w-[calc(100%-1.25rem)] grid-cols-4 gap-5 rounded-4xl bg-gradient-to-b from-neutral-700 to-neutral-950 p-10 shadow-xl md:grid-cols-8 lg:grid-cols-12 lg:px-0"
      >
        <div className="col-span-full grid grid-cols-1 gap-5 lg:col-span-10 lg:col-start-2">
          <Image
            src={CONSTANTS.AGENT.LOGO}
            alt={CONSTANTS.AGENT.BROKERAGE}
            className="h-full max-h-12 max-w-32"
            width={1920}
            height={1080}
          />
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-row items-center gap-2">
              <EnvelopeIcon />
              <Link
                className="relative text-neutral-50 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                href={`mailto:${CONSTANTS.AGENT.EMAIL}`}
                target="_blank"
              >
                {CONSTANTS.AGENT.EMAIL}
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon />
              <Link
                className="relative text-neutral-50 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                href={`tel:${CONSTANTS.AGENT.PHONE}`}
                target="_blank"
              >
                {CONSTANTS.AGENT.PHONE}
              </Link>
            </div>
            {CONSTANTS.AGENT.INSTAGRAM && (
              <div className="flex flex-row items-center gap-2">
                <AtIcon />
                <Link
                  className="relative text-neutral-50 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                  href={`https://instagram.com/${CONSTANTS.AGENT.INSTAGRAM}`}
                  target="_blank"
                >
                  {CONSTANTS.AGENT.INSTAGRAM}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-full flex flex-row items-center justify-end gap-1 lg:col-span-10 lg:col-start-2">
          <p className="text-neutral-400">{CONTACT_CONST.POWERED_BY} </p>
          <Link
            className="relative text-neutral-400 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-400 after:transition-[scale] hover:after:scale-x-100"
            href={CONTACT_CONST.JAKHAUS_LINK}
            target="_blank"
          >
            {CONTACT_CONST.JAKHAUS}
          </Link>
        </div>
      </footer>
    </IconContext.Provider>
  );
};
