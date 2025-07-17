"use client";
import { useState } from "react";
import {
  ClubIcon,
  HeartIcon,
  SpadeIcon,
  DiamondIcon,
  JakhausLogo,
} from "@/public/icons";

const SERVICE_DATA = [
  {
    title: "Photography",
    subtitle: "Media",
    description:
      "High-quality real estate photography to showcase your property.",
    icon: HeartIcon,
  },
  {
    title: "Videography",
    subtitle: "Media",
    description:
      "Professional video tours to give potential buyers a virtual walkthrough.",
    icon: SpadeIcon,
  },
  {
    title: "3D Scans",
    subtitle: "Media",
    description:
      "Detailed floor plans to help buyers visualize the layout of your property.",
    icon: ClubIcon,
  },
  {
    title: "Feature Sheets",
    subtitle: "Consultation",
    description:
      "Immersive virtual tours for an interactive viewing experience.",
    icon: DiamondIcon,
  },
];

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ width?: number }>;
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
              className={`flex flex-col rounded-xl p-6 ${
                index === 3
                  ? "bg-neutral-950 text-white"
                  : index === 2
                    ? "bg-neutral-700 text-white"
                    : index === 1
                      ? "bg-neutral-200 text-neutral-800"
                      : "bg-neutral-100 text-neutral-600"
              }`}
            >
              <div className="mb-4 flex justify-between">
                <JakhausLogo width={150} />
                <service.icon width={36} />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-lg font-semibold">{service.subtitle}</div>
                <div className="text-2xl font-semibold">{service.title}</div>
              </div>
              <div className="mt-auto pt-4 text-sm opacity-90">
                {service.description}
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
      className={`absolute top-0 h-full min-h-[560px] min-w-[450px] cursor-pointer rounded-xl p-8 transition-all duration-500 ease-in-out ${
        index === 3
          ? "bg-neutral-950 text-white"
          : index === 2
            ? "bg-neutral-700 text-white"
            : index === 1
              ? "bg-neutral-200 text-neutral-800"
              : index === 0
                ? "bg-neutral-100 text-neutral-600"
                : "bg-neutral-950 text-white"
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
      <div className="mb-4 flex justify-between">
        <JakhausLogo width={200} />

        <serviceData.icon width={48} />
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="text-xl font-semibold">{serviceData.subtitle}</div>
        <div className="text-4xl font-semibold">{serviceData.title}</div>
      </div>
      <div className="mb-4 flex items-center justify-center py-8">
        <serviceData.icon width={250} />
      </div>
      <div>
        <div className="mt-2 opacity-90">{serviceData.description}</div>
      </div>
    </div>
  );
};
