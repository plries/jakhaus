export type UploadButtonPropTypes = {
  label: string
  text: string
  htmlFor: string
  required?: boolean
  disabled?: boolean
  onChange?: (file: File, previewUrl: string) => void;
  onClear?: () => void
  isDarkLogo?: boolean
};