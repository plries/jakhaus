"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

const SERVICE_DATA = [
  {
    title: "Listing Media",
    subtitle: "We shoot to sell.",
    description:
      "Photos, Videos, Drone, Floor Plan, 3D Scan & Listing Look Books",
    icon: "/icons/JH-Icons-01.svg",
    alt: "Listing Media Icon",
  },
  {
    title: "Print + Brand Design",
    subtitle: "Back up your first impressions.",
    description:
      "Signage, Business Cards, and Flyers to Custom Crafted Social Media Graphics",
    icon: "/icons/JH-Icons-02.svg",
    alt: "Print and Brand Design Icon",
  },
  {
    title: "Cred Clips",
    subtitle: "Build Trust.",
    description:
      "Testimonial & tip-style videos that position you as a credible resource",
    icon: "/icons/JH-Icons-03.svg",
    alt: "Cred Clips Icon",
  },
  {
    title: "The HausLink",
    subtitle: "One link, All your media.",
    description:
      "A sleek, mobile & desktop-friendly one-pager for all your media",
    icon: "/icons/JH-Icons-04.svg",
    alt: "The HausLink Icon",
  },
];

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  alt: string;
};

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="right-0 left-0 mt-3 w-full">
      <div className="relative w-full">
        {/* Mobile view: flex column */}
        <div className="flex flex-col gap-2 md:hidden">
          {SERVICE_DATA.map((service, index) => (
            <motion.div
              initial={MOTION_CONFIG.DEFAULT.INITIAL}
              whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
              transition={MOTION_CONFIG.TRANSITION}
              key={index}
              className={`relative flex min-h-[200px] flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-b p-6 shadow-inner shadow-neutral-50/50 drop-shadow-sm ${
                index === 0
                  ? "from-neutral-950 to-neutral-700"
                  : index === 1
                    ? "from-neutral-700 to-neutral-500"
                    : index === 2
                      ? "from-neutral-500 to-neutral-400"
                      : index === 3
                        ? "from-neutral-400 to-neutral-300"
                        : "from-neutral-950 to-neutral-700"
              }`}
            >
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 top-0 left-0 h-full w-full bg-cover bg-center opacity-15 mix-blend-multiply"
                  style={{ backgroundImage: "url('/images/overlay.jpg')" }}
                />
              </div>
              <div
                className={`z-10 mr-10 ${index == 3 || index == 2 ? "text-neutral-950" : "text-neutral-50"}`}
              >
                <p className="!text-2xl leading-none font-medium tracking-tighter">
                  {service.title}
                </p>
                <p className="!text-md mt-1 leading-tight font-medium tracking-tight opacity-80">
                  {service.subtitle}
                </p>
              </div>
              <p
                className={`mt-4 mr-16 !text-sm ${index == 3 || index == 2 ? "text-neutral-950" : "text-neutral-50"} opacity-75`}
              >
                {service.description}
              </p>
              <div className="absolute right-[-60] w-[150px]">
                <div className="opacity-15 invert">
                  <Image
                    className={`${index == 3 || index == 2 ? "invert" : ""}`}
                    src={service.icon}
                    alt={service.alt}
                    width={200}
                    height={200}
                    style={{ width: "auto", height: "150px" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop view: stacked cards */}
        <motion.div
          initial={MOTION_CONFIG.HEADER.INITIAL}
          whileInView={MOTION_CONFIG.HEADER.ANIMATE}
          transition={MOTION_CONFIG.TRANSITION}
          className="hidden h-[560px] md:block"
        >
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              serviceData={service}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const ServiceCard = ({
  serviceData,
  index,
  setActiveIndex,
  activeIndex,
}: {
  serviceData: ServiceCardProps;
  index: number;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}) => {
  return (
    <div
      className={`absolute top-0 flex h-full max-h-[620px] min-h-[620px] max-w-[450px] min-w-[450px] cursor-pointer flex-col justify-center overflow-hidden rounded-[48px] border border-neutral-50/75 bg-gradient-to-b p-8 shadow-inner shadow-neutral-50/50 drop-shadow-sm transition-all duration-500 ease-in-out hover:rotate-4 ${index === activeIndex ? "!-rotate-2" : ""} ${
        index === 0
          ? "rotate-2 from-neutral-950 to-neutral-700"
          : index === 1
            ? "rotate-2 from-neutral-700 to-neutral-500"
            : index === 2
              ? "rotate-2 from-neutral-500 to-neutral-400"
              : index === 3
                ? "rotate-2 from-neutral-400 to-neutral-300"
                : "from-neutral-950 to-neutral-700"
      }`}
      style={{
        left:
          index === activeIndex
            ? `0%`
            : `${(index > activeIndex ? index : index + 1) * 33.25}%`,
        transform:
          index === activeIndex
            ? `translateX(0%)`
            : `translateX(-${(index > activeIndex ? index : index + 1) * 33.25}%)`,
        zIndex:
          index === activeIndex
            ? 5
            : 5 - (index > activeIndex ? index : index + 1),
      }}
      onClick={() => setActiveIndex(index)}
    >
      <div
        className={`z-10 mt-8 ${index == 3 || index == 2 ? "text-neutral-950" : "text-neutral-50"}`}
      >
        <p className="!text-2xl font-medium tracking-tighter md:!text-[2rem] lg:!text-4xl">
          {serviceData.title}
        </p>
        <p className="mt-1 !text-lg font-medium tracking-tight opacity-80">
          {serviceData.subtitle}
        </p>
        <p
          className={`mt-4 border-l-2 ${index == 3 || index == 2 ? "border-neutral-950/50 text-neutral-950" : "border-neutral-50/50 text-neutral-50"} pl-4 opacity-75`}
        >
          {serviceData.description}
        </p>
      </div>
      <div className="absolute top-5 right-[-25]">
        <div className="opacity-75 invert">
          <Image
            className={`${index == 3 || index == 2 ? "invert" : ""}`}
            src={serviceData.icon}
            alt={serviceData.alt}
            width={200}
            height={200}
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-15 mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
      </div>
    </div>
  );
};
