import { InputPropTypes } from "../Input/types";

export type InputSelectorPropTypes = {
  input: InputPropTypes;
  options: {
    label: string;
    onClick?: () => void;
  }[];
};