import LogoCarousel from "../components/LogoCarousel";
import ImageCarouselScroll from "../components/ImageCarouselScroll";
import ServiceCarousel from "../components/ServiceCarousel";
import Contact from "../components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefit />
      <Contact />
    </>
  );
}

const Hero = () => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center bg-transparent"
      id="hero"
    >
      <div className="z-1 scale-40 sm:scale-50 lg:scale-100">
        <div className="max-w-[800px]">
          <Image
            src="/images/logos/JH_Real_Estate.svg"
            alt="Jakhaus Logo"
            width={800}
            height={200}
            priority
          />
        </div>
        <h2 className="sr-only translate-y-[-52px] pr-6 text-right text-[50px] tracking-widest text-gray-50 uppercase">
          <span className="sr-only">Jakhaus</span>Real Estate Media
        </h2>
      </div>
      <div>
        <HeroVideo src="/videos/hero-banner.mov" />
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
    <section className="relative w-full" id="about">
      <div className="mx-auto max-w-[1440px]">
        <div className="p-8 pt-24 lg:flex lg:pt-16 xl:px-32">
          <h2 className="mr-8 text-4xl font-bold tracking-tight md:text-nowrap text-gray-50 uppercase">
            Design Forward Media
          </h2>
          <p className="mt-4 text-base text-gray-300 md:mt-0">
            Jakhaus is a multi-skilled crew, shaping media with intention and
            style. From video and photography to 3D tours, graphic design and
            branding, we cover the full spectrum of real estate marketing.
          </p>
        </div>
      </div>
      <div className="pb-12">
        <div className="flex w-full items-center justify-center px-6 py-6 md:pt-12">
          <span className="mx-4 h-px w-full max-w-1/3 bg-neutral-200 2xl:max-w-1/5"></span>
          <h3 className="tracking-wide whitespace-nowrap text-neutral-500 uppercase md:text-2xl">
            Collaborated with
          </h3>
          <span className="mx-4 h-px w-full max-w-1/3 bg-neutral-200 2xl:max-w-1/5"></span>
        </div>
        <LogoCarousel />
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
        <div className="h-full w-full bg-gradient-to-b from-neutral-950 to-neutral-700" />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-gray-50" id="services">
      <div className="mx-auto max-w-[1440px]">
        <div className="p-8 lg:px-32 lg:pt-20">
          <h2 className="text-6xl font-bold tracking-tight text-gray-950">
            Services
          </h2>
          <p className="sr-only">Learn more about our mission and values.</p>
        </div>
        <div className="md:py-12">
          <ServiceCarousel />
        </div>
      </div>
      <div className="lg:py-12">
        <ImageCarouselScroll />
      </div>
    </section>
  );
};

const Benefit = () => {
  return (
    <section className="relative w-full overflow-hidden" id="benefit">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center lg:flex-row">
        <div className="order-1 flex w-full max-w-2xl flex-col justify-center px-8 py-16 lg:w-1/2 lg:max-w-full lg:px-32 lg:py-20">
          <h2 className="text-6xl font-bold tracking-tight text-gray-50">
            Why choose us?
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Jakhaus is a design-forward media team shaped by years of real
            estate marketing experience. We've worked together through
            back-to-back shoots and daily edits gaining a sharp eye for what
            works and how to get it done right.
          </p>
        </div>
        <div className="relative order-2 h-[600px] w-full lg:right-0 lg:-mr-16 lg:h-[800px] lg:w-1/2 xl:-mr-32">
          <div className="absolute inset-0 h-full w-full">
            <HeroVideo src="/videos/how-we-do.mp4" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: "url('/images/overlay.jpg')" }}
        />
        <div className="h-full w-full bg-gradient-to-b from-neutral-700 to-neutral-950" />
      </div>
    </section>
  );
};
