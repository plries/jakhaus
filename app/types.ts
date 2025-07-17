export type ListingPropTypes = {
  ID: string;
  STREET: string;
  UNIT?: string;
  CITY: string;
  PROVINCE: string;
  POSTAL_CODE: string;
  BEDROOMS: number;
  BATHROOMS: number;
  SQUARE_FEET: number;
  FEATURED_PHOTO: string;
  PHOTO_GALLERY: PhotoPropTypes[];
  VIDEO_LINK?: string;
  FLOOR_PLANS?: PhotoPropTypes[];
  SCAN_LINK?: string;
  ASSIGNED_AGENT: AgentPropTypes;
};

type AgentPropTypes = {
  LOGO_URL: string;
  LOGO_DARK?: boolean;
  SUBTITLE: string;
  NAME: string;
  EMAIL: string;
  PHONE: string;
  WEBSITE?: string;
  INSTAGRAM?: string;
  BROKERAGE_NAME: string;
  BROKERAGE_LOGO: string;
  BROKERAGE_ADDRESS: string;
}

type PhotoPropTypes = {
  URL: string;
}

export type SectionPropTypes = {
  CONSTANTS: ListingPropTypes;
  FULL_ADDRESS?: string;
};
