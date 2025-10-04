"use client";

import Slider from "react-infinite-logo-slider";
import Image from "next/image";

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
  {
    src: "/images/logos/Client-Logos_RD-RE.svg",
    alt: "Client Logo G",
  },
  {
    src: "/images/logos/Client-Logos_MD-RE.svg",
    alt: "Client Logo H",
  },
  {
    src: "/images/logos/Client-Logos_JK-RE.svg",
    alt: "Client Logo I",
  },
];

export default function LogoCarousel() {
  return (
    <Slider duration={25} pauseOnHover={true} width="250px">
      {LOGO_IMAGES.map((logo, index) => (
        <Slider.Slide key={index}>
          <div className="opacity-75 invert">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
}
