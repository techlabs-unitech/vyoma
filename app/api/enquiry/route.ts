import { NextResponse } from "next/server";
import { audienceOptions, interestOptions, contactMethodOptions } from "../../enquiry-options";

export const runtime = "nodejs";
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const bad = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try { d = await req.json(); } catch { return bad("Invalid request."); }
  const s = (k: string, max = 200) => String(d[k] ?? "").trim().slice(0, max);

  if (s("website")) return NextResponse.json({ ok: true }); // honeypot: silently accept bots
  const name = s("name"), audience = s("audience"), phone = s("phone", 30), email = s("email"), interest = s("interest"), method = s("method"), message = s("message", 2000);
  if (!name || !audienceOptions.includes(audience) || !interestOptions.includes(interest) || !contactMethodOptions.includes(method)) return bad("Please complete all required fields.");
  if (!/^\d{10,15}$/.test(phone.replace(/[\s()+-]/g, ""))) return bad("Invalid phone number.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email address.");
  if (method === "Email" && !email) return bad("Email is required when Email is the preferred contact method.");
  if (d.consent !== true) return bad("Consent is required.");

  const key = process.env.RESEND_API_KEY;
  if (!key) return bad("Enquiry delivery is not configured.", 503);

  const rows: [string, string][] = [["Name", name], ["Audience type", audience], ["Phone / WhatsApp", phone], ["Email", email || "Not provided"], ["Area of interest", interest], ["Preferred contact method", method], ["Message", message || "None"], ["Privacy consent", "Given"]];
  const html = `<h2>New enquiry from the Vyoma website</h2><table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM || "Vyoma Website <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO || "Raj@vyomaeduventures.com"],
      reply_to: email || undefined,
      subject: `Website enquiry: ${interest} (${audience})`,
      html, text,
    }),
  });
  if (!res.ok) return bad("Could not deliver the enquiry.", 502);
  return NextResponse.json({ ok: true });
}
