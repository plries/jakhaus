import { useState, useEffect, useRef } from "react";

export const useUploadButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleDrop = (event: DragEvent) => {
      if (!event.dataTransfer) return;

      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        setUploadedFile(file);
      }
    };

    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
    };

    button.addEventListener("drop", handleDrop);
    button.addEventListener("dragover", handleDragOver);

    return () => {
      button.removeEventListener("drop", handleDrop);
      button.removeEventListener("dragover", handleDragOver);
    }
  })

  return {
    uploadedFile,
    previewUrl,
    handleFileUpload,
    clearFile,
  };
};
