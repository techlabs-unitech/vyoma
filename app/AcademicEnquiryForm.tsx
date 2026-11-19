"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { institutionTypeOptions, partnershipAreaOptions, ACADEMIC_WHATSAPP, CONTACT } from "./enquiry-options";

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

export default function AcademicEnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const done = useRef<HTMLDivElement>(null);
  useEffect(() => { if (status === "sent") done.current?.focus(); }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const data = { name: v("name"), institution: v("institution"), designation: v("designation"), email: v("email"), phone: v("phone"), type: v("type"), area: v("area"), message: v("message"), website: v("website") };

    const err: Errors = {};
    if (!data.name) err.name = "Please enter your name.";
    if (!data.institution) err.institution = "Please enter your institution name.";
    if (!data.designation) err.designation = "Please enter your designation.";
    if (!data.email) err.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) err.email = "Please enter a valid email address.";
    const digits = data.phone.replace(/[\s()+-]/g, "");
    if (!digits) err.phone = "Please enter your mobile number.";
    else if (!/^\d{10,15}$/.test(digits)) err.phone = "Please enter a valid number (10 to 15 digits).";
    if (!data.type) err.type = "Please select the type of institution.";
    if (!data.area) err.area = "Please select an area of partnership interest.";
    setErrors(err);
    const first = Object.keys(err)[0];
    if (first) { (form.elements.namedItem(first) as HTMLElement | null)?.focus(); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/academic-enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "sent") {
    return (
      <div className="form sent" ref={done} tabIndex={-1} role="status">
        <h3>Thank you. Your enquiry has been sent.</h3>
        <p>The Vyoma team has received your details and will connect with you to explore suitable opportunities.</p>
        <a className="btn wa" href={ACADEMIC_WHATSAPP} target="_blank" rel="noopener noreferrer">Connect with Us on WhatsApp</a>
      </div>
    );
  }

  const a = (n: string) => ({ name: n, "aria-invalid": !!errors[n] || undefined, "aria-describedby": errors[n] ? `err-${n}` : undefined });
  const select = (n: string, opts: string[]) => (
    <select {...a(n)} defaultValue="" required>
      <option value="" disabled>Select one</option>
      {opts.map(o => <option key={o}>{o}</option>)}
    </select>
  );

  return (
    <form className="form" id="academic-enquiry" onSubmit={onSubmit} noValidate aria-label="Academic Partnership Enquiry form">
      <p className="req-note"><b aria-hidden="true">*</b> Required fields</p>
      <F error={errors.name} name="name" label="Name" req><input {...a("name")} required autoComplete="name" /></F>
      <F error={errors.institution} name="institution" label="Institution name" req><input {...a("institution")} required autoComplete="organization" /></F>
      <F error={errors.designation} name="designation" label="Designation" req><input {...a("designation")} required autoComplete="organization-title" /></F>
      <F error={errors.email} name="email" label="Email address" req><input {...a("email")} type="email" required autoComplete="email" /></F>
      <F error={errors.phone} name="phone" label="Mobile number" req><input {...a("phone")} type="tel" inputMode="tel" required autoComplete="tel" /></F>
      <F error={errors.type} name="type" label="Type of institution" req>{select("type", institutionTypeOptions)}</F>
      <F error={errors.area} name="area" label="Area of partnership interest" req>{select("area", partnershipAreaOptions)}</F>
      <F name="message" label="Brief description of your requirement"><textarea name="message" rows={4} maxLength={2000} /></F>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="req-note">By submitting, you agree to Vyoma using these details to respond to your enquiry, as described in the <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "error" && <p className="err banner" role="alert">We could not send your enquiry just now. Please try again, or contact us on <a href={ACADEMIC_WHATSAPP}>WhatsApp</a> or at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>}
      <div className="enq-actions">
        <button className="btn solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit Enquiry"}</button>
        <a className="btn wa" href={ACADEMIC_WHATSAPP} target="_blank" rel="noopener noreferrer">Connect with Us on WhatsApp</a>
      </div>
    </form>
  );
}
