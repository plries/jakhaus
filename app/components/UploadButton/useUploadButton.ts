"use client";
import { useState, useEffect, useRef } from "react";

export const useUploadButton = () => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      setUploadedFile(file);
    }
  };

  const clearFile = () => setUploadedFile(null);

  useEffect(() => {
    if (!uploadedFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(uploadedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [uploadedFile]);

  // useEffect(() => {
  //   const label = labelRef.current;
  //   if (!label) return;

  //   const handleDrop = (event: DragEvent) => {
  //     if (!event.dataTransfer) return;

  //     event.preventDefault();
  //     const file = event.dataTransfer.files[0];
  //     if (file) {
  //       setUploadedFile(file);
  //     }
  //   };

  //   const handleDragOver = (event: DragEvent) => {
  //     event.preventDefault();
  //   };

  //   label.addEventListener("drop", handleDrop);
  //   label.addEventListener("dragover", handleDragOver);

  //   return () => {
  //     label.removeEventListener("drop", handleDrop);
  //     label.removeEventListener("dragover", handleDragOver);
  //   }
  // })

  return {
    uploadedFile,
    previewUrl,
    handleFileUpload,
    clearFile,
    labelRef
  };
};
