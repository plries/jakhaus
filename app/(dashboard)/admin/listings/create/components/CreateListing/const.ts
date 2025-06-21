import { p } from "motion/react-client";

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
  FORM: {
    ADDRESS: {
      STREET_ADDRESS: {
        LABEL: "Street address",
        PLACEHOLDER: "123 Main St",
        HTML_FOR: "street_address"
      },
      UNIT: {
        LABEL: "Apartment, unit, suite, or floor #",
        PLACEHOLDER: "A1",
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
      FEATURED_IMAGE: {
        LABEL: "Featured image",
        TEXT: "Choose file",
        HTML_FOR: "featured_image",
        DESCRIPTION: "The featured image is the large image shown at the top of the page."
      },
      PHOTO_GALLERY: {
        LABEL: "Photo gallery",
        HTML_FOR: "photo_gallery",
        TEXT: "Upload photos",
        CAPTION: "Click here or drag and drop."
      }
    },
    OTHER_ATTACHMENTS: {
      VIDEO_LINK: {
        LABEL: "Video link",
        HTML_FOR: "video_link",
        PLACEHOLDER: "link to video",
        DESCRIPTION: "Ensure your link is a youtube.com/embed link."
      },
      SCAN_LINK: {
        LABEL: "3D scan link",
        HTML_FOR: "scan_link",
        PLACEHOLDER: "link to 3D scan",
      },
      FLOOR_PLAN: {
        LABEL: "Floor plan",
        HTML_FOR: "floor_plan",
        TEXT: "Upload floor plan(s)",
        CAPTION: "Click here or drag and drop."
      }
    },
    BROKERAGE: {
      SELECT_BROKERAGE: {
        LABEL: "Select a brokerage",
        TEXT: "Remax 2000 Realty",
        HTML_FOR: "select_brokerage"
      },
      OR: "or",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Choose file",
        HTML_FOR: "brokerage-logo"
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
      SAVE_BROKERAGE: {
        LABEL: "Save brokerage information?",
        HTML_FOR: "save_brokerage",
        DESCRIPTION: "By saving a brokerage, you can reuse the brokerage’s information in future listings."
      }
    },
    AGENT: {
      SELECT_AGENT: {
        LABEL: "Select an agent",
        TEXT: "John Doe",
        HTML_FOR: "select_agent"
      },
      OR: "or",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Choose file",
        HTML_FOR: "agent_logo"
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
        LABEL: "Save agent information?",
        HTML_FOR: "save_agent",
        DESCRIPTION: "By saving an agent, you can reuse the agent’s information in future listings."
      }
    }
  }
}