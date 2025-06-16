export type IconButtonPropTypes = {
  children: React.ReactNode;
  onClick: () => void;
  name: string;
  additionalClasses?: string;
  disabled?: boolean;
};