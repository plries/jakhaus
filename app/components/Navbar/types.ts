import { ListingPropTypes } from "@/app/types";

export type NavbarPropTypes = {
  LINKS: { NAME: string; HREF: string; KEY: string }[];
  CONSTANTS?: ListingPropTypes;
  dashboard?: boolean;
  currentTab?: string;
  handleTabChange?: (tab: "listings" | "agents") => void;
};