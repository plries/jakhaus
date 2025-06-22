import React from "react";

export type DropdownPropTypes = {
  options: {
    label: string;
    onClick?: () => void;
    href?: string;
  }[]
  button: {
    name: string
    icon?: React.ReactNode
    additionalClasses?: string
  }
};