"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { audienceOptions, interestOptions, contactMethodOptions, CONTACT } from "./enquiry-options";

type Errors = Record<string, string>;

function F({ name, label, req, error, children }: { name: string; label: string; req?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label>
      <span>{label}{req && <b aria-hidden="true"> *</b>}</span>
      {children}
      {error && <small className="err" id={`err-${name}`} role="alert">{error}</small>}
    </label>
  );
}

export default function EnquiryForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [method, setMethod] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const done = useRef<HTMLDivElement>(null);
  useEffect(() => { if (status === "sent") done.current?.focus(); }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const data = { name: v("name"), audience: v("audience"), phone: v("phone"), email: v("email"), interest: v("interest"), method: v("method"), message: v("message"), consent: fd.get("consent") === "on", website: v("website") };

    const err: Errors = {};
    if (!data.name) err.name = "Please enter your name.";
    if (!data.audience) err.audience = "Please select an audience type.";
    const digits = data.phone.replace(/[\s()+-]/g, "");
    if (!digits) err.phone = "Please enter your phone or WhatsApp number.";
    else if (!/^\d{10,15}$/.test(digits)) err.phone = "Please enter a valid number (10 to 15 digits).";
    if (data.method === "Email" && !data.email) err.email = "Please enter your email address, as you chose Email.";
    else if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) err.email = "Please enter a valid email address.";
    if (!data.interest) err.interest = "Please select an area of interest.";
    if (!data.method) err.method = "Please select a preferred contact method.";
    if (!data.consent) err.consent = "Please confirm your consent so we can respond to you.";
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) { (form.elements.namedItem(first === "method" ? "method" : first) as HTMLElement | null)?.focus(); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "sent") {
    return (
      <div className="form sent" ref={done} tabIndex={-1} role="status">
        <h3>Thank you. Your enquiry has been sent.</h3>
        <p>The Vyoma team has received your details and will contact you using your preferred method.</p>
        <button className="btn" type="button" onClick={() => { setStatus("idle"); setMethod(""); }}>Send another enquiry</button>
      </div>
    );
  }

  const a = (n: string) => ({ name: n, "aria-invalid": !!errors[n] || undefined, "aria-describedby": errors[n] ? `err-${n}` : undefined });
  const select = (n: string, opts: string[], def = "", onChange?: (v: string) => void) => (
    <select {...a(n)} defaultValue={def} required onChange={onChange && (e => onChange(e.target.value))}>
      <option value="" disabled>Select one</option>
      {opts.map(o => <option key={o}>{o}</option>)}
    </select>
  );

  return (
    <form className="form" id="enquire" onSubmit={onSubmit} noValidate aria-label="Enquiry form">
      <p className="req-note"><b aria-hidden="true">*</b> Required fields</p>
      <F error={errors.name} name="name" label="Name" req><input {...a("name")} required autoComplete="name" /></F>
      <F error={errors.audience} name="audience" label="Audience type" req>{select("audience", audienceOptions)}</F>
      <F error={errors.phone} name="phone" label="Phone / WhatsApp number" req><input {...a("phone")} type="tel" inputMode="tel" required autoComplete="tel" /></F>
      <F error={errors.email} name="email" label={method === "Email" ? "Email address" : "Email address (optional)"} req={method === "Email"}><input {...a("email")} type="email" autoComplete="email" required={method === "Email"} /></F>
      <F error={errors.interest} name="interest" label="Area of interest" req>{select("interest", interestOptions, interestOptions.includes(defaultInterest) ? defaultInterest : "")}</F>
      <F error={errors.method} name="method" label="Preferred contact method" req>{select("method", contactMethodOptions, "", setMethod)}</F>
      <F error={errors.message} name="message" label="Message / requirements"><textarea name="message" rows={4} maxLength={2000} /></F>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label className="check">
          <input type="checkbox" name="consent" required aria-invalid={!!errors.consent || undefined} aria-describedby={errors.consent ? "err-consent" : undefined} />
          <span>I agree to Vyoma Eduventures LLP using these details to respond to my enquiry, as described in the <Link href="/privacy">Privacy Policy</Link>.</span>
        </label>
        {errors.consent && <small className="err" id="err-consent" role="alert">{errors.consent}</small>}
      </div>
      {status === "error" && <p className="err banner" role="alert">We could not send your enquiry just now. Please try again, or contact us on <a href={CONTACT.whatsapp}>WhatsApp</a> or at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>}
      <button className="btn solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Enquiry"}</button>
    </form>
  );
}
