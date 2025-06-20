import React from "react";

export type DropdownPropTypes = {
  options: {
    label: string;
    onClick: () => void;
  }[]
  button: {
    name: string
    icon?: React.ReactNode
    additionalClasses?: string
  }
};