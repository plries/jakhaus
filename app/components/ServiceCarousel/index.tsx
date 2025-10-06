"use client";
import { useState } from "react";
import {
  ClubIcon,
  HeartIcon,
  SpadeIcon,
  DiamondIcon,
  JakhausLogo,
} from "@/public/icons";
import Image from "next/image";

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
    subtitle: "Back up your first impressions",
    description:
      "Signage, Business Cards, and flyers to custom crafted social media graphics",
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
    <div className="right-0 left-0 w-full px-4">
      <div className="relative w-full">
        {/* Mobile view: flex column */}
        <div className="flex flex-col gap-4 md:hidden">
          {SERVICE_DATA.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-b p-6 ${
                index === 0
                  ? "from-neutral-950 to-neutral-700 text-white"
                  : index === 1
                    ? "from-neutral-700 to-neutral-500 text-white"
                    : index === 2
                      ? "from-neutral-400 to-neutral-200 text-neutral-900"
                      : index === 3
                        ? "from-neutral-100 to-neutral-600"
                        : "from-neutral-950 to-neutral-700 text-white"
              }`}
            >
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 top-0 left-0 h-full w-full bg-cover bg-center opacity-50 mix-blend-multiply"
                  style={{ backgroundImage: "url('/images/overlay.jpg')" }}
                />
              </div>
              <div className="z-10">
                <div className="text-2xl font-semibold">{service.title}</div>
                <div className="text-xl font-light">{service.subtitle}</div>
              </div>
              <div className="mt-auto pt-4 text-sm opacity-90">
                {service.description}
              </div>
              <div className="absolute top-4 right-2">
                <div className="opacity-15 invert">
                  <Image
                    className={`${index == 3 || index == 2 ? "invert" : ""}`}
                    src={service.icon}
                    alt={service.alt}
                    width={200}
                    height={200}
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view: stacked cards */}
        <div className="hidden h-[560px] md:block">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              serviceData={service}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          ))}
        </div>
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
      className={`absolute top-0 flex h-full max-h-[620px] min-h-[620px] max-w-[450px] min-w-[450px] cursor-pointer flex-col justify-center overflow-hidden rounded-[48px] bg-gradient-to-b p-8 shadow-inner shadow-neutral-200/100 transition-all duration-500 ease-in-out ${
        index === 0
          ? "from-neutral-950 to-neutral-700 text-white"
          : index === 1
            ? "from-neutral-700 to-neutral-500 text-white"
            : index === 2
              ? "from-neutral-400 to-neutral-200 text-neutral-900"
              : index === 3
                ? "from-neutral-100 to-neutral-600"
                : "from-neutral-950 to-neutral-700 text-white"
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
      <div className="z-10 mt-8">
        <div className="text-5xl font-semibold tracking-tight">
          {serviceData.title}
        </div>
        <div className="mt-2 text-4xl font-light tracking-tight">
          {serviceData.subtitle}
        </div>
        <div className="mt-2 text-lg leading-tight opacity-80">
          {serviceData.description}
        </div>
      </div>
      <div className="absolute top-5 left-[-50]">
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
