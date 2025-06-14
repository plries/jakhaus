import { ListingPropTypes } from "@/app/types";

export const LISTINGS_MOCK: ListingPropTypes[] = [
  {
    ID: "001",
    FEATURED_PHOTO: "/images/001-01.jpg",
    ADDRESS: {
      STREET: "13963 105 Boulevard",
      UNIT: "#3510",
      CITY: "Surrey",
      PROVINCE: "BC",
      POSTAL_CODE: "V3T 0M9",
    },
    OVERVIEW: {
      DESCRIPTION:
        "This well-appointed 35th-floor Concord Pacific home features dazzling  floor-to-ceiling windows opening onto a generous south-facing balcony  boasting breathtaking views that stretch from Mt. Baker to Richmond. The stylish kitchen offers sleek stainless steel appliances gleaming  against modern cabinetry & crisp quartz counters while the bedroom provides a tranquil retreat w/ ample closet space & a well-appointed ensuite. Indulge in 10,000 sqft of indoor amenity space w/ a  state-of-the-art 2,400 sqft gym, yoga studio, bowling alley, sky lounge, celebration rooms, 700 sqft games room, theatre & 4,000 sqft  rooftop patio. Perfectly located, Park Place 1 is steps to King George  Skytrain, Holland Park, Central City Mall, SFU & Surrey Memorial  Hospital.",
      BEDROOMS: 1,
      BATHROOMS: 1,
      SQUARE_FEET: 529,
    },
    PHOTOS: [
      "/images/001-02.jpg",
      "/images/001-03.jpg",
      "/images/001-04.jpg",
      "/images/001-05.jpg",
    ],
    VIDEO_LINK: "https://www.youtube.com/embed/1hpR7jYG5zE?si=mpj7t3vbzOjZEtaL",
    FLOOR_PLAN:
      "/images/001-FP.jpg",
    SCAN_LINK: "https://my.matterport.com/show/?m=Z2iH7ribHis",
    AGENT: {
      LOGO: "/images/placeholderLogo.png",
      BROKERAGE: "Awesome Brokerage",
      NAME: "John Doe",
      PHONE: "123-456-7890",
      EMAIL: "agent@example.com",
      INSTAGRAM: "@agentsinstagram",
    },
  },
];
