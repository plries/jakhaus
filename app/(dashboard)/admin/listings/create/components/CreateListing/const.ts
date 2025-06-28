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
        HTML_FOR: "street_address"
      },
      UNIT: {
        LABEL: "Apartment, unit, suite, or floor #",
        PLACEHOLDER: "#101",
        HTML_FOR: "unit"
      },
      CITY: {
        LABEL: "City",
        PLACEHOLDER: "Vancouver",
        HTML_FOR: "city"
      },
      PROVINCE: {
        LABEL: "Province",
        PLACEHOLDER: "BC",
        HTML_FOR: "province"
      },
      POSTAL_CODE: {
        LABEL: "Postal code",
        PLACEHOLDER: "V1A 2B3",
        HTML_FOR: "postal_code"
      },
    },
    OVERVIEW: {
      BEDROOMS: {
        LABEL: "Bedrooms",
        PLACEHOLDER: "1",
        HTML_FOR: "bedrooms"
      },
      BATHROOMS: {
        LABEL: "Bathrooms",
        PLACEHOLDER: "1",
        HTML_FOR: "bathrooms"
      },
      SQUARE_FEET: {
        LABEL: "Square feet",
        PLACEHOLDER: "1",
        HTML_FOR: "square_feet"
      }, 
    },
    PHOTOS: {
      FEATURED_PHOTO: {
        LABEL: "Featured photo",
        TEXT: "Upload file",
        HTML_FOR: "featured_photo",
        DESCRIPTION: "The featured photo is the large image shown at the top of the page.",
        PATH: "featured-photos"
      },
      PHOTO_GALLERY: {
        LABEL: "Photo gallery",
        HTML_FOR: "photo_gallery",
        TEXT: "Upload photos",
        CAPTION: "Click here to upload.",
        PATH: "photo-gallery"
      }
    },
    OTHER_ATTACHMENTS: {
      VIDEO_LINK: {
        LABEL: "Video link",
        HTML_FOR: "video_link",
        PLACEHOLDER: "Link to video",
        DESCRIPTION: "Ensure your link is a youtube.com/embed link."
      },
      SCAN_LINK: {
        LABEL: "3D scan link",
        HTML_FOR: "scan_link",
        PLACEHOLDER: "Link to 3D scan",
      },
      FLOOR_PLANS: {
        LABEL: "Floor plans",
        HTML_FOR: "floor_plans",
        TEXT: "Upload floor plan(s)",
        CAPTION: "Click here to upload.",
        PATH: "floor-plans"
      }
    },
    AGENT: {
      SELECT_AGENT: {
        LABEL: "Select a saved agent",
        TEXT: "John Doe",
        HTML_FOR: "select_agent"
      },
      LOGO_DARK: {
        LABEL: "Use light background",
        HTML_FOR: "agent_logo_dark",
        DESCRIPTION: "Use a light version of the agent's logo if possible, otherwise check this option to use the light background."
      },
      OR: "Or create a new agent",
      HIDE: "Hide",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "agent_logo",
        PATH: "logos/agents",
      },
      NAME: {
        LABEL: "Name",
        PLACEHOLDER: "John Doe",
        HTML_FOR: "agent_name"
      },
      SUBTITLE: {
        LABEL: "Subtitle",
        PLACEHOLDER: "Personal Real Estate Corporation",
        HTML_FOR: "agent_subtitle"
      },
      PHONE: {
        LABEL: "Phone",
        PLACEHOLDER: "604-123-4567",
        HTML_FOR: "agent_phone"
      },
      EMAIL: {
        LABEL: "Email",
        PLACEHOLDER: "johndoe@email.com",
        HTML_FOR: "agent_email"
      },
      WEBSITE: {
        LABEL: "Website",
        PLACEHOLDER: "https://johndoe.com",
        HTML_FOR: "agent_website"
      },
      INSTAGRAM: {
        LABEL: "Instagram",
        PLACEHOLDER: "@johndoe",
        HTML_FOR: "agent_instagram"
      },
      SAVE_AGENT: {
        LABEL: "Save as new agent",
        HTML_FOR: "save_agent",
        DESCRIPTION: "By saving an agent, you can reuse this agent’s information in future listings."
      },
    },
    BROKERAGE: {
      SELECT_BROKERAGE: {
        LABEL: "Select a saved brokerage",
        TEXT: "Remax 2000 Realty",
        HTML_FOR: "select_brokerage"
      },
      OR: "Or create a new brokerage",
      HIDE: "Hide",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "brokerage-logo",
        DESCRIPTION: "Use a light version of the brokerage's logo for best results.",
        PATH: "logos/brokerages",
      },
      TITLE: {
        LABEL: "Title",
        PLACEHOLDER: "Remax 2000 Realty",
        HTML_FOR: "brokerage_title"
      },
      ADDRESS: {
        LABEL: "Address",
        PLACEHOLDER: "123 Main St, Vancouver, BC, V1A 2B3",
        HTML_FOR: "brokerage_address"
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