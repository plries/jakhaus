"use client";
import { Navbar, Overview } from "./components";
import { useListing } from "./useListing";

export const Listing = () => {
  const hook = useListing();

  const FULL_ADDRESS = `${hook.CONSTANTS.ADDRESS.STREET} ${hook.CONSTANTS.ADDRESS.UNIT} ${hook.CONSTANTS.ADDRESS.CITY}, ${hook.CONSTANTS.ADDRESS.PROVINCE} ${hook.CONSTANTS.ADDRESS.POSTAL_CODE}`;

  return (
    <>
      <Navbar CONSTANTS={hook.CONSTANTS} />
      <Overview CONSTANTS={hook.CONSTANTS} FULL_ADDRESS={FULL_ADDRESS} />
    </>
  );
};
