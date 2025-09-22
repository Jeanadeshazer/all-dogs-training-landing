import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const zapierRes = await axios.post(
      "https://hooks.zapier.com/hooks/catch/24703559/u1283ge/",
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    return NextResponse.json({ success: true, data: zapierRes.data });
  } catch (err: any) {
    console.error("Zapier error:", err.message);
    return NextResponse.json({ error: "Failed to send to Zapier" }, { status: 500 });
  }
}