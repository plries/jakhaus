export type ListingPropTypes = {
  id: string;
  featuredPhoto: string;
  address: {
    street: string;
    unit?: string;
    city: string;
    province: string;
    postal: string;
  };
  overview: {
    description: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
  };
  photos: string[];
  videoLink?: string;
  floorPlan?: string;
  scanLink?: string;
  agent: {
    logo: string;
    brokerage: string;
    name: string;
    email: string;
    phone: string;
    instagram?: string;
  };
};
