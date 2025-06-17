"use client";
import { JakhausLogo } from "@/public/icons";
import {
  IconContext,
  BedIcon,
  BathtubIcon,
  SelectionIcon,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <IconContext.Provider value={{ weight: "thin", size: 24 }}>
      <div className="mx-5 grid h-fit w-[calc(100%-1.25rem)] -rotate-1 cursor-pointer auto-rows-min grid-cols-1 overflow-hidden rounded-3xl border border-neutral-300 shadow-2xl shadow-neutral-950/10 transition-all duration-300 ease-in-out hover:scale-90 hover:rotate-0 hover:shadow-xl">
        <div className="border-b border-b-neutral-300 p-5 text-neutral-950 md:p-10">
          <JakhausLogo width={"100%"} />
        </div>
        <div className="grid h-full w-full grid-cols-3">
          <div className="flex h-full w-full flex-col gap-2 border-r border-r-neutral-300 p-5 text-neutral-600 md:flex-row">
            <BedIcon />
            <BathtubIcon />
            <SelectionIcon />
          </div>
          <div className="h-full w-full border-r border-r-neutral-300" />
          <div className="grid h-full w-full grid-rows-3">
            <div className="h-full border-b border-b-neutral-300 p-5 md:p-10" />
            <div className="h-full border-b border-b-neutral-300 p-5 md:p-10" />
            <div className="h-full p-5 text-right text-neutral-600 md:p-10">
              coming soon...
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
