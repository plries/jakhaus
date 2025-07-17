"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
  "images/house-1.jpg",
  "images/house-2.jpg",
  "images/house-3.png",
  "images/house-4.jpg",
  "images/house-5.jpeg",
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
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="aspect-video w-[200px] object-cover md:w-[300px] lg:w-[400px]"
              alt={`img-${i}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
