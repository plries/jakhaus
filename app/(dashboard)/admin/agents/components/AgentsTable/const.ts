export const AGENTS_TABLE_CONST = {
  HEADING: "Agents",
  INPUTS: {
    SEARCH: "Search agents...",
    HTML_FOR: "search_agents",
  },
  BUTTONS: {
    CREATE: {
      TEXT: "Create agent",
      HREF: "/admin/agents/create",
    },
    MANAGE: "Manage agent",
  },
  TABLE: {
    NAME: "agents",
    COLUMNS: {
      TITLES: ["Agents", "Brokerage", "Date created"],
      WIDTHS: ["w-1/3", "w-1/3", "w-1/3"],
    }
  },
  DROPDOWNS: {
    MANAGE: {
      EDIT: "Edit",
      DELETE: "Delete",
    }
  }
}

export const AGENTS_TABLE_MOCK = {
  ROWS: [
    {
      NAME: "Samantha Li",
      BROKERAGE: "RE/MAX 2000",
      DATE_CREATED: "2025-06-12",
    },
    {
      NAME: "John Doe",
      BROKERAGE: "eXp Realty of Canada",
      DATE_CREATED: "2025-06-04",
    },
    {
      NAME: "Jane Doe",
      BROKERAGE: "RE/MAX 2000",
      DATE_CREATED: "2025-06-04",
    },
    {
      NAME: "Daniel Reyes",
      BROKERAGE: "eXp Realty of Canada",
      DATE_CREATED: "2025-05-23",
    },
    {
      NAME: "Meghan Patel",
      BROKERAGE: "Framework Marketing Inc.",
      DATE_CREATED: "2025-05-23",
    },
    {
      NAME: "Sophia Tran",
      BROKERAGE: "RE/MAX 2000",
      DATE_CREATED: "2025-05-23",
    }
  ]
}