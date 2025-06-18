import Image from "next/image";
import { SectionPropTypes } from "@/app/types";
import { SectionHeading } from "@/app/components";
import { FLOOR_PLAN_CONST } from "./const";

export const FloorPlan = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <section
      className="col-span-full grid scroll-m-20 grid-cols-4 gap-5 pt-5 pb-10 md:grid-cols-8 lg:grid-cols-12"
      id="floorPlan"
    >
      <SectionHeading>{FLOOR_PLAN_CONST.HEADING}</SectionHeading>
      <div className="col-span-full p-5">
        <Image
          className="rounded-2xl border border-neutral-300 shadow-lg"
          src={CONSTANTS.FLOOR_PLAN || ""}
          alt={FULL_ADDRESS + FLOOR_PLAN_CONST.ALT}
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};
