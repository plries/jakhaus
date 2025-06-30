export type ButtonPropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
};