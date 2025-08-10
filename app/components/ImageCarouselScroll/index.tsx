"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const listingImages = [
  {
    src: "/images/listings/house-listing-1.jpg",
    alt: "Listing Image 1",
  },
  {
    src: "/images/listings/house-listing-2.jpg",
    alt: "Listing Image 2",
  },
  {
    src: "/images/listings/house-listing-3.jpg",
    alt: "Listing Image 3",
  },
  {
    src: "/images/listings/house-listing-4.jpg",
    alt: "Listing Image 4",
  },
  {
    src: "/images/listings/house-listing-5.jpg",
    alt: "Listing Image 5",
  },
];

export default function ScrollImageRow() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState("0px");

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const updateShift = () => {
      if (!wrapperRef.current || !contentRef.current) return;

      const wrapperWidth = wrapperRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const shift = Math.max(contentWidth - wrapperWidth, 0);
      setMaxShift(`-${shift}px`);
    };

    updateShift();

    window.addEventListener("resize", updateShift);
    return () => window.removeEventListener("resize", updateShift);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", maxShift]);

  return (
    <div className="py-10">
      <div ref={wrapperRef} className="sticky top-20 overflow-hidden">
        <motion.div ref={contentRef} style={{ x }} className="flex w-max gap-2">
          {listingImages.map((image, i) => (
            <img
              key={i}
              src={image.src}
              className="aspect-video w-[200px] object-cover md:w-[300px] lg:w-[400px]"
              alt={image.alt}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
