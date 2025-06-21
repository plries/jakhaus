"use client";
import { useState , useEffect, useRef } from "react";

export const useDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(() => {
  const updatePosition = () => {
    if (buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = buttonRect.bottom + window.scrollY;
      let left = buttonRect.left + window.scrollX;

      // if dropdown goes beyond bottom edge
      if (buttonRect.bottom + dropdownRect.height > viewportHeight) {
        top = buttonRect.top - dropdownRect.height + window.scrollY;
      }

      // if dropdown goes beyond right edge
      if (buttonRect.left + dropdownRect.width > viewportWidth) {
        left = buttonRect.right - dropdownRect.width + window.scrollX;
      }

      setDropdownPosition({ top, left });
    }
  };

  requestAnimationFrame(updatePosition);
  const handleResize = () => requestAnimationFrame(updatePosition);

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [isOpen]);


  return {
    dropdownRef,
    buttonRef,
    isOpen,
    toggleOpen,
    dropdownPosition,
  };
}