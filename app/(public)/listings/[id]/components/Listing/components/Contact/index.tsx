"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionPropTypes } from "@/app/types";
import {
  AtIcon,
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { CONTACT_CONST } from "./const";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

export const Contact = ({ CONSTANTS }: SectionPropTypes) => {
  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative mx-auto mb-2.5 grid w-[calc(100%-1.25rem)] grid-cols-4 gap-5 rounded-4xl border border-neutral-800/50 p-10 shadow-xl md:grid-cols-8 lg:grid-cols-12 lg:px-0"
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
          <motion.div
            initial={MOTION_CONFIG.LEFT.INITIAL}
            whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className={`w-fit ${CONSTANTS.ASSIGNED_AGENT.LOGO_DARK ? "rounded-4xl border border-neutral-950/10 bg-neutral-50 p-5 shadow-lg" : ""}`}
          >
            <Image
              src={CONSTANTS.ASSIGNED_AGENT.LOGO_URL}
              alt={CONSTANTS.ASSIGNED_AGENT.SUBTITLE}
              className="max-w-32 object-contain drop-shadow-md"
              width={1920}
              height={1080}
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-1">
            {CONSTANTS.ASSIGNED_AGENT.EMAIL && (
              <div className="grid grid-cols-1 gap-2">
                <motion.div
                  initial={MOTION_CONFIG.LEFT.INITIAL}
                  whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
                  transition={MOTION_CONFIG.TRANSITION}
                  className="flex w-fit flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50"
                >
                  <div>
                    <EnvelopeIcon />
                  </div>
                  <Link
                    className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                    href={"mailto:" + CONSTANTS.ASSIGNED_AGENT.EMAIL}
                    target="_blank"
                  >
                    {CONSTANTS.ASSIGNED_AGENT.EMAIL}
                  </Link>
                </motion.div>
              </div>
            )}
            {CONSTANTS.ASSIGNED_AGENT.PHONE && (
              <div className="grid grid-cols-1 gap-2">
                <motion.div
                  initial={MOTION_CONFIG.LEFT.INITIAL}
                  whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
                  transition={MOTION_CONFIG.TRANSITION}
                  className="flex w-fit flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50"
                >
                  <div>
                    <PhoneIcon />
                  </div>
                  <Link
                    className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                    href={"tel:" + CONSTANTS.ASSIGNED_AGENT.PHONE}
                    target="_blank"
                  >
                    {CONSTANTS.ASSIGNED_AGENT.PHONE.replaceAll("-", ".")}
                  </Link>
                </motion.div>
              </div>
            )}
            {CONSTANTS.ASSIGNED_AGENT.WEBSITE && (
              <div className="grid grid-cols-1 gap-2">
                <motion.div
                  initial={MOTION_CONFIG.LEFT.INITIAL}
                  whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
                  transition={MOTION_CONFIG.TRANSITION}
                  className="flex w-fit flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50"
                >
                  <div>
                    <LinkIcon />
                  </div>
                  <Link
                    className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                    href={CONSTANTS.ASSIGNED_AGENT.WEBSITE}
                    target="_blank"
                  >
                    {CONSTANTS.ASSIGNED_AGENT.WEBSITE.replace("https://", "")}
                  </Link>
                </motion.div>
              </div>
            )}
            {CONSTANTS.ASSIGNED_AGENT.INSTAGRAM && (
              <div className="grid grid-cols-1 gap-2">
                <motion.div
                  initial={MOTION_CONFIG.LEFT.INITIAL}
                  whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
                  transition={MOTION_CONFIG.TRANSITION}
                  className="flex w-fit flex-row items-center gap-2 text-neutral-400 transition-colors duration-150 ease-in-out hover:text-neutral-50"
                >
                  <div>
                    <InstagramLogoIcon />
                  </div>
                  <Link
                    className="relative text-nowrap duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:after:scale-x-100"
                    href={CONSTANTS.ASSIGNED_AGENT.INSTAGRAM}
                    target="_blank"
                  >
                    {CONSTANTS.ASSIGNED_AGENT.INSTAGRAM}
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-full grid auto-rows-min grid-cols-1 gap-5 md:col-span-4 md:col-start-5 md:place-items-end lg:col-span-5 lg:col-start-7">
          <motion.div
            initial={MOTION_CONFIG.RIGHT.INITIAL}
            whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
          >
            <Image
              src={CONSTANTS.ASSIGNED_AGENT.BROKERAGE_LOGO}
              alt={CONSTANTS.ASSIGNED_AGENT.BROKERAGE_NAME}
              className="max-w-32 object-contain drop-shadow-md"
              width={1920}
              height={1080}
            />
          </motion.div>
          <motion.p
            className="text-neutral-400"
            initial={MOTION_CONFIG.RIGHT.INITIAL}
            whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
            transition={{
              ...MOTION_CONFIG.TRANSITION,
              delay: 0.2,
            }}
          >
            {CONSTANTS.ASSIGNED_AGENT.BROKERAGE_ADDRESS}
          </motion.p>
        </div>
      </div>
      <div className="col-span-full flex flex-row items-center justify-end gap-1 lg:col-span-10 lg:col-start-2">
        <p className="!text-sm text-neutral-500">
          {CONTACT_CONST.POWERED_BY}
          <Link
            href={CONTACT_CONST.LINK.HREF}
            target="_blank"
            className="relative !text-sm duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-50 after:transition-[scale] hover:text-neutral-50 hover:after:scale-x-100"
          >
            {CONTACT_CONST.LINK.TEXT}
          </Link>
        </p>
      </div>
    </footer>
  );
};
