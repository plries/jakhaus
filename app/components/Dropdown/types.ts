import React from "react";

export type DropdownPropTypes = {
  options: {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    href?: string;
    disabled?: boolean | undefined
  }[]
  button: {
    name: string
    icon?: React.ReactNode
    additionalClasses?: string
  }
};