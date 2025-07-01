import { NextResponse } from "next/server";
import { editAgent } from "@/lib/editAgent";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agent, touchedFields } = body;

    const touchedArray = Array.isArray(touchedFields)
      ? touchedFields
      : Array.from(touchedFields);

    await editAgent(agent, touchedArray);

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("Error editing agent:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "Failed to edit agent" }, { status: 500 });
  }
}
