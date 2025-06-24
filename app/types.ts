export type ListingPropTypes = {
  ID: string;
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
  PHOTOS: {
    FEATURED_PHOTO: string;
    PHOTOS_GALLERY: string[];
  };
  OTHER_ATTACHMENTS?: {
    VIDEO_LINK?: string;
    FLOOR_PLAN?: string[];
    SCAN_LINK?: string;
  };
  AGENT: AgentPropTypes;
};

export type AgentPropTypes = {
  ID: string;
  AGENT: {
    LOGO: string;
    LOGO_DARK?: boolean;
    SUBTITLE: string;
    NAME: string;
    LINKS: {
      TYPE: "phone" | "email" | "website" | "instagram",
      LINK: string
    }[]
  };
  BROKERAGE: {
    LOGO: string;
    TITLE: string;
    ADDRESS: string;
  };
}

export type SectionPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS?: string;
};
