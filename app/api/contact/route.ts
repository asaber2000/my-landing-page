import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // التحقق من الحقول الأساسية
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone are required" },
        { status: 400 }
      );
    }

    // إرسال الإيميل
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // افتراضي للتجارب، ويمكن تغييره لإيميل الدومين بعد تفعيله
      to: ["marketing01@baitalnokhada.com"], // ضع هنا إيميلك الشخصي أو إيميل العمل للتجربة
      replyTo: email || undefined,
      subject: `New Lead Inquiry: ${name} - Bait Al Nokhada`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
            <h2 style="color: #070B14; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; margin-top: 0;">
              New Landing Page Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #64748b;">Full Name:</td>
                <td style="padding: 10px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
                <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
                <td style="padding: 10px 0; color: #0f172a;">${email || "Not provided"}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569;">Project Scope & Requirements:</p>
              <p style="margin: 0; line-height: 1.6; color: #1e293b; white-space: pre-line;">${message || "No specific details provided."}</p>
            </div>
            
            <p style="margin-top: 24px; font-size: 11px; color: #94a3b8; text-align: center;">
              Sent automatically from Bait Al Nokhada Landing Page System
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}