export type InputPropTypes = {
  type?: "text" | "number" | "email" | "password" | "search" | "tel";
  placeholder: string;
  label?: string;
  htmlFor: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
  selector?: boolean
  onFocus?: (() => void) | ((event: React.FocusEvent<HTMLInputElement>) => void)
  inputRef?: React.RefObject<HTMLInputElement | null>
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  disabled?: boolean
  maxLength?: number
  password?: boolean
}