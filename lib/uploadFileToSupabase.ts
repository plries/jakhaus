import { createClient } from "@/utils/supabase/client"

export const uploadFileToSupabase = async (file: File, bucketPath: string) => {
  const supabase = createClient()
  const fileName = `${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from("media")
    .upload(`${bucketPath}/${fileName}`, file)

  if (error) {
    console.error("Error uploading file:", error)
    return null
  }

  const { data: publicUrlData } = supabase.storage
    .from("your-bucket-name")
    .getPublicUrl(`${bucketPath}/${fileName}`)

  return publicUrlData
}
