import { createClient } from "@/utils/supabase/server";

// 1. upsert the agent with brokerage info
export async function createAgent(agent: any) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  const agentData = Object.fromEntries(
    Object.entries({
      id: agent.id,
      LOGO_URL: agent.LOGO_URL,
      LOGO_DARK: agent.LOGO_DARK,
      SUBTITLE: agent.SUBTITLE,
      NAME: agent.NAME,
      EMAIL: agent.EMAIL,
      PHONE: agent.PHONE,
      WEBSITE: agent.WEBSITE,
      INSTAGRAM: agent.INSTAGRAM,
      BROKERAGE_NAME: agent.BROKERAGE_NAME,
      BROKERAGE_LOGO: agent.BROKERAGE_LOGO,
      BROKERAGE_ADDRESS: agent.BROKERAGE_ADDRESS,
      user_id: user?.id
    }).filter(([_, v]) => v !== null && v !== undefined && v !== "")
  );

  const { data, error } = await supabase
    .from("agents")
    .upsert(agentData, { onConflict: "id" })
    .select("id")
    .single();

  if (error) throw error;

  return data.id;
}

// 2. create the full listing with related data
export async function createFullListing(listingData: any, photos: string[], floor_plans: string[]) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.id) throw new Error("User not authenticated");

  // 2a. create listing
  const { data, error } = await supabase
    .from("listings")
    .insert(listingData)
    .select("id")
    .single();

  if (error) throw error;

  const listingId = data.id;

  // 2b. insert photos
  const { error: photoError } = await supabase
    .from("photos")
    .insert([
      ...photos.map((URL) => ({
        listing_id: listingId,
        URL,
        user_id: user?.id
      }))
    ]);

  if (photoError) throw photoError;

  // 2c. insert floor plans
  const { error: floorPlanError } = await supabase
    .from("floor_plans")
    .insert([
      ...floor_plans.map((URL) => ({
        listing_id: listingId,
        URL,
        user_id: user?.id
      }))
    ]);
    
  if (floorPlanError) throw floorPlanError;

  return listingId;
}