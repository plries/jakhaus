import { motion } from "motion/react";
import { SectionPropTypes } from "@/app/types";
import { SectionHeading } from "@/app/components";
import { VIDEO_CONST } from "./const";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

export const Video = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <section
      className="col-span-full grid scroll-m-20 grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12"
      id="videoTour"
    >
      <SectionHeading>{VIDEO_CONST.HEADING}</SectionHeading>
      <motion.div
        initial={MOTION_CONFIG.DEFAULT.INITIAL}
        whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full p-5"
      >
        <iframe
          className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-300 bg-black shadow-lg"
          src={CONSTANTS.VIDEO_LINK}
          title={VIDEO_CONST.HEADING + " of " + FULL_ADDRESS}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
};
