import { ListingPropTypes } from "@/app/types";

export const NAVBAR_LISTING_CONST = {
  LINKS: [
    { NAME: "Overview", HREF: "#overview", KEY: "OVERVIEW" },
    { NAME: "Photos", HREF: "#photos", KEY: "PHOTOS" },
    { NAME: "Video Tour", HREF: "#videoTour", KEY: "VIDEO_LINK" },
    { NAME: "Floor Plan", HREF: "#floorPlan", KEY: "FLOOR_PLAN" },
    { NAME: "Virtual Tour", HREF: "#virtualTour", KEY: "SCAN_LINK" },
    { NAME: "Contact", HREF: "#contact", KEY: "AGENT" },
  ],
};

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
