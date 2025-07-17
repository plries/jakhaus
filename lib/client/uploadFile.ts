"use client";
import { supabase } from "@/utils/supabase/client";
import { UUIDTypes } from "uuid";

export const uploadFile = async (
  file: File | null | undefined,
  bucketPath: string,
  id: UUIDTypes | undefined
) => {
  if (!file || !id) return null;

   const timestamp = Date.now();
  const uniqueFileName = `${timestamp}-${file.name}`;
  const folder = `${bucketPath}/${id}`;
  const filePath = `${folder}/${uniqueFileName}`;

  // 1. list existing files in the folder
  const { data: existingFiles, error: listError } = await supabase.storage
    .from("media")
    .list(folder);

  if (listError) {
    console.error("error listing existing files:", listError);
    return null;
  }

  // 2. delete all existing files in this folder
  if (existingFiles && existingFiles.length > 0) {
    const pathsToDelete = existingFiles.map((f) => `${folder}/${f.name}`);

    console.log("deleting existing files:", pathsToDelete);

    const { error: deleteError } = await supabase.storage
      .from("media")
      .remove(pathsToDelete);

    if (deleteError) {
      console.error("error deleting existing files:", deleteError);
      return null;
    }
  }

  // 3. upload new file
  const { data: uploaded, error: uploadError } = await supabase.storage
    .from("media")
    .upload(filePath, file);

  if (uploadError) {
    console.error("error uploading file:", uploadError);
    return null;
  }

  // 4. get public URL
  const { data: publicUrlData } = supabase.storage
    .from("media")
    .getPublicUrl(filePath);

  return publicUrlData;
};
