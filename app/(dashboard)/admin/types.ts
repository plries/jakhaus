export type CreateAddressPropTypes = {
  STREET?: string;
  UNIT?: string;
  CITY?: string;
  PROVINCE?: string;
  POSTAL_CODE?: string;
}

export type CreateAgentPropTypes ={
  id?: string;
  LOGO_URL?: string;
  LOGO_DARK?: boolean;
  SUBTITLE?: string;
  NAME?: string;
  EMAIL?: string;
  PHONE?: string;
  WEBSITE?: string;
  INSTAGRAM?: string;
  BROKERAGE_NAME?: string;
  BROKERAGE_LOGO?: string;
  BROKERAGE_ADDRESS?: string;
}

export type CreateListingPropTypes = {
  id?: string;
  STREET?: string;
  UNIT?: string;
  CITY?: string;
  PROVINCE?: string;
  POSTAL_CODE?: string;
  BEDROOMS?: number;
  BATHROOMS?: number;
  SQUARE_FEET?: number;
  FEATURED_PHOTO?: string;
  VIDEO_LINK?: string;
  SCAN_LINK?: string;
  agent_id?: string;
}

export type UploadableImageTypes = {
  file: File | null;
  previewUrl: string | null;
}
