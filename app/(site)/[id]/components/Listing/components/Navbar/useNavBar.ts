"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/app/hooks";

export const useNavbar = () => {
  const windowSize = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!windowSize.isTablet) {
      setIsOpen(false);
    }
  });

  return {
    isOpen,
    toggleOpen,
  };
};
