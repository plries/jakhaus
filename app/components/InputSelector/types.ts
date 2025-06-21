export type InputSelectorPropTypes = {
  input: {
    type?: "text" | "email" | "password" | "search" | "tel";
    placeholder: string;
    label?: string;
    htmlFor: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    required?: boolean;
  }
  options: {
    label: string;
    onClick?: () => void;
  }[]
};