"use client";
import { useEffect, useState } from "react"
import { SectionPropTypes } from "@/app/types"

export const useLightbox = ({
  CONSTANTS,
}: SectionPropTypes) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openLightbox = (photoIndex: number) => {
    setIsOpen(true)
    setPhotoIndex(photoIndex)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const nextPhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % CONSTANTS.PHOTO_GALLERY.length)
  }

  const prevPhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex - 1 + CONSTANTS.PHOTO_GALLERY.length) % CONSTANTS.PHOTO_GALLERY.length)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
      } else if (event.key === "ArrowRight") {
        nextPhoto()
      } else if (event.key === "ArrowLeft") {
        prevPhoto()
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  })

  return {
    isOpen,
    openLightbox,
    closeLightbox,
    photoIndex,
    nextPhoto,
    prevPhoto,
  }
}