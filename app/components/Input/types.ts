export type InputPropTypes = {
  type?: "text" | "email" | "password" | "search" | "tel";
  placeholder: string;
  htmlFor: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
}