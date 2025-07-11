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
      WIDTHS: ["min-w-64 max-w-64", "w-1/3", "w-1/3", "w-1/3"],
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
  },
  MODAL: {
    HEADING: "Delete listing",
    DESCRIPTION: "You're about to delete the listing ",
    DESCRIPTION_2: "Are you sure?",
    BUTTONS: {
      DELETE: "Delete",
      CANCEL: "Cancel",
    }
  },
}