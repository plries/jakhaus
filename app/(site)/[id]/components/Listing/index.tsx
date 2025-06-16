"use client";
import { IconContext } from "@phosphor-icons/react";
import {
  NavBar,
  Overview,
  Photos,
  Video,
  FloorPlan,
  VirtualTour,
  Contact,
} from "./components";
import { useListing } from "./useListing";

export const Listing = () => {
  const hook = useListing();

  const FULL_ADDRESS = `${hook.CONSTANTS.ADDRESS.STREET} ${hook.CONSTANTS.ADDRESS.UNIT} ${hook.CONSTANTS.ADDRESS.CITY}, ${hook.CONSTANTS.ADDRESS.PROVINCE} ${hook.CONSTANTS.ADDRESS.POSTAL_CODE}`;

  return (
    <IconContext.Provider value={{ size: 24, weight: "light" }}>
      <NavBar CONSTANTS={hook.CONSTANTS} />
      <Overview CONSTANTS={hook.CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
      <div className="grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full grid grid-cols-4 gap-5 border-x border-x-neutral-300 pt-5 pb-10 md:grid-cols-8 lg:col-span-10 lg:col-start-2 lg:grid-cols-10">
          <Photos CONSTANTS={hook.CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          {hook.CONSTANTS.VIDEO_LINK && (
            <Video CONSTANTS={hook.CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          )}
          {hook.CONSTANTS.FLOOR_PLAN && (
            <FloorPlan CONSTANTS={hook.CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
          )}
          {hook.CONSTANTS.SCAN_LINK && (
            <VirtualTour
              CONSTANTS={hook.CONSTANTS}
              FULL_ADDRESS={FULL_ADDRESS}
            />
          )}
        </div>
      </div>
      <Contact CONSTANTS={hook.CONSTANTS} />
    </IconContext.Provider>
  );
};
