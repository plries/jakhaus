import { createClient } from "@/utils/supabase/server";

// 1. upsert the agent with brokerage info
export async function createOrUpdateAgent(agent: any, brokerage: any) {
  const supabase = await createClient();

  const agentData = {
    id: agent.id || "",
    logo_url: agent.logo || "",
    logo_dark: agent.darkLogo,
    name: agent.name,
    email: agent.email,
    phone: agent.phone,
    website: agent.website,
    instagram: agent.instagram,
    brokerage_name: brokerage.title,
    brokerage_logo: brokerage.logo || "",
    brokerage_address: brokerage.address,
  };

  const { data, error } = await supabase
    .from("agents")
    .upsert(agentData, { onConflict: "id" })
    .select("id")
    .single();

  if (error) throw error;

  return data.id;
}

// 2. create the full listing with related data
export async function createFullListing(listingData: any, photos: string[], floorPlans: string[]) {
  const supabase = await createClient();

  // 2a. create listing
  const { data, error } = await supabase
    .from("listings")
    .insert(listingData)
    .select("id")
    .single();

  if (error) throw error;

  const listingId = data.id;

  // 2b. insert photos
  if (photos?.length) {
    const photoEntries = photos.map((url) => ({ url, listing_id: listingId }));
    const { error: photoError } = await supabase.from("photos").insert(photoEntries);
    if (photoError) throw photoError;
  }

  // 2c. insert floor plans
  if (floorPlans?.length) {
    const floorPlanEntries = floorPlans.map((url) => ({ url, listing_id: listingId }));
    const { error: floorPlanError } = await supabase.from("floor_plans").insert(floorPlanEntries);
    if (floorPlanError) throw floorPlanError;
  }

  return listingId;
}