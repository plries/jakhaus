export const LISTINGS_TABLE_CONST = {
  HEADING: "Listings",
  INPUTS: {
    SEARCH: "Search by city...",
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
      TITLES: ["ID", "Listing address", "City", "Agent"],
      WIDTHS: ["w-1/4", "w-1/4", "w-1/4", "w-1/4"],
    },
    NO_LISTINGS: "No listings found.",
  },
  DROPDOWNS: {
    MANAGE: {
      EDIT: "Edit",
      VIEW: "View listing",
      COPY: "Copy listing URL",
      DELETE: "Delete",
    }
  }
}