import { ListingPropTypes } from "@/app/types";

export type LightboxPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS: string;
  isOpen: boolean;
  closeLightbox: () => void;
  photoIndex: number;
  nextPhoto: () => void;
  prevPhoto: () => void;
}