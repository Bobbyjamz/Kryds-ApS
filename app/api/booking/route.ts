import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel" }, { status: 400 });
  }

  // Honeypot udfyldt = bot. Svar OK så den ikke prøver igen.
  if (field(body.website, 200)) return NextResponse.json({ ok: true });

  const name = field(body.name, 120);
  const phone = field(body.phone, 40);
  const email = field(body.email, 160);
  const occasion = field(body.occasion, 80);
  const date = field(body.date, 20);
  const message = field(body.message, 2000);

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Navn, telefon og e-mail skal udfyldes" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ugyldig e-mailadresse" }, { status: 400 });
  }
  if (body.acceptedPrivacy !== true) {
    return NextResponse.json({ error: "Privatlivspolitikken skal accepteres" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    // I produktion må en booking aldrig forsvinde i stilhed — vis fejl, så kunden ringer i stedet.
    if (process.env.NODE_ENV === "production") {
      console.error("[booking] RESEND_API_KEY mangler — booking kunne ikke sendes");
      return NextResponse.json({ error: "Booking er ikke sat op endnu" }, { status: 503 });
    }
    console.warn("[booking] RESEND_API_KEY ikke sat — booking modtaget (udvikling):", { name, phone, email, occasion, date });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM || `${site.name} <${site.email}>`;
  const to = process.env.RESEND_TO || site.email;

  const rows: [string, string][] = [
    ["Navn", name],
    ["Telefon", phone],
    ["E-mail", email],
    ["Anledning", occasion || "–"],
    ["Ønsket dato", date || "–"],
  ];
  const sentAt = new Date().toLocaleString("da-DK", { timeZone: "Europe/Copenhagen" });

  const html = `<!DOCTYPE html>
<html lang="da">
<body style="margin:0;padding:0;background:#f2f0ec;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f0ec;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#17181D;max-width:600px;width:100%;">
        <tr><td style="padding:28px 32px;border-bottom:1px solid #C8A45A;text-align:center;">
          <p style="margin:0;font-size:24px;letter-spacing:0.3em;color:#F3EEE4;"><span style="color:#C8A45A;">✕</span> ATELIER</p>
        </td></tr>
        <tr><td style="padding:28px 32px 8px;">
          <p style="margin:0;font-size:22px;color:#F3EEE4;">Ny booking-forespørgsel</p>
          <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#9A968C;">${escapeHtml(sentAt)}</p>
        </td></tr>
        <tr><td style="padding:8px 32px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows
              .map(
                ([label, value]) => `<tr><td style="padding:12px 0;border-bottom:1px solid rgba(243,238,228,0.08);">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#C8A45A;">${label}</p>
              <p style="margin:4px 0 0;font-size:16px;color:#F3EEE4;">${escapeHtml(value)}</p>
            </td></tr>`
              )
              .join("")}
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 32px;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#C8A45A;">Besked</p>
          <p style="margin:8px 0 0;font-size:15px;line-height:1.6;color:#F3EEE4;">${escapeHtml(message || "–").replace(/\n/g, "<br>")}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Ny booking: ${occasion || "Opmåling"} — ${name}`,
      html,
    });
    if (error) {
      console.error("[booking] Resend-fejl:", error);
      return NextResponse.json({ error: "Kunne ikke sende" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[booking] Uventet fejl:", err);
    return NextResponse.json({ error: "Kunne ikke sende" }, { status: 502 });
  }
}
