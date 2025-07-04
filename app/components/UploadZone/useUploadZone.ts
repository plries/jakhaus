"use client";
import { UploadableImageTypes } from "@/app/(dashboard)/admin/types";
import { useEffect, useRef } from "react";

export const useUploadZone = (
  uploadedFiles: UploadableImageTypes[],
  onChange: (files: File[]) => void
) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const latestFilesRef = useRef(uploadedFiles);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    onChange([...latestFilesRef.current.map(file => file.file).filter(file => file !== null), ...newFiles]);
  };

  const clearFile = (index: number) => {
    const filteredFiles = uploadedFiles.filter((_, i) => i !== index).map((file) => file.file);
    onChange(filteredFiles.filter((file) => file !== null));
  };

  useEffect(() => {
    latestFilesRef.current = uploadedFiles;
  }, [uploadedFiles]);

  return {
    dropzoneRef,
    handleFileUpload,
    clearFile,
  };
};