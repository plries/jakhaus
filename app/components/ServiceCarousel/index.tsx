"use client";
import { useState } from "react";
import Image from "next/image";

const SERVICE_DATA = [
  {
    title: "Photography",
    subtitle: "Media",
    description:
      "High-quality real estate photography to showcase your property.",
    icon: "heart",
  },
  {
    title: "Videography",
    subtitle: "Media",
    description:
      "Professional video tours to give potential buyers a virtual walkthrough.",
    icon: "spade",
  },
  {
    title: "3D Scans",
    subtitle: "Media",
    description:
      "Detailed floor plans to help buyers visualize the layout of your property.",
    icon: "club",
  },
  {
    title: "Feature Sheets",
    subtitle: "Consultation",
    description:
      "Immersive virtual tours for an interactive viewing experience.",
    icon: "diamond",
  },
];

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dataLength = SERVICE_DATA.length;
  return (
    <div className="relative min-h-[560px] w-fit">
      {SERVICE_DATA.map((service, index) => (
        <ServiceCard
          key={index}
          serviceData={service}
          dataLength={dataLength}
          index={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

const ServiceCard = ({
  serviceData,
  index,
  setActiveIndex,
  dataLength,
}: {
  serviceData: ServiceCardProps;
  index: number;
  setActiveIndex: (index: number) => void;
  dataLength: number;
}) => {
  return (
    <div
      className={`absolute flex h-[560px] w-[450px] flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg`}
      style={{
        transform: `translateX(${(index * 100) / dataLength}%)`,
        left: `${(index * 100) / dataLength}%`,
      }}
      onClick={() => setActiveIndex(index)}
    >
      <div className="mb-4">
        <Image
          src={`/icons/${serviceData.icon}.svg`}
          alt={serviceData.title}
          width={50}
          height={50}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        {serviceData.title}
      </h3>
      <p className="text-sm text-gray-600">{serviceData.subtitle}</p>
      <p className="mt-2 text-gray-500">{serviceData.description}</p>
    </div>
  );
};
