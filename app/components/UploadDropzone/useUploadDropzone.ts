import { useEffect, useState, useRef } from "react";

export const useUploadDropzone = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const clearFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  useEffect(() => {
    const objectUrls = uploadedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(objectUrls);

    return () => objectUrls.forEach(URL.revokeObjectURL);
  }, [uploadedFiles]);

  // useEffect(() => {
  //   const dropzone = dropzoneRef.current;
  //   if (!dropzone) return;

  //   const handleDrop = (event: DragEvent) => {
  //     event.preventDefault();
  //     if (!event.dataTransfer) return;
  //     const files = event.dataTransfer.files;
  //     if (files) {
  //       setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
  //     }
  //   };

  //   const handleDragOver = (event: DragEvent) => {
  //     event.preventDefault();
  //   };

  //   dropzone.addEventListener("drop", handleDrop);
  //   dropzone.addEventListener("dragover", handleDragOver);

  //   return () => {
  //     dropzone.removeEventListener("drop", handleDrop);
  //     dropzone.removeEventListener("dragover", handleDragOver);
  //   };
  // }, []);

  return {
    dropzoneRef,
    uploadedFiles,
    previewUrls,
    handleFileUpload,
    clearFile,
  };
};