import { NextResponse } from "next/server";
import { deleteAgent } from "@/lib/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { agentId } = body;

    await deleteAgent(agentId);

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("error deleting agent:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "failed to delete agent" }, { status: 500 });
  }
}
