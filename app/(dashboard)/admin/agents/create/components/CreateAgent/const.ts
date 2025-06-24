export const CREATE_AGENT_CONST = {
  HEADING: "Create Agent",
  SECTIONS: {
    BROKERAGE_INFO: "Brokerage Info",
    AGENT_INFO: "Agent Info",
  },
  BUTTONS: {
    CREATE: "Confirm and create agent",
    CANCEL: "Cancel"
  },
  FORM: {
    AGENT: {
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "agent_logo"
      },
      LOGO_DARK: {
        LABEL: "Use light background",
        HTML_FOR: "agent_logo_dark",
        DESCRIPTION: "Use a light version of the agent's logo if possible, otherwise check this option to use the light background."
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
      }
    },
    BROKERAGE: {
      OR: "or",
      LOGO: {
        LABEL: "Logo",
        TEXT: "Upload file",
        HTML_FOR: "brokerage-logo",
        DESCRIPTION: "Use a light version of the brokerage's logo for best results."
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
      }
    },
  }
}