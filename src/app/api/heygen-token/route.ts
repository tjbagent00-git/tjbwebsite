import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "HeyGen not configured" }, { status: 500 });
  }

  const response = await fetch(
    "https://api.heygen.com/v1/streaming.create_token",
    {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to get HeyGen token" }, { status: 502 });
  }

  const data = await response.json();
  return NextResponse.json({ token: data.data?.token });
}
