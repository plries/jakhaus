import { createClient } from "@/utils/supabase/server";

export async function deleteListing(listingId: string) {
  const supabase = await createClient();

  // 1. fetch the logo URLs
  const { data: photosData, error: photosError } = await supabase
    .from("photos")
    .select("URL")
    .eq("listing_id", listingId)

  if (photosError) throw photosError;

  const { data: floorPlansData, error: floorPlansError } = await supabase
    .from("floor_plans")
    .select("URL")
    .eq("listing_id", listingId)

  if (floorPlansError) throw floorPlansError;

  const { data: listingData, error: featuredPhotoError } = await supabase
    .from("listings")
    .select("FEATURED_PHOTO")
    .eq("id", listingId)
    .single();

  if (featuredPhotoError) throw featuredPhotoError;

  // 2. extract paths from URLs
  const filesToDelete: string[] = [];

  const extractPath = (url: string) => {
    try {
      const parts = new URL(url).pathname.split("/object/public/media/");
      return parts[1]; // get path inside the 'media' bucket
    } catch (err) {
      console.error("invalid URL:", url);
      return null;
    }
  };

  const photosPath = photosData ? photosData.map((photo: any) => extractPath(photo.URL)) : null;
  const floorPlansPath = floorPlansData ? floorPlansData.map((photo: any) => extractPath(photo.URL)) : null;
  const featuredPhotoPath = listingData.FEATURED_PHOTO ? extractPath(listingData.FEATURED_PHOTO) : null;

  if (photosPath) filesToDelete.push(...photosPath.filter(path => path !== null)); 
  if (floorPlansPath) filesToDelete.push(...floorPlansPath.filter(path => path !== null));
  if (featuredPhotoPath) filesToDelete.push(featuredPhotoPath);

  // 3. delete the listing row
  const { error: deleteError } = await supabase
    .from("listings")
    .delete()
    .eq("id", listingId);

  if (deleteError) throw deleteError;


  // 4. delete files from 'media' bucket
  if (filesToDelete.length > 0) {
    const { error: storageError } = await supabase
      .storage
      .from("media")
      .remove(filesToDelete);

    if (storageError) {
      console.error("error deleting files:", storageError);
    }
  }
}
