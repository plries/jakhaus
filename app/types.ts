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
  ASSIGNED_AGENT: AssignedAgentPropTypes;
};

export type AgentPropTypes = {
  LOGO: string;
  LOGO_DARK?: boolean;
  SUBTITLE: string;
  NAME: string;
  LINKS: {
    TYPE: "phone" | "email" | "website" | "instagram",
    LINK: string
  }[]
}

export type BrokeragePropTypes = {
  LOGO: string;
  TITLE: string;
  ADDRESS: string;
}

export type AssignedAgentPropTypes = {
  ID: string;
  AGENT: AgentPropTypes;
  BROKERAGE: BrokeragePropTypes;
}

export type SectionPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS?: string;
};
