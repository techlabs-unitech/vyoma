import Link from "next/link";
import Image from "next/image";
import { services } from "../data";
import { PathwayIllustration, type PathwayKind } from "../Illustrations";
import { PageHero, List, Note } from "../components";
import { Icon } from "../Icons";
export const metadata = { title: "Services | Vyoma", description: "Vyoma offers integrated education, learning and development solutions: academic partnerships, learning pathways, emerging skills, faculty development and institutional consulting." };
const featured = [
  { id: "academic-partnerships", title: "Academic Partnerships", line: "Collaborate, co-create, co-deliver", img: "academic-partnerships", icon: "handshake", alt: "Faculty and students collaborating around a laptop" },
  { id: "ai-cybersecurity", title: "AI & Cybersecurity Programmes", line: "Build future-ready skills", img: "ai-cybersecurity", icon: "shield", alt: "A student working on a laptop with AI and security icons" },
  { id: "skillpreneur-academy", title: "Vyoma Skillpreneur Academy", line: "Practical skills, internships, entrepreneurship", img: "skillpreneur-academy", icon: "rocket", alt: "Students working on a hands-on practical project" },
  { id: "faculty", title: "Faculty Development & Training", line: "Equip, enable, empower", img: "faculty-development", icon: "users", alt: "A trainer presenting to a group of educators" },
];
const art: PathwayKind[] = ["ug", "exam", "tech", "voc", "pro", "school", "puc"];
export default function Services() {
  return (
    <main>
      <PageHero title="Services" long lead={[
        "Vyoma offers integrated education, learning and development solutions across the entire education ecosystem. We connect schools, colleges, universities, students, educators, industry partners and aspiring professionals through academic partnerships, diverse learning pathways, professional qualifications, emerging skills, vocational education, faculty development and institutional consulting.",
        "Spanning Science, Commerce, Arts and interdisciplinary learning, our approach brings together academic knowledge, practical skills, industry exposure and entrepreneurial opportunities to support individual growth, institutional excellence and workforce development.",
        "Through meaningful collaborations and innovative learning opportunities, Vyoma strives to bridge the gap between education, skills and real-world opportunities.",
      ]} />
      <section className="section svc-feature" aria-label="Core services"><div className="wrap">
        <div className="fgrid">{featured.map(f => (
          <Link key={f.id} href={`#${f.id}`} className="fcard">
            <Image src={`/images/services/${f.img}.jpg`} alt={f.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 25vw" />
            <span className="fover"><span className="fico"><Icon name={f.icon} size={22} /></span><span className="ftxt"><b>{f.title}</b><small>{f.line}</small></span></span>
          </Link>
        ))}</div>
        <p className="note fnote">Images are illustrative representations of our proposed services, not photographs of existing Vyoma facilities or programmes.</p>
      </div></section>
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? "alt" : ""}`}>{s.categories ? (
          <div className="wrap svc-cats">
            <h2>{s.title}</h2>
            <p className="body">{s.purpose}</p>
            <div className="cgrid">{s.categories.map(c => (
              <article key={c.title} className="ccard">
                <div className="cimg"><Image src={`/images/pathways/${c.image}.jpg`} alt={c.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 25vw" /><h3>{c.title}</h3></div>
                <ul className="cbody">{c.items.map(t => <li key={t}>{t}</li>)}</ul>
              </article>
            ))}</div>
            {s.note && <Note>{s.note}</Note>}
            <Link className="btn solid" href={s.href ?? "/contact"}>{s.cta}</Link>
          </div>
        ) : (
        <div className={`wrap svc ${i % 2 ? "flip" : ""}`}>
          <div className="svc-text">
          <h2>{s.title}</h2>
          {s.heading && <h3>{s.heading}</h3>}
          <p className="body">{s.purpose}</p>
          <h3>{s.scopeTitle ?? "Scope"}</h3><List items={s.scope} />
          {s.note && <Note>{s.note}</Note>}
          <Link className="btn solid" href={s.href ?? "/contact"}>{s.cta}</Link>
          </div>
          <div className="svc-art">{s.id === "education-investment"
            ? <Image src="/images/services/education-investment.jpg" alt="A modern university campus with architectural blueprints, a hard hat and a laptop showing a campus masterplan" fill sizes="(max-width: 860px) 100vw, 40vw" />
            : <PathwayIllustration kind={art[i]} />}</div>
        </div>)}</section>
      ))}
    </main>
  );
}
