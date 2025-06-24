export type UploadButtonPropTypes = {
  label: string
  text: string
  htmlFor: string
  required?: boolean
  disabled?: boolean
  onChange?: (previewUrl: string) => void;
  onClear?: () => void
  isDarkLogo?: boolean
  preview?: string
};