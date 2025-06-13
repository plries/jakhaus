"use client";
import { Navbar, Overview } from "./components";
import { useListing } from "./useListing";

export const Listing = () => {
  const hook = useListing();

  const fullAddress = `${hook.constants.address.street} ${hook.constants.address.unit} ${hook.constants.address.city}, ${hook.constants.address.province} ${hook.constants.address.postal}`;

  return (
    <>
      <Navbar constants={hook.constants} />
      <Overview constants={hook.constants} fullAddress={fullAddress} />
    </>
  );
};
