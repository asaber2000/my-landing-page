import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_CONVERSION_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_CONVERSION_API_KEY is missing" },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const sourceUrl =
      body.source_url ||
      request.headers.get("referer") ||
      "https://tents.baitalnokhada.com";

    const payload = {
      validate_only: false,
      events: [
        {
          id: crypto.randomUUID(),
          type: "page_viewed",
          timestamp_ms: Date.now(),
          source_url: sourceUrl,
          action_source: "web",
          data: {
            type: "contents",
          },
        },
      ],
    };

    const response = await fetch(
      "https://bzr.openai.com/v1/events?pid=FxzYhuwnHWZR3Q7TYmFfAK",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json().catch(() => ({}));
    return NextResponse.json({ success: response.ok, data: result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}