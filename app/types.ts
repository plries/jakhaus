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
    BEDROOMS: number;
    BATHROOMS: number;
    SQUARE_FEET: number;
  };
  PHOTOS: string[];
  VIDEO_LINK?: string;
  FLOOR_PLAN?: string[];
  SCAN_LINK?: string;
  AGENT: {
    LOGO: string;
    LOGO_DARK?: boolean;
    SUBTITLE: string;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    WEBSITE?: string;
    INSTAGRAM?: string;
  };
  BROKERAGE: {
    LOGO: string;
    TITLE: string;
    ADDRESS: string;
  }
};

export type SectionPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS?: string;
};
