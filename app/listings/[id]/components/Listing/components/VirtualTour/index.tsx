import { SectionPropTypes } from "@/app/types";
import { SectionHeading } from "@/app/components";
import { VIRTUAL_TOUR_CONST } from "./const";

export const VirtualTour = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <section
      className="col-span-full grid scroll-m-20 grid-cols-4 gap-5 pt-5 pb-10 md:grid-cols-8 lg:grid-cols-12"
      id="virtualTour"
    >
      <SectionHeading>{VIRTUAL_TOUR_CONST.HEADING}</SectionHeading>
      <div className="col-span-full p-5">
        <iframe
          className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-300 shadow-lg"
          src={CONSTANTS.SCAN_LINK}
          title={VIRTUAL_TOUR_CONST.HEADING + " of " + FULL_ADDRESS}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
};
