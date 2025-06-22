export type InputPropTypes = {
  type?: "text" | "email" | "password" | "search" | "tel";
  placeholder: string;
  label?: string;
  htmlFor: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
  selector?: boolean
  onFocus?: () => void
  inputRef?: React.RefObject<HTMLInputElement | null>
}