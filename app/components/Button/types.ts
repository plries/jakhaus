export type ButtonPropTypes = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick: () => void;
  additionalClasses?: string;
  disabled?: boolean;
};