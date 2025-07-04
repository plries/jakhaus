import { Dispatch, SetStateAction } from "react";

export type UploadZonePropTypes = {
  label: string
  text: string
  htmlFor: string
  caption: string
  required?: boolean
  onChange: (file: File[]) => void
  files: {
    file: File | null;
    previewUrl: string | null;
  }[]
  onClear: (index: number) => void
  setDeleted?: Dispatch<SetStateAction<string[]>>
};