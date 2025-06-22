"use client";
import { IconContext } from "@phosphor-icons/react";
import { Navbar } from "@/app/components";
import {
  Overview,
  Photos,
  Video,
  FloorPlan,
  VirtualTour,
  Contact,
} from "./components";
import { SectionPropTypes } from "@/app/types";
import { NAVBAR_LISTING_CONST } from "./const";

export const Listing = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <IconContext.Provider value={{ size: 24, weight: "light" }}>
      <Navbar
        CONSTANTS={CONSTANTS}
        LINKS={NAVBAR_LISTING_CONST.LINKS}
        dashboard={false}
      />
      <Overview CONSTANTS={CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
      <div className="grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full grid grid-cols-4 gap-5 py-5 md:grid-cols-8 lg:col-span-10 lg:col-start-2 lg:mx-2.5 lg:grid-cols-10 lg:border-x lg:border-x-neutral-300 lg:py-10">
          <Photos CONSTANTS={CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          {CONSTANTS.OTHER_ATTACHMENTS?.VIDEO_LINK && (
            <Video CONSTANTS={CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          )}
          {CONSTANTS.OTHER_ATTACHMENTS?.FLOOR_PLAN && (
            <FloorPlan CONSTANTS={CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          )}
          {CONSTANTS.OTHER_ATTACHMENTS?.SCAN_LINK && (
            <VirtualTour CONSTANTS={CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          )}
        </div>
      </div>
      <Contact CONSTANTS={CONSTANTS} />
    </IconContext.Provider>
  );
};
