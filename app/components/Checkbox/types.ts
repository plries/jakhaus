export type CheckboxPropTypes = {
  htmlFor?: string
  label?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}