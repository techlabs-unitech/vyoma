import { NextResponse } from "next/server";
import { institutionTypeOptions, partnershipAreaOptions } from "../../enquiry-options";

export const runtime = "nodejs";
const esc = (s: string) => s.replace(/[&<>"']/g, c => (({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }) as Record<string, string>)[c]);
const bad = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try { d = await req.json(); } catch { return bad("Invalid request."); }
  const s = (k: string, max = 200) => String(d[k] ?? "").trim().slice(0, max);

  if (s("website")) return NextResponse.json({ ok: true }); // honeypot: silently accept bots
  const name = s("name"), institution = s("institution"), designation = s("designation"), email = s("email"), phone = s("phone", 30), type = s("type"), area = s("area"), message = s("message", 2000);
  if (!name || !institution || !designation || !email || !institutionTypeOptions.includes(type) || !partnershipAreaOptions.includes(area)) return bad("Please complete all required fields.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email address.");
  if (!/^\d{10,15}$/.test(phone.replace(/[\s()+-]/g, ""))) return bad("Invalid mobile number.");

  const key = process.env.RESEND_API_KEY;
  if (!key) return bad("Enquiry delivery is not configured.", 503);

  const rows: [string, string][] = [["Name", name], ["Institution name", institution], ["Designation", designation], ["Email", email], ["Mobile number", phone], ["Type of institution", type], ["Area of partnership interest", area], ["Requirement", message || "Not provided"]];
  const html = `<h2>New Academic Partnership Enquiry (Vyoma website)</h2><table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM || "Vyoma Website <onboarding@resend.dev>",
      // Delivered to the designated address set in ENQUIRY_TO (same as the main enquiry form).
      to: [process.env.ENQUIRY_TO || "Raj@vyomaeduventures.com"],
      reply_to: email,
      subject: `Academic Partnership Enquiry: ${institution} (${type})`,
      html, text,
    }),
  });
  if (!res.ok) return bad("Could not deliver the enquiry.", 502);
  return NextResponse.json({ ok: true });
}
