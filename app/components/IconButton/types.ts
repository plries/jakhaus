export type IconButtonPropTypes = {
  children: React.ReactNode;
  onClick: () => void;
  name: string;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
  additionalClasses?: string;
  disabled?: boolean;
};