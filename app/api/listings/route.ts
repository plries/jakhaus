import { NextResponse } from "next/server";
import { createFullListing, createAgent } from "@/lib/createListing";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agent, dataToSubmit, photos, floor_plans } = body;

    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) throw new Error("User not authenticated");

    const agentId = await createAgent(agent);
    await createFullListing(
      { 
        ...dataToSubmit,
        agent_id: agentId,
        user_id: user?.id
      },
      photos,
      floor_plans,
    );

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("Error creating listing:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "Failed to create listing" }, { status: 500 });
  }
}
