"use client";
import { useEffect, useRef, useState } from 'react';

export const useCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const calculateButtons = () => {    
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    calculateButtons();
    window.addEventListener('resize', calculateButtons);
    return () => window.removeEventListener('resize', calculateButtons);
  }, []);

  return {
    carouselRef,
    showLeftButton,
    showRightButton,
    scrollTo,
    calculateButtons,
  };
};
