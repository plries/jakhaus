import { NextResponse } from "next/server";
import { editListing, editAgent } from "@/lib/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agent, dataToSubmit, photos, floor_plans, touchedFields } = body;

    const touchedArray = Array.isArray(touchedFields)
      ? touchedFields
      : Array.from(touchedFields);

    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) throw new Error("user not authenticated");

    const agentId = await editAgent(agent, touchedFields);
    await editListing(
      { 
        ...dataToSubmit,
        agent_id: agentId,
        user_id: user?.id,
      },
      photos,
      floor_plans,
      touchedArray,
    );

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("error creating listing:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "failed to create listing" }, { status: 500 });
  }
}
