import { SectionPropTypes } from "@/app/types";
import { SectionHeading, IconButton } from "@/app/components";
import { PHOTOS_CONST } from "./const";
import { CaretRightIcon } from "@phosphor-icons/react";
import { Lightbox } from "../";
import { useLightbox } from "../Lightbox/useLightbox";

export const Photos = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  const hook = useLightbox({ CONSTANTS });

  return (
    <>
      <section
        className="col-span-full grid scroll-m-20 grid-cols-4 gap-5 pt-5 pb-10 md:grid-cols-8 lg:grid-cols-12"
        id="photos"
      >
        <SectionHeading>{PHOTOS_CONST.HEADING}</SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-5 p-5">
          <div className="flex flex-col gap-5 lg:flex-row">
            {CONSTANTS.PHOTOS.slice(0, 2).map((PHOTO, index) => (
              <div
                key={index}
                className="relative h-96 w-full overflow-hidden rounded-2xl border border-neutral-300 bg-cover bg-center shadow-lg duration-150 ease-in-out hover:brightness-90 lg:first:w-3/5"
                style={{
                  backgroundImage: `url(${PHOTO})`,
                }}
              >
                <button
                  className="h-full w-full cursor-pointer"
                  onClick={() => hook.openLightbox(index)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            {CONSTANTS.PHOTOS.slice(2, 4).map((PHOTO, index) => (
              <div
                key={index}
                className="relative h-96 w-full overflow-hidden rounded-2xl border border-neutral-300 bg-cover bg-center shadow-lg duration-150 ease-in-out hover:brightness-90 lg:last:w-3/5"
                style={{
                  backgroundImage: `url(${PHOTO})`,
                }}
              >
                <button
                  className="h-full w-full cursor-pointer"
                  onClick={() => hook.openLightbox(index + 2)}
                />
                {index === 1 && (
                  <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-neutral-950/50 backdrop-blur-xs">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <IconButton
                        onClick={() => hook.openLightbox(index + 2)}
                        name={PHOTOS_CONST.VIEW_ALL.NAME}
                      >
                        <CaretRightIcon />
                      </IconButton>
                      <p className="text-neutral-50/75">
                        {PHOTOS_CONST.VIEW_ALL.NAME}
                        <span className="font-medium text-neutral-50">
                          {" "}
                          {CONSTANTS.PHOTOS.length}{" "}
                        </span>
                        {PHOTOS_CONST.VIEW_ALL.PHOTOS}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        CONSTANTS={CONSTANTS}
        FULL_ADDRESS={FULL_ADDRESS || ""}
        isOpen={hook.isOpen}
        closeLightbox={hook.closeLightbox}
        photoIndex={hook.photoIndex}
        nextPhoto={hook.nextPhoto}
        prevPhoto={hook.prevPhoto}
      />
    </>
  );
};
