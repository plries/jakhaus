import { NextResponse } from "next/server";
import { deleteListing } from "@/lib/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No body provided" }, { status: 400 });
  }

  try {
    const { listingId } = body;

    await deleteListing(listingId);

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("error deleting listing:", {
      message: error?.message,
      stack: error?.stack,
      cause: error?.cause,
      full: error
    });
    return NextResponse.json({ error: "failed to delete agent" }, { status: 500 });
  }
}
