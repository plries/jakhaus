import { ListingPropTypes } from "@/app/types";
import { easeInOut } from "motion/react";

export const MOTION_CONFIG = {
  DEFAULT: {
    INITIAL: {
      opacity: 0,
      y: 32,
    },
    WHILE_IN_VIEW: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  },
  HEADER: {
    INITIAL: {
      y: -32,
      opacity: 0,
    },
    ANIMATE: {
      y: 0,
      opacity: 1,
    },
  },
  TRANSITION: {
    duration: 0.3,
    easeInOut,
    delay: 0.1,
  }
}

export const LISTINGS_MOCK: ListingPropTypes[] = [
  {
    ID: "001",
    FEATURED_PHOTO: "/images/001-01.jpg",
    ADDRESS: {
      STREET: "15436 31 Avenue",
      UNIT: "#509",
      CITY: "Surrey",
      PROVINCE: "BC",
      POSTAL_CODE: "V3S 7E1",
    },
    OVERVIEW: {
      BEDROOMS: 3,
      BATHROOMS: 2,
      SQUARE_FEET: 1194,
    },
    PHOTOS: [
      "/images/001-02.jpg",
      "/images/001-03.jpg",
      "/images/001-04.jpg",
      "/images/001-05.jpg",
      "/images/001-06.jpg",
      "/images/001-07.jpg",
      "/images/001-08.jpg",
      "/images/001-09.jpg",
      "/images/001-10.jpg",
      "/images/001-11.jpg",
      "/images/001-12.jpg",
      "/images/001-13.jpg",
      "/images/001-14.jpg",
      "/images/001-15.jpg",
      "/images/001-16.jpg",
      "/images/001-17.jpg",
      "/images/001-18.jpg",
      "/images/001-19.jpg",
      "/images/001-20.jpg",
      "/images/001-21.jpg",
      "/images/001-22.jpg",
      "/images/001-23.jpg",
      "/images/001-24.jpg",
      "/images/001-25.jpg",
      "/images/001-26.jpg",
      "/images/001-27.jpg",
      "/images/001-28.jpg",
      "/images/001-29.jpg",
      "/images/001-30.jpg",
      "/images/001-31.jpg",
      "/images/001-32.jpg",
      "/images/001-33.jpg",
      "/images/001-34.jpg",
      "/images/001-35.jpg",
      "/images/001-36.jpg",
      "/images/001-37.jpg",
      "/images/001-38.jpg",
      "/images/001-39.jpg",
      "/images/001-40.jpg",
    ],
    VIDEO_LINK: "https://youtube.com/embed/uOCKta4_LlA?feature=shared",
    FLOOR_PLAN: [
      "/images/001-FP-01.png",
    ],
    AGENT: {
      LOGO: "/images/CE-Logo.png",
      LOGO_DARK: true,
      SUBTITLE: "Coastal Edge Real Estate Group ",
      NAME: "Adrian Cabanos",
      LINKS: [
        {
          TYPE: "email",
          LINK: "AdrianCabanos@remax.net",
        },
        {
          TYPE: "phone",
          LINK: "604-612-7416"
        },
        {
          TYPE: "website",
          LINK: "https://coastaledgereg.com",
        }
      ]
    },
    BROKERAGE: {
      LOGO: "/images/REMAX-Logo.png",
      TITLE: "Coastal Edge Real Estate Group",
      ADDRESS: "#103 - 15127 100 Avenue Surrey, BC, V3R 0N9"
    }
  },
];
