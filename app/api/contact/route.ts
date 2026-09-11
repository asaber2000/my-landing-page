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

    // تجهيز رقم العميل للواتساب بدقة
    let cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.startsWith("00")) {
      cleanPhone = cleanPhone.substring(2);
    }
    if (cleanPhone.startsWith("05")) {
      cleanPhone = "971" + cleanPhone.substring(1);
    }

    // إرسال الإيميل عبر Resend
    const { data, error: resendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["marketing01@baitalnokhada.com"],
      replyTo: email || undefined,
      subject: `New Lead Inquiry: ${name} - Bait Al Nokhada`,
      html: `
        <div style="background-color: #070b14; padding: 30px 15px; font-family: Arial, sans-serif;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; background-color: #0f172a; border-radius: 16px; border: 1px solid #1e293b; overflow: hidden;">
            <tr>
              <td style="padding: 24px; background-color: #111827; border-bottom: 2px solid #D4AF37;">
                <span style="color: #D4AF37; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 6px;">
                  NEW LANDING PAGE INQUIRY
                </span>
                <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold;">
                  Bait Al Nokhada Tents
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                  <tr>
                    <td style="padding-bottom: 14px; width: 120px; font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase;">
                      Client Name:
                    </td>
                    <td style="padding-bottom: 14px; font-size: 15px; font-weight: bold; color: #ffffff;">
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 14px; font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase;">
                      Phone Number:
                    </td>
                    <td style="padding-bottom: 14px; font-size: 15px; font-weight: bold; color: #38bdf8;">
                      <a href="tel:${phone}" style="color: #38bdf8; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 14px; font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase;">
                      Email:
                    </td>
                    <td style="padding-bottom: 14px; font-size: 14px; color: #cbd5e1;">
                      ${email ? `<a href="mailto:${email}" style="color: #cbd5e1; text-decoration: none;">${email}</a>` : "Not Provided"}
                    </td>
                  </tr>
                </table>

                <div style="background-color: #1e293b; border-radius: 10px; padding: 18px; border-left: 4px solid #D4AF37; margin-bottom: 24px;">
                  <span style="font-size: 11px; font-weight: bold; color: #D4AF37; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                    Project Scope & Requirements:
                  </span>
                  <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #f1f5f9; white-space: pre-line;">
                    ${message || "No specific details provided."}
                  </p>
                </div>

                <div style="text-align: center; margin-top: 10px;">
                  <a href="https://wa.me/${cleanPhone}" target="_blank" style="background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 13px; padding: 12px 28px; border-radius: 8px; display: inline-block;">
                    Chat with Client on WhatsApp
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px; background-color: #070b14; text-align: center; border-top: 1px solid #1e293b;">
                <p style="margin: 0; font-size: 11px; color: #64748b;">
                  Automated Lead Notification • Bait Al Nokhada Tents Factory
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend API Rejection Error:", resendError);
    }

    // تسجيل البيانات في Google Sheet
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      }).catch((err) => console.error("Sheets log error:", err));
    }

    if (resendError) {
      return NextResponse.json({ success: false, error: resendError }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected Route Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}