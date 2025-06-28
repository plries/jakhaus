export const CREATE_LISTING_CONST = {
  HEADING: "Create listing",
  SECTIONS: {
    ADDRESS: "Address",
    OVERVIEW: "Overview",
    PHOTOS: "Photos",
    OTHER_ATTACHMENTS: "Other Attachments",
    BROKERAGE_INFO: "Brokerage Info",
    AGENT_INFO: "Agent Info",
  },
  BUTTONS: {
    CREATE: "Confirm and create listing",
    CANCEL: "Cancel"
  },
  FORM: {
    ADDRESS: {
      STREET_ADDRESS: {
        LABEL: "Street address",
        PLACEHOLDER: "123 Main St",
        HTML_FOR: "STREET"
      },
      UNIT: {
        LABEL: "Apartment, unit, suite, or floor #",
        PLACEHOLDER: "#101",
        HTML_FOR: "UNIT"
      },
      CITY: {
        LABEL: "City",
        PLACEHOLDER: "Vancouver",
        HTML_FOR: "CITY"
      },
      PROVINCE: {
        LABEL: "Province",
        PLACEHOLDER: "BC",
        HTML_FOR: "PROVINCE"
      },
      POSTAL_CODE: {
        LABEL: "Postal code",
        PLACEHOLDER: "V1A 2B3",
        HTML_FOR: "POSTAL_CODE"
      },
    },
    OVERVIEW: {
      BEDROOMS: {
        LABEL: "Bedrooms",
        PLACEHOLDER: "0",
        HTML_FOR: "BEDROOMS"
      },
      BATHROOMS: {
        LABEL: "Bathrooms",
        PLACEHOLDER: "0",
        HTML_FOR: "BATHROOMS"
      },
      SQUARE_FEET: {
        LABEL: "Square feet",
        PLACEHOLDER: "0",
        HTML_FOR: "SQUARE_FEET"
      }, 
    },
    PHOTOS: {
      FEATURED_PHOTO: {
        LABEL: "Featured photo",
        TEXT: "Upload file",
        HTML_FOR: "FEATURED_PHOTO",
        DESCRIPTION: "The featured photo is the large image shown at the top of the page.",
      },
      PHOTO_GALLERY: {
        LABEL: "Photo gallery",
        HTML_FOR: "PHOTO_GALLERY",
        TEXT: "Upload photos",
        CAPTION: "Click here to upload.",
        DESCRIPTION: "Photos are ordered by name alphabetically/numerically once uploaded."
      }
    },
    OTHER_ATTACHMENTS: {
      VIDEO_LINK: {
        LABEL: "Video link",
        HTML_FOR: "VIDEO_LINK",
        PLACEHOLDER: "Link to video",
        DESCRIPTION: "Ensure your link is a youtube.com/embed link."
      },
      SCAN_LINK: {
        LABEL: "3D scan link",
        HTML_FOR: "SCAN_LINK",
        PLACEHOLDER: "Link to 3D scan",
      },
      FLOOR_PLANS: {
        LABEL: "Floor plans",
        HTML_FOR: "FLOOR_PLANS",
        TEXT: "Upload floor plan(s)",
        CAPTION: "Click here to upload.",
      }
    },
    AGENT: {
      SELECT_AGENT: {
        LABEL: "Select a saved agent",
        TEXT: "John Doe",
        HTML_FOR: "SELECT_AGENT"
      },
      OR: "Or create a new agent",
      HIDE: "Hide",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "LOGO_URL",
      },
      LOGO_DARK: {
        LABEL: "Use light background",
        HTML_FOR: "LOGO_DARK",
        DESCRIPTION: "Use a light version of the agent's logo if possible, otherwise check this option to use the light background."
      },
      NAME: {
        LABEL: "Name",
        PLACEHOLDER: "John Doe",
        HTML_FOR: "NAME"
      },
      SUBTITLE: {
        LABEL: "Subtitle",
        PLACEHOLDER: "Personal Real Estate Corporation",
        HTML_FOR: "SUBTITLE"
      },
      PHONE: {
        LABEL: "Phone",
        PLACEHOLDER: "604-123-4567",
        HTML_FOR: "PHONE"
      },
      EMAIL: {
        LABEL: "Email",
        PLACEHOLDER: "johndoe@email.com",
        HTML_FOR: "EMAIL"
      },
      WEBSITE: {
        LABEL: "Website",
        PLACEHOLDER: "https://johndoe.com",
        HTML_FOR: "WEBSITE"
      },
      INSTAGRAM: {
        LABEL: "Instagram",
        PLACEHOLDER: "@johndoe",
        HTML_FOR: "INSTAGRAM"
      },
      SAVE_AGENT: {
        LABEL: "Save as new agent",
        HTML_FOR: "SAVE_AGENT",
        DESCRIPTION: "By saving an agent, you can reuse this agent’s information in future listings."
      },
    },
    BROKERAGE: {
      SELECT_BROKERAGE: {
        LABEL: "Select a saved brokerage",
        TEXT: "Remax 2000 Realty",
        HTML_FOR: "SELECT_BROKERAGE"
      },
      OR: "Or create a new brokerage",
      HIDE: "Hide",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "BROKERAGE_LOGO",
        DESCRIPTION: "Use a light version of the brokerage's logo for best results.",
      },
      TITLE: {
        LABEL: "Title",
        PLACEHOLDER: "Remax 2000 Realty",
        HTML_FOR: "BROKERAGE_NAME"
      },
      ADDRESS: {
        LABEL: "Address",
        PLACEHOLDER: "123 Main St, Vancouver, BC, V1A 2B3",
        HTML_FOR: "BROKERAGE_ADDRESS"
      },
    },
  }
}

export const CREATE_LISTING_MOCK = {
  AGENTS: [
    {
      ID: "ec3880f7-6ffa-4fdc-b3da-8d80200225bf",
      AGENT: {
        NAME: "John Doe",
        LOGO: "/images/CE-Logo.png",
        DARK_LOGO: true,
        SUBTITLE: "Personal Real Estate Corporation",
        PHONE: "604-123-4567",
        EMAIL: "johndoe@email.com",
        INSTAGRAM: "@johndoe"
      },
      BROKERAGE: {
        LOGO: "/images/REMAX-Logo.png",
        TITLE: "REMAX 2000 Realty",
        ADDRESS: "#103 - 15127 100 Avenue Surrey, BC, V3R 0N9"
      }
    },
    {
      ID: "32256911-0403-464d-94a4-101fd8aa5352",
      AGENT: {
        NAME: "Samantha Li",
        LOGO: "/images/CE-Logo.png",
        DARK_LOGO: true,
        SUBTITLE: "Personal Real Estate Corporation",
        PHONE: "604-123-4567",
        EMAIL: "samanthali@email.com",
        WEBSITE: "https://samanthali.com",
      },
      BROKERAGE: {
        LOGO: "/images/REMAX-Logo.png",
        TITLE: "REMAX 300040 Realty",
        ADDRESS: "#103 - 15127 100 Avenue Surrey, BC, V3R 0N9"
      }
    }
  ]
}