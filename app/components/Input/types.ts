export type InputPropTypes = {
  type?: "text" | "number" | "email" | "password" | "search" | "tel";
  placeholder: string;
  label?: string;
  htmlFor: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | ((street?: string, unit?: string, city?: string, province?: string, postal?: string) => void) | ((name: string) => void);
  error?: string | null;
  required?: boolean;
  selector?: boolean
  onFocus?: () => void
  defaultValue?: string
  inputRef?: React.RefObject<HTMLInputElement | null>
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  disabled?: boolean
}