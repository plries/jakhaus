"use client";
import Image from "next/image";
import { XIcon } from "@phosphor-icons/react";
import { JakhausLogo } from "@/public/icons";
import { NAVBAR_CONST } from "./const";
import { SectionPropTypes } from "../../types";
import Link from "next/link";

export const Navbar = ({ CONSTANTS }: SectionPropTypes) => {
  return (
    <div className="sticky top-5 z-50 mx-auto mb-10 flex w-fit flex-row items-center justify-center gap-3 rounded-3xl bg-neutral-950 p-4 shadow-xl">
      <div className="flex h-fit items-center justify-center gap-2">
        <JakhausLogo />
        <XIcon size={16} className="text-neutral-50" />
        <Image
          src={CONSTANTS.AGENT.LOGO}
          alt={CONSTANTS.AGENT.BROKERAGE}
          className="h-full max-h-12 max-w-24"
          width={1920}
          height={1080}
        />
      </div>
      <div className="mx-4 h-12 w-[1px] bg-neutral-600" />
      {NAVBAR_CONST.LINKS.filter((LINK) => {
        return !LINK.KEY || CONSTANTS[LINK.KEY as keyof typeof CONSTANTS];
      }).map((LINK) => (
        <Link
          key={LINK.KEY}
          href={LINK.HREF}
          className="px-4 py-2 text-nowrap text-neutral-50 hover:text-neutral-200"
        >
          {LINK.NAME}
        </Link>
      ))}
    </div>
  );
};
