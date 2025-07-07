"use client";

import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { JakhausLogo } from "@/public/icons";

export default function LogoCarousel() {
  return (
    <Slider duration={10} pauseOnHover={true} width="250px">
      <Slider.Slide>
        <div className="invert">
          {" "}
          <JakhausLogo width={200} />
        </div>{" "}
      </Slider.Slide>
      <Slider.Slide>
        <div className="invert">
          {" "}
          <JakhausLogo width={200} />
        </div>{" "}
      </Slider.Slide>
      <Slider.Slide>
        <div className="invert">
          {" "}
          <JakhausLogo width={200} />
        </div>{" "}
      </Slider.Slide>
    </Slider>
  );
}
