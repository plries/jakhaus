"use client";
import {
  CaretLeftIcon,
  CaretRightIcon,
  IconContext,
} from "@phosphor-icons/react";
import { IconButton } from "@/app/components";
import { useCarousel } from "./useCarousel";
import { CAROUSEL_CONST } from "./const";

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const hook = useCarousel();

  return (
    <IconContext.Provider value={{ size: 24, weight: "light" }}>
      <div className="pointer-events-none relative col-span-full -mx-8 px-8 lg:col-span-10 lg:col-start-2">
        <IconButton
          name={CAROUSEL_CONST.BUTTONS.LEFT}
          onClick={() => {
            hook.scrollTo("left");
          }}
          additionalClasses={`absolute top-1/2 -translate-y-1/2 left-5 !text-neutral-50 !bg-neutral-900/85 backdrop-blur-md !border-neutral-50/10 ${!hook.showLeftButton ? "pointer-events-none opacity-0" : "pointer-events-auto"}`}
        >
          <CaretLeftIcon />
        </IconButton>
        <div
          ref={hook.carouselRef}
          className={`no-scrollbar flex flex-row gap-5 overflow-x-scroll overflow-y-hidden ${hook.showRightButton && hook.showLeftButton ? "mask-gradient-x" : hook.showLeftButton ? "mask-gradient-l" : hook.showRightButton ? "mask-gradient-r" : ""} `}
          onScroll={hook.calculateButtons}
        >
          {children}
        </div>
        <IconButton
          name={CAROUSEL_CONST.BUTTONS.RIGHT}
          onClick={() => {
            hook.scrollTo("right");
          }}
          additionalClasses={`absolute top-1/2 -translate-y-1/2 right-5 !text-neutral-50 !bg-neutral-900/85 backdrop-blur-md !border-neutral-50/10 pointer-events-auto ${!hook.showRightButton ? "pointer-events-none opacity-0" : "pointer-events-auto"}`}
        >
          <CaretRightIcon />
        </IconButton>
      </div>
    </IconContext.Provider>
  );
};
