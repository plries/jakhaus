"use client";
import { useEffect, useRef } from "react";

export const useUploadZone = (
  files: File[],
  onChange: (files: File[]) => void
) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const latestFilesRef = useRef(files);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    onChange([...latestFilesRef.current, ...newFiles]);
  };

  const clearFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  useEffect(() => {
    latestFilesRef.current = files;
  }, [files]);

  return {
    dropzoneRef,
    handleFileUpload,
    clearFile,
  };
};