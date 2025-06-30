"use client";
import { supabase } from "@/utils/supabase/client";

export const uploadFileToSupabase = async (
  file: File | null | undefined,
  bucketPath: string,
  id: string | undefined
) => {
  if (!file) return null;

  const filePath = `${bucketPath}/${id}/${file.name}`;

  // check if file already exists
  const { data: existingFile, error: existingError } = await supabase.storage
    .from("media")
    .list(`${bucketPath}/${id}`, {
      search: file.name,
    });

  const alreadyExists = existingFile?.some((f) => f.name === file.name);

  if (alreadyExists) {
    console.warn("File already exists, skipping upload.");
    return null;
  }

  // if not, upload it
  const { data, error } = await supabase.storage
    .from("media")
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading file:", error);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from("media")
    .getPublicUrl(filePath);

  return publicUrlData;
};
