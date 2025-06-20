"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/app/hooks";

export const useActiveSection = (sectionIds: string[]) => {
  const hook = useWindowSize();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
      rootMargin: (hook.isTablet || hook.isMobile) 
        ? "10% 0px -55% 0px" 
        : "0px 0px 0px 0px",
          threshold: 0.1,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };

  }, [sectionIds, hook]);

  return activeId;
};
