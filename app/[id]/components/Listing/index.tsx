"use client";
import { useListing } from "./useListing";

export const Listing = () => {
  const hook = useListing();

  return (
    <div>
      <p>{hook.constants.id}</p>
    </div>
  );
};
