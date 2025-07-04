"use client";
import { supabase } from "@/utils/supabase/client";
import { UUIDTypes } from "uuid";

export const uploadMultipleFiles = async (
  files: File[],
  bucketPath: string,
  id: UUIDTypes
) => {
  if (!files.length || !id) return [];

  const folder = `${bucketPath}/${id}`;
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${file.name}`;
    const filePath = `${folder}/${uniqueFileName}`;

    // upload each file individually
    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (uploadError) {
      console.error(`error uploading ${file.name}:`, uploadError);
      continue;
    }

    const { data: publicUrlData } = supabase.storage
      .from("media")
      .getPublicUrl(filePath);

    if (publicUrlData?.publicUrl) {
      uploadedUrls.push(publicUrlData.publicUrl);
    }
  }

  return uploadedUrls;
};
