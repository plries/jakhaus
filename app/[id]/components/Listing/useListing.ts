"use client";
import { useParams } from "next/navigation";
import { LISTINGS_MOCK } from "../../const";

export const useListing = () => {
  const params = useParams();
  const slug = params.id;

  const currentIndex =
    LISTINGS_MOCK.findIndex((listing) => listing.id === slug) ?? null;

  const constants = LISTINGS_MOCK[currentIndex];

  return { constants };
};
