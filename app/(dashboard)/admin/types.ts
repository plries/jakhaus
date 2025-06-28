export type CreateAddressPropTypes = {
  street?: string;
  unit?: string;
  city?: string;
  province?: string;
  postal?: string;
}

export type CreateAgentPropTypes ={
  id?: string;
  logo?: string;
  darkLogo?: boolean;
  sub?: string;
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  instagram?: string;
}

export type CreateBrokeragePropTypes = {
  id?: string;
  title?: string;
  address?: string;
  logo?: string;
}

export type CreateListingPropTypes = {
  address: CreateAddressPropTypes;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  featuredPhoto: string;
  photoGallery: string[];
  agent: CreateAgentPropTypes;
  brokerage: CreateBrokeragePropTypes;
}

export type UploadableImageTypes = {
  file: File | null;
  previewUrl: string | null;
  uploadedUrl: string | null;
}
