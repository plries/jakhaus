import { JakhausLogo } from "@/public/icons";
import LogoCarousel from "../components/LogoCarousel";
import { title } from "process";
import ServiceCarousel from "../components/ServiceCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

const Hero = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-transparent">
      <div className="z-1 translate-y-[-48px]">
        <div className="max-w-[800px] invert">
          <JakhausLogo width={800} />
        </div>
        <h2 className="translate-y-[-52px] pr-6 text-right text-[50px] tracking-widest text-gray-50 uppercase">
          <span className="sr-only">Jakhaus</span>Real Estate Media
        </h2>
      </div>
      <div className="">
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
    <section className="w-full bg-gray-950">
      <div className="px-32 pt-20">
        <h2 className="text-6xl font-bold text-gray-50">About Us</h2>
        <p className="mt-4 text-base text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </p>
      </div>
      <div className="py-12">
        <LogoCarousel />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="px-32 pt-20">
        <h2 className="text-6xl font-bold text-gray-950">Services</h2>
        <p className="sr-only">Learn more about our mission and values.</p>
      </div>
      <div className="py-12">
        <ServiceCarousel />
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-400">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with us for any inquiries or support.
        </p>
      </div>
    </section>
  );
};
