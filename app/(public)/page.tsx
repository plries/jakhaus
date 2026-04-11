"use client";
import { motion } from "framer-motion";
import LogoCarousel from "../components/LogoCarousel";
import ImageCarouselScroll from "../components/ImageCarouselScroll";
import ServiceCarousel from "../components/ServiceCarousel";
import Contact from "../components/ContactForm";
import { NAV } from "./const";
import { Footer, Navbar } from "../components";
import { MOTION_CONFIG } from "./listings/[id]/const";
import { JakhausLogoDFM } from "@/public/icons";

export default function Home() {
  return (
    <>
      <Navbar LINKS={NAV.LINKS} dashboard={false} />
      <Hero />
      <About />
      <Services />
      <Benefit />
      <div className="flex w-full flex-col gap-4 rounded-t-4xl bg-neutral-50 p-4 lg:pt-20">
        <Contact />
        <Footer LINKS={NAV.LINKS} />
      </div>
    </>
  );
}

const Hero = () => {
  return (
    <section
      className="relative flex h-[95dvh] w-full items-center justify-center overflow-hidden rounded-b-4xl bg-transparent shadow-xl"
      id="hero"
    >
      <div className="z-1 scale-40 sm:scale-50 lg:scale-100">
        <div className="max-w-[800px] drop-shadow-lg">
          <JakhausLogoDFM />
        </div>
        <h1 className="sr-only translate-y-[-52px] pr-6 text-right text-[50px] tracking-widest text-gray-50 uppercase">
          Jakhaus Design Forward Media
        </h1>
      </div>
      <div>
        <HeroVideo src="/videos/hero-banner.mp4" />
      </div>
    </section>
  );
};

const HeroVideo = ({ src }: { src: string }) => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative w-full scroll-m-20 py-20" id="about">
      <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-5 px-4 md:grid-cols-8 lg:grid-cols-12">
        <motion.h2
          initial={MOTION_CONFIG.LEFT.INITIAL}
          whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="col-span-full text-2xl font-medium tracking-tighter md:col-span-4 md:text-[2rem] lg:text-4xl"
        >
          Media that sells the listing, and builds your brand.
        </motion.h2>
        <motion.p
          initial={MOTION_CONFIG.DEFAULT.INITIAL}
          whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="col-span-full text-base text-neutral-600 md:col-span-4 lg:col-span-8"
        >
          We’re a full-service media crew. From photography, video, and drone to
          3D tours, graphic design, and branding. We cover the full spectrum of
          real estate marketing.
        </motion.p>
      </div>
      <div className="mask-gradient-x mx-auto w-full max-w-[calc(100%-4rem)] overflow-hidden pt-20 md:rotate-1 md:pt-30 md:pb-20">
        <ImageCarouselScroll />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="relative w-full scroll-m-20" id="services">
      <div className="relative mx-auto max-w-[1440px] grid-cols-4 gap-5 px-4 md:grid-cols-8 lg:grid-cols-12">
        <motion.h2
          initial={MOTION_CONFIG.LEFT.INITIAL}
          whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="col-span-full text-2xl font-medium tracking-tighter md:col-span-4 md:text-[2rem] lg:text-4xl"
        >
          Our Services
        </motion.h2>
        <p className="sr-only">Learn more about our mission and values.</p>
        <div className="mx-auto md:py-12">
          <ServiceCarousel />
        </div>
      </div>
      <div className="mask-gradient-x mx-auto w-full max-w-[calc(100%-4rem)] overflow-hidden pt-20 md:-rotate-2 md:pt-50 md:pb-30">
        <LogoCarousel />
      </div>
    </section>
  );
};

const Benefit = () => {
  return (
    <section className="relative w-full scroll-m-20 py-20" id="benefit">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-4 gap-5 px-4 md:grid-cols-8 lg:grid-cols-12">
        <motion.h2
          initial={MOTION_CONFIG.LEFT.INITIAL}
          whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="col-span-full text-2xl font-medium tracking-tighter md:col-span-4 md:text-[2rem] lg:text-4xl"
        >
          Why choose us?
        </motion.h2>
        <div className="col-span-full flex flex-col gap-5 md:col-span-4 lg:col-span-8">
          <motion.div
            initial={MOTION_CONFIG.RIGHT.INITIAL}
            whileInView={MOTION_CONFIG.RIGHT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-300 shadow-lg"
          >
            <HeroVideo src="/videos/how-we-do.mp4" />
          </motion.div>
          <motion.p
            initial={MOTION_CONFIG.DEFAULT.INITIAL}
            whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className="text-neutral-600"
          >
            <span className="font-medium text-neutral-950">
              Great media starts with the right crew.
            </span>{" "}
            Jakhaus brings years of real estate experience, a sharp eye for what
            works, and the kind of team chemistry that makes shoot days feel
            seamless. From shoot to delivery, you’re in good hands.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
