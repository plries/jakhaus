export type ListingPropTypes = {
  ID: string;
  FEATURED_PHOTO: string;
  ADDRESS: {
    STREET: string;
    UNIT?: string;
    CITY: string;
    PROVINCE: string;
    POSTAL_CODE: string;
  };
  OVERVIEW: {
    DESCRIPTION: string;
    BEDROOMS: number;
    BATHROOMS: number;
    SQUARE_FEET: number;
  };
  PHOTOS: string[];
  VIDEO_LINK?: string;
  FLOOR_PLAN?: string;
  SCAN_LINK?: string;
  AGENT: {
    LOGO: string;
    BROKERAGE: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    INSTAGRAM?: string;
  };
};

export type SectionPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS?: string;
};
