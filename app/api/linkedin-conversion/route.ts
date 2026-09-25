import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown> = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const token = process.env.LINKEDIN_CONVERSIONS_TOKEN;
    const conversionId =
      process.env.LINKEDIN_CONVERSION_ID || "urn:lla:llaPartnerConversion:30872402";

    if (!token) {
      return NextResponse.json(
        { error: "Missing LinkedIn API Token in environment variables" },
        { status: 500 }
      );
    }

    // جلب معرف كوكيز لينكد إن من المتصفح إن وجد
    const liFatId = req.cookies.get("li_fat_id")?.value;

    const userIds = Array.isArray(body.userIds) && body.userIds.length > 0
      ? body.userIds
      : liFatId
      ? [{ idType: "LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID", idValue: liFatId }]
      : [
          {
            idType: "SHA256_EMAIL",
            idValue: "0000000000000000000000000000000000000000000000000000000000000000",
          },
        ];

    const payload = {
      conversion: conversionId,
      conversionHappenedAt: Date.now(),
      conversionValue: {
        currencyCode: (body.currencyCode as string) || "AED",
        amount: (body.amount as string) || "0.0",
      },
      user: {
        userIds: userIds,
      },
      eventId: (body.eventId as string) || `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    };

    const response = await fetch("https://api.linkedin.com/rest/conversionEvents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "LinkedIn-Version": "202601",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}