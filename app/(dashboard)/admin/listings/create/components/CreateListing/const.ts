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
        DESCRIPTION: "Ensure your link is a matterport.com/show link."
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
      CANCEL: "Cancel",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "LOGO_URL",
      },
      LOGO_DARK: {
        LABEL: "Use light background",
        HTML_FOR: "LOGO_DARK",
        DESCRIPTION: "Use a light version of the agent's logo if possible!"
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
        DESCRIPTION: "By creating an agent, you can reuse this agent’s information in future listings."
      },
    },
    BROKERAGE: {
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "BROKERAGE_LOGO",
        DESCRIPTION: "Use a light version of the brokerage's logo for best results.",
      },
      NAME: {
        LABEL: "Name",
        PLACEHOLDER: "Remax 2000 Realty",
        HTML_FOR: "BROKERAGE_NAME"
      },
      ADDRESS: {
        LABEL: "Address",
        PLACEHOLDER: "123 Main St, Vancouver, BC, V1A 2B3",
        HTML_FOR: "BROKERAGE_ADDRESS"
      },
    },
  },
  MODAL: {
    SUCCESS: {
      HEADING: "Success!",
      DESCRIPTION: "You can now view and share this listing.",
    },
    ERROR: {
      HEADING: "Oops!",
      DESCRIPTION: "Something went wrong. Please try again later.",
    },
    BUTTONS: {
      CLOSE: "Home",
      CREATE: "Create another",
    }
  }
}