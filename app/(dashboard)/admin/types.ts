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
  DARK_LOGO?: boolean;
  SUBTITLE?: string;
  NAME?: string;
  EMAIL?: string;
  PHONE?: string;
  WEBSITE?: string;
  INSTAGRAM?: string;
}

export type CreateBrokeragePropTypes = {
  TITLE?: string;
  ADDRESS?: string;
  LOGO?: string;
}

export type CreateListingPropTypes = {
  ADDRESS: CreateAddressPropTypes;
  BEDROOMS: number;
  BATHROOMS: number;
  SQUARE_FEET: number;
  FEATURED_PHOTO: string;
  PHOTO_GALLERY: string[];
  AGENT: CreateAgentPropTypes;
  BROKERAGE: CreateBrokeragePropTypes;
}

export type UploadableImageTypes = {
  file: File | null;
  previewUrl: string | null;
  uploadedUrl: string | null;
}
