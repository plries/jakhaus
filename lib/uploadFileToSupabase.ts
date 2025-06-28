"use client";
import { supabase } from "@/utils/supabase/client"

export const uploadFileToSupabase = async (file: File, bucketPath: string, id: string) => {

  const { data, error } = await supabase.storage
    .from("media")
    .upload(`${bucketPath}/${id}/${file.name}`, file)

  if (error) {
    console.error("Error uploading file:", error)
    return null
  }

  const { data: publicUrlData } = supabase.storage
    .from("media")
    .getPublicUrl(`${bucketPath}/${id}/${file.name}`)

  return publicUrlData
}