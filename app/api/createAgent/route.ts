import { NextResponse } from "next/server";
import { createAgent } from "@/lib/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agent } = body;

    const supabase = await createClient()
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) throw new Error("user not authenticated");

    await createAgent({
      ...agent,
      user_id: user?.id
    });

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("error creating agent:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "failed to create agent" }, { status: 500 });
  }
}
