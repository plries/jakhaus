import { NextResponse } from "next/server";
import { createAgent } from "@/lib/createListing";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agent} = body;

    await createAgent(agent);

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
