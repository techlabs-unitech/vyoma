import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { NavLinks, MobileMenu } from "./Nav";
import { CONTACT } from "./enquiry-options";

export const nav = [["Home","/"],["About Us","/about"],["Services","/services"],["Learning Connect","/learning-connect"],["Talent Connect","/talent-connect"],["Mentors & Advisors","/mentors-advisors"],["Partnerships","/partnerships"],["Contact","/contact"]];

export function Header() {
  return (
    <header className="header"><div className="wrap bar">
      <Link href="/" className="brand" aria-label="Vyoma Eduventures LLP home"><span className="mark">VYOMA</span><span className="tag">Learning Beyond Boundaries</span></Link>
      <NavLinks items={nav.slice(1)} />
      <div className="actions">
        <ThemeToggle />
        <Link className="btn enquire" href="/contact">Enquire Now</Link>
        <MobileMenu items={nav} />
      </div>
    </div></header>
  );
}

export function Footer() {
  return (
    <footer className="footer"><div className="wrap foot">
      <div><strong>Vyoma Eduventures LLP</strong><br />Learning Beyond Boundaries<br /><a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a> · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
      <nav aria-label="Footer">{[...nav, ["Privacy Policy", "/privacy"]].map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
    </div></footer>
  );
}

export function PageHero({ title, lead, long }: { title: string; lead: string; long?: boolean }) {
  return <section className="page-hero"><div className="wrap"><h1>{title}</h1><p className={`lead${long ? " long" : ""}`}>{lead}</p></div></section>;
}

export function Block({ title, children, alt, narrow }: { title?: string; children: React.ReactNode; alt?: boolean; narrow?: boolean }) {
  return <section className={`section ${alt ? "alt" : ""}`}><div className={`wrap ${narrow ? "narrow" : ""}`}>{title && <h2>{title}</h2>}{children}</div></section>;
}

export const List = ({ items }: { items: string[] }) => <ul className="list">{items.map(i => <li key={i}>{i}</li>)}</ul>;
export const Note = ({ children }: { children: React.ReactNode }) => <p className="note">{children}</p>;

export function Cta({ title, text, label, href = "/contact" }: { title: string; text: string; label: string; href?: string }) {
  return <Block alt narrow><h2>{title}</h2><p className="body">{text}</p><Link className="btn solid" href={href}>{label}</Link></Block>;
}

export { default as EnquiryForm } from "./EnquiryForm";
