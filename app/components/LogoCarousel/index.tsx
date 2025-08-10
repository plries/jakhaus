"use client";

import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { JakhausLogo } from "@/public/icons";

const LOGO_IMAGES = [
  {
    src: "/images/logos/Client-Logos_A-RE.svg",
    alt: "Client Logo A",
  },
  {
    src: "/images/logos/Client-Logos_AA.svg",
    alt: "Client Logo B",
  },
  {
    src: "/images/logos/Client-Logos_AB.svg",
    alt: "Client Logo C",
  },
  {
    src: "/images/logos/Client-Logos_CE-REG.svg",
    alt: "Client Logo D",
  },
  {
    src: "/images/logos/Client-Logos_CW-R.svg",
    alt: "Client Logo E",
  },
  {
    src: "/images/logos/Client-Logos_MM-REP.svg",
    alt: "Client Logo F",
  },
];

export default function LogoCarousel() {
  return (
    <Slider duration={10} pauseOnHover={true} width="250px">
      {LOGO_IMAGES.map((logo, index) => (
        <Slider.Slide key={index}>
          <div className="invert">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
}
