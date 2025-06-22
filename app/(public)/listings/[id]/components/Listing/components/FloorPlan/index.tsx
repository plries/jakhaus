import Image from "next/image";
import { motion } from "motion/react";
import { SectionPropTypes } from "@/app/types";
import { SectionHeading } from "@/app/components";
import { FLOOR_PLAN_CONST } from "./const";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

export const FloorPlan = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <section
      className="col-span-full grid scroll-m-20 grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12"
      id="floorPlan"
    >
      <SectionHeading>{FLOOR_PLAN_CONST.HEADING}</SectionHeading>
      <div className="col-span-full grid auto-rows-min grid-cols-1 gap-5 p-5">
        {CONSTANTS.OTHER_ATTACHMENTS?.FLOOR_PLAN?.map((floorPlan, index) => (
          <motion.div
            key={index}
            initial={MOTION_CONFIG.DEFAULT.INITIAL}
            whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
          >
            <Image
              className="rounded-2xl border border-neutral-300 shadow-lg"
              src={floorPlan || ""}
              alt={FLOOR_PLAN_CONST.ALT + " " + FULL_ADDRESS}
              width={1920}
              height={1080}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
