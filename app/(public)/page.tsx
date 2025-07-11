"use client";
import { JakhausLogo } from "@/public/icons";
import {
  IconContext,
  ClubIcon,
  CameraIcon,
  HouseLineIcon,
} from "@phosphor-icons/react";
import { COMING_SOON_CONST } from "./const";

export default function Home() {
  return (
    <IconContext.Provider value={{ weight: "thin", size: 16 }}>
      <div className="grid min-h-screen w-full place-items-center">
        <div className="mx-5 grid w-[calc(100%-2.5rem)] -rotate-1 auto-rows-min grid-cols-1 overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-50 shadow-2xl shadow-neutral-950/10 transition-all duration-700 ease-in-out hover:scale-90 hover:rotate-0 hover:shadow-xl">
          <div className="border-b border-b-neutral-300 p-5 text-neutral-950 md:p-10">
            <p className="sr-only">{COMING_SOON_CONST.CAPTION}</p>
            <JakhausLogo width={"100%"} />
          </div>
          <div className="grid h-full w-full grid-cols-2 md:grid-cols-3">
            <div className="flex h-full w-full flex-row gap-1 border-r border-r-neutral-300 p-5 text-neutral-600">
              <CameraIcon />
              <ClubIcon />
              <HouseLineIcon />
            </div>
            <div className="hidden h-full w-full border-r border-r-neutral-300 md:block" />
            <div className="grid h-full w-full grid-rows-2 md:grid-rows-3">
              <div className="h-full border-b border-b-neutral-300 p-5 md:p-10" />
              <div className="hidden h-full border-b border-b-neutral-300 p-5 md:block md:p-10" />
              <div className="h-full p-5 md:p-10">
                <p className="text-right text-neutral-600">
                  {COMING_SOON_CONST.CAPTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
