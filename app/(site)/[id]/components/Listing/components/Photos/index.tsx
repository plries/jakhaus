import { SectionPropTypes } from "@/app/types";
import { SectionHeading } from "../SectionHeading";
import { PHOTOS_CONST } from "./const";
import { Button } from "@/components/ui/button";
import { CaretRightIcon } from "@phosphor-icons/react";

export const Photos = ({ CONSTANTS, FULL_ADDRESS }: SectionPropTypes) => {
  return (
    <section className="contents">
      <SectionHeading>{PHOTOS_CONST.HEADING}</SectionHeading>
      <div className="col-span-full grid grid-cols-1 gap-5 p-5">
        <div className="flex flex-col gap-5 lg:flex-row">
          {CONSTANTS.PHOTOS.slice(0, 2).map((PHOTO, index) => (
            <div
              key={index}
              className="relative h-96 w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-300 bg-cover bg-center shadow-lg duration-300 ease-in-out hover:brightness-90 lg:first:w-3/5"
              style={{
                backgroundImage: `url(${PHOTO})`,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {CONSTANTS.PHOTOS.slice(2, 4).map((PHOTO, index) => (
            <div
              key={index}
              className="group relative h-96 w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-300"
            >
              <div
                className="h-full w-full bg-cover bg-center shadow-lg duration-300 ease-in-out group-hover:brightness-90"
                style={{
                  backgroundImage: `url(${PHOTO})`,
                }}
              />
              {index === 1 && (
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-neutral-950/50 backdrop-blur-xs">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="size-11 cursor-pointer"
                    >
                      <CaretRightIcon className="text-neutral-950" />
                    </Button>
                    <p className="text-neutral-50">
                      {PHOTOS_CONST.VIEW_ALL.NAME}
                      <span className="font-medium">
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
  );
};
