import { createClient } from "@/utils/supabase/server";

export async function editListing(
  listingData: any,
  photos: string[],
  floor_plans: string[],
  touchedFieldsRaw: string[]
) {
  const touchedFields = new Set(touchedFieldsRaw);
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) throw new Error("user not authenticated");
  if (!listingData.id) throw new Error("listing id is missing or invalid");
  
  const listingId = listingData.id;
  console.log('Listing data:', listingData);
  
  // 1. delete removed photos from storage AND database
  if (listingData.deletedPhotoPaths?.length > 0) {
    console.log('Deleting photos:', listingData.deletedPhotoPaths);
    
    // delete from storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from("media")
      .remove(listingData.deletedPhotoPaths);
    
    if (storageError) {
      console.error('Photo storage deletion error:', storageError);
      throw new Error("failed to delete photo files: " + storageError.message);
    }
    console.log('Photos deleted from storage successfully:', storageData);
    
    // delete corresponding records from database
    const photoUrls: string[] = listingData.deletedPhotoPaths.map((path: string) => 
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${path}`
    );
    
    const { error: dbError } = await supabase
      .from("photos")
      .delete()
      .in("URL", photoUrls);
    
    if (dbError) {
      console.error('Photo database deletion error:', dbError);
      throw new Error("failed to delete photo records: " + dbError.message);
    }
    console.log('Photo records deleted from database successfully');
  }
  
  // 2. delete removed floor plans from storage AND database
  if (listingData.deletedFloorPlanPaths?.length > 0) {
    console.log('Deleting floor plans:', listingData.deletedFloorPlanPaths);
    
    // delete from storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from("media")
      .remove(listingData.deletedFloorPlanPaths);
    
    if (storageError) {
      console.error('Floor plan storage deletion error:', storageError);
      throw new Error("failed to delete floor plan files: " + storageError.message);
    }
    console.log('Floor plans deleted from storage successfully:', storageData);
    
    // delete corresponding records from database
    const floorPlanUrls = listingData.deletedFloorPlanPaths.map((path: string) => 
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${path}`
    );
    
    const { error: dbError } = await supabase
      .from("floor_plans")
      .delete()
      .in("URL", floorPlanUrls);
    
    if (dbError) {
      console.error('Floor plan database deletion error:', dbError);
      throw new Error("failed to delete floor plan records: " + dbError.message);
    }
    console.log('Floor plan records deleted from database successfully');
  }
  
  // 3. update listing if fields were touched
  const filteredListingData = Object.fromEntries(
    Object.entries(listingData).filter(([key]) => touchedFields.has(key))
  );
  
  if (Object.keys(filteredListingData).length > 0) {
    console.log('Updating listing with:', filteredListingData);
    const { error } = await supabase
      .from("listings")
      .update(filteredListingData)
      .eq("id", listingId);
    
    if (error) {
      console.error('Listing update error:', error);
      throw new Error("failed to update listing: " + error.message);
    }
  }
  
  // 4. delete + re-insert photos
  console.log('Deleting existing photos from database...');
  
  if (photos.length > 0) {
    console.log('Inserting new photos:', photos);
    const { error: photoInsertError } = await supabase
      .from("photos")
      .insert(
        photos.map((URL) => ({
          listing_id: listingId,
          URL,
          user_id: user.id,
        }))
      );
    
    if (photoInsertError) {
      console.error('Photo insertion error:', photoInsertError);
      throw photoInsertError;
    }
  }
  
  // 5. delete + re-insert floor plans
  if (floor_plans.length > 0) {
    console.log('Inserting new floor plans:', floor_plans);
    const { error: floorInsertError } = await supabase
      .from("floor_plans")
      .insert(
        floor_plans.map((URL) => ({
          listing_id: listingId,
          URL,
          user_id: user.id,
        }))
      );
    
    if (floorInsertError) {
      console.error('Floor plan insertion error:', floorInsertError);
      throw floorInsertError;
    }
  }
  
  return listingId;
}