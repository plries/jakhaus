import { createClient } from "@/utils/supabase/client"

export const uploadFileToSupabase = async (file: File, bucketPath: string, id: string) => {
  const supabase = createClient()
  const fileName = `${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from("media")
    .upload(`${bucketPath}/${id}/${fileName}`, file)

  if (error) {
    console.error("Error uploading file:", error)
    return null
  }

  const { data: publicUrlData } = supabase.storage
    .from("media")
    .getPublicUrl(`${bucketPath}/${id}/${fileName}`)

  return publicUrlData
}
