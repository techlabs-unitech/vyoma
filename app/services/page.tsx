import Link from "next/link";
import { services } from "../data";
import { Block, PageHero, List, Note } from "../components";
export const metadata = { title: "Services | Vyoma Eduventures LLP" };
export default function Services() {
  return (
    <main>
      <PageHero title="Services" long lead="Vyoma Eduventures LLP offers integrated education solutions spanning academic partnerships, professional learning, skill development, institutional consulting, faculty development and education projects. We work with educational institutions, learners and industry partners to create meaningful opportunities for academic growth, professional development and institutional advancement." />
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? "alt" : ""}`}><div className="wrap narrow">
          <h2>{s.title}</h2>
          {s.heading && <h3>{s.heading}</h3>}
          <p className="body">{s.purpose}</p>
          <h3>{s.scopeTitle ?? "Scope"}</h3><List items={s.scope} />
          {s.note && <Note>{s.note}</Note>}
          <Link className="btn solid" href={s.href ?? "/contact"}>{s.cta}</Link>
        </div></section>
      ))}
    </main>
  );
}
