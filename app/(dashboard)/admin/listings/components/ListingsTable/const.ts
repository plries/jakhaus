export const LISTINGS_TABLE_CONST = {
  HEADING: "Listings",
  INPUTS: {
    SEARCH: "Search listings...",
    HTML_FOR: "search_listings",
  },
  BUTTONS: {
    CREATE: {
      TEXT: "Create listing",
      HREF: "/admin/listings/create",
    },
    MANAGE: "Manage listing",
  },
  TABLE: {
    NAME: "listings",
    COLUMNS: {
      TITLES: ["ID", "Listing address", "City", "Status", "Date created"],
      WIDTHS: ["w-fit", "w-1/4", "w-1/4", "w-1/4", "w-1/4"],
    }
  },
  DROPDOWNS: {
    MANAGE: {
      EDIT: "Edit",
      VIEW: "View listing",
      COPY: "Copy listing URL",
      DEACTIVATE: "Deactivate",
      REACTIVATE: "Reactivate",
    }
  }
}

export const LISTINGS_TABLE_MOCK = {
  ROWS: [
    {
      ID: "L001",
      LISTING_ADDRESS: "13688 100 Avenue #3510",
      CITY: "Surrey",
      ACTIVE: true,
      DATE_CREATED: "2025-06-12",
    },
    {
      ID: "L002",
      LISTING_ADDRESS: "13963 105 Boulevard #110",
      CITY: "Surrey",
      ACTIVE: true,
      DATE_CREATED: "2025-06-04",
    },
    {
      ID: "L003",
      LISTING_ADDRESS: "16525 Watson Drive #601",
      CITY: "Surrey",
      ACTIVE: true,
      DATE_CREATED: "2025-06-04",
    },
    {
      ID: "L004",
      LISTING_ADDRESS: "24183 Fraser Highway",
      CITY: "Langley",
      ACTIVE: false,
      DATE_CREATED: "2025-05-23",
    },
    {
      ID: "L005",
      LISTING_ADDRESS: "8726 159 Street #27",
      CITY: "Surrey",
      ACTIVE: true,
      DATE_CREATED: "2025-05-23",
    },
    {
      ID: "L006",
      LISTING_ADDRESS: "2048 176 Street",
      CITY: "Surrey",
      ACTIVE: true,
      DATE_CREATED: "2025-06-02",
    },
    {
      ID: "L007",
      LISTING_ADDRESS: "8775 161 Street #74",
      CITY: "Surrey",
      ACTIVE: false,
      DATE_CREATED: "2025-06-04",
    },
    {
      ID: "L008",
      LISTING_ADDRESS: "7451 113 Street",
      CITY: "Delta",
      ACTIVE: true,
      DATE_CREATED: "2025-04-21",
    },
    {
      ID: "L009",
      LISTING_ADDRESS: "16795 61 Avenue",
      CITY: "Cloverdale",
      ACTIVE: true,
      DATE_CREATED: "2025-03-15",
    },
    {
      ID: "L010",
      LISTING_ADDRESS: "5006 Maitland Street",
      CITY: "Burnaby",
      ACTIVE: false,
      DATE_CREATED: "2025-01-24",
    },
  ]
};
