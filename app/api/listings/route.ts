import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createFullListing, createOrUpdateAgent } from "@/lib/createListing";

export async function POST(req: Request) {
  const body = await req.json();
  const supabase = createClient();

  try {
    const { agent, brokerage, dataToSubmit, galleryUrls, floorPlanUrls } = body;

    const agentId = await createOrUpdateAgent(agent, brokerage);
    await createFullListing({ ...dataToSubmit, agent_id: agentId }, galleryUrls, floorPlanUrls);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json({ error: "Failed to create listing" }, { status: 500 });
  }
}
