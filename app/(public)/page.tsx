import LogoCarousel from "../components/LogoCarousel";
import ImageCarouselScroll from "../components/ImageCarouselScroll";
import ServiceCarousel from "../components/ServiceCarousel";
import ContactSection from "../components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefit />
      <ContactSection />
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
          />
        </div>
        <h2 className="sr-only translate-y-[-52px] pr-6 text-right text-[50px] tracking-widest text-gray-50 uppercase">
          <span className="sr-only">Jakhaus</span>Real Estate Media
        </h2>
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
    <section className="w-full bg-gray-950" id="about">
      <div className="mx-auto max-w-[1440px]">
        <div className="p-8 lg:px-32 lg:pt-20">
          <h2 className="text-6xl font-bold text-gray-50">About Us</h2>
          <p className="mt-4 text-base text-gray-300">
            We're a jack-of-all-trades crew that knows how the Real Estate
            industry moves. From video to 3D tours, photography to visual
            branding, we cover the full spectrum of marketing with intentional
            design and a collaborative touch.
          </p>
        </div>
      </div>
      <div className="py-12">
        <LogoCarousel />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="w-full bg-gray-50" id="services">
      <div className="mx-auto max-w-[1440px]">
        <div className="p-8 lg:px-32 lg:pt-20">
          <h2 className="text-6xl font-bold text-gray-950">Services</h2>
          <p className="sr-only">Learn more about our mission and values.</p>
        </div>
        <div className="lg:py-12">
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
    <section className="w-full overflow-hidden bg-gray-950" id="benefit">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center lg:flex-row">
        <div className="order-1 flex w-full max-w-2xl flex-col justify-center py-16 lg:w-1/2 lg:max-w-full lg:px-32 lg:py-20">
          <h2 className="text-6xl font-bold text-gray-50">Why choose us?</h2>
          <p className="mt-4 text-base text-gray-300">
            Jakhaus is a design-forward media team shaped by years of real
            estate marketing experience. We've worked together through
            back-to-back shoots and daily edits gaining a sharp eye for what
            works and how to get it done right.
          </p>
        </div>
        <div className="relative order-2 h-[400px] w-full lg:right-0 lg:-mr-16 lg:h-[800px] lg:w-1/2 xl:-mr-32">
          <div className="absolute inset-0 h-full w-full">
            <HeroVideo src="/videos/hero-banner.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};

