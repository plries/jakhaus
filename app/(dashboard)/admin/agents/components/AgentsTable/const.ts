export const AGENTS_TABLE_CONST = {
  HEADING: "Agents",
  INPUTS: {
    SEARCH: "Search by name...",
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
      TITLES: ["ID", "Name", "Brokerage", "Subtitle"],
      WIDTHS: ["min-w-64 max-w-64", "w-1/3", "w-1/3", "w-1/3"],
    },
    NO_AGENTS: "No agents found.",
  },
  DROPDOWNS: {
    MANAGE: {
      EDIT: "Edit",
      DELETE: "Delete",
    }
  },
  MODAL: {
    HEADING: "Delete agent",
    DESCRIPTION: "You're about to delete the agent ",
    DESCRIPTION_2: "Are you sure?",
    BUTTONS: {
      DELETE: "Delete",
      CANCEL: "Cancel",
    }
  },
}