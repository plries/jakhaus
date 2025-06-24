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

export type CreateFeaturedPhotoPropTypes = {
  url: string;
}

export type CreateListingPropTypes = {
  address: CreateAddressPropTypes;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  featuredPhoto: CreateFeaturedPhotoPropTypes | null;
  photoGallery: string[];
  agent: CreateAgentPropTypes;
  brokerage: CreateBrokeragePropTypes;
}
