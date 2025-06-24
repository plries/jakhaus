export type CheckboxPropTypes = {
  htmlFor?: string
  label?: string
  disabled?: boolean
  value?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}