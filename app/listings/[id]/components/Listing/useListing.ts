"use client";
import { useParams } from "next/navigation";
import { LISTINGS_MOCK } from "../../const";

export const useListing = () => {
  const params = useParams();
  const slug = params.id;

  const currentIndex =
    LISTINGS_MOCK.findIndex((LISTING) => LISTING.ID === slug) ?? null;

  const CONSTANTS = LISTINGS_MOCK[currentIndex];

  return { CONSTANTS };
};
