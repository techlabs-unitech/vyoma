"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavLinks({ items }: { items: string[][] }) {
  const path = usePathname();
  return (
    <nav aria-label="Primary" className="nav">
      {items.map(([l, h]) => <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>{l}</Link>)}
    </nav>
  );
}

export function MobileMenu({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  return (
    <>
      <button className={`burger ${open ? "open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <nav aria-label="Mobile">
            {items.map(([l, h]) => <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>{l}</Link>)}
            <Link className="btn solid" href="/contact">Enquire Now</Link>
          </nav>
        </div>
      )}
    </>
  );
}
