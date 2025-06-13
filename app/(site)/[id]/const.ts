import { ListingPropTypes } from "./components/Listing/types";

export const LISTINGS_MOCK: ListingPropTypes[] = [
  {
    id: "001",
    featuredPhoto: "/images/001-01.jpg",
    address: {
      street: "13963 105 Boulevard",
      unit: "#3510",
      city: "Surrey",
      province: "BC",
      postal: "V3T 0M9",
    },
    overview: {
      description:
        "This well-appointed 35th-floor Concord Pacific home features dazzling  floor-to-ceiling windows opening onto a generous south-facing balcony  boasting breathtaking views that stretch from Mt. Baker to Richmond. The stylish kitchen offers sleek stainless steel appliances gleaming  against modern cabinetry & crisp quartz counters while the bedroom provides a tranquil retreat w/ ample closet space & a well-appointed ensuite. Indulge in 10,000 sqft of indoor amenity space w/ a  state-of-the-art 2,400 sqft gym, yoga studio, bowling alley, sky lounge, celebration rooms, 700 sqft games room, theatre & 4,000 sqft  rooftop patio. Perfectly located, Park Place 1 is steps to King George  Skytrain, Holland Park, Central City Mall, SFU & Surrey Memorial  Hospital.",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 529,
    },
    photos: [
      "/images/001-02.jpg",
      "/images/001-03.jpg",
      "/images/001-04.jpg",
      "/images/001-05.jpg",
    ],
    videoLink: "https://www.youtube.com/embed/1hpR7jYG5zE?si=mpj7t3vbzOjZEtaL",
    floorPlan:
      "https://cdn.sitephotos.sierrastatic.com/3653_7473_floorplan_fp-3510-13688-100-avenue-20250407042843.jpg",
    scanLink: "https://my.matterport.com/show/?m=Z2iH7ribHis",
    agent: {
      logo: "/images/placeholderLogo.png",
      brokerage: "Awesome Brokerage",
      name: "John Doe",
      phone: "123-456-7890",
      email: "agent@example.com",
      instagram: "@agentsinstagram",
    },
  },
];
