"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionPropTypes } from "@/app/types";
import { AtIcon, EnvelopeIcon, PhoneIcon } from "@phosphor-icons/react";
import { CONTACT_CONST } from "./const";

export const Contact = ({ CONSTANTS }: SectionPropTypes) => {
  return (
    <footer
      id="contact"
      className="relative mx-auto mb-5 grid w-[calc(100%-1.25rem)] grid-cols-4 gap-5 rounded-4xl p-10 shadow-xl md:grid-cols-8 lg:grid-cols-12 lg:px-0"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full rounded-4xl bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
        <div className="h-full w-full rounded-4xl bg-gradient-to-b from-neutral-700 to-neutral-950" />
      </div>
      <div className="col-span-full grid grid-cols-1 gap-5 lg:col-span-10 lg:col-start-2">
        <Image
          src={CONSTANTS.AGENT.LOGO}
          alt={CONSTANTS.AGENT.BROKERAGE}
          className="h-full max-h-12 max-w-32"
          width={1920}
          height={1080}
        />
        <div className="grid grid-cols-1 gap-2">
          <div className="flex flex-row items-center gap-2 text-neutral-50">
            <EnvelopeIcon />
            <Link
              className="relative duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
              href={`mailto:${CONSTANTS.AGENT.EMAIL}`}
              target="_blank"
            >
              {CONSTANTS.AGENT.EMAIL}
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2 text-neutral-50">
            <PhoneIcon />
            <Link
              className="relative duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
              href={`tel:${CONSTANTS.AGENT.PHONE}`}
              target="_blank"
            >
              {CONSTANTS.AGENT.PHONE}
            </Link>
          </div>
          {CONSTANTS.AGENT.INSTAGRAM && (
            <div className="flex flex-row items-center gap-2 text-neutral-50">
              <AtIcon />
              <Link
                className="relative duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
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
  );
};
