import Link from "next/link";
import { services } from "../data";
import { PathwayIllustration, type PathwayKind } from "../Illustrations";
import { Block, PageHero, List, Note } from "../components";
export const metadata = { title: "Services | Vyoma Eduventures LLP" };
const art: PathwayKind[] = ["ug", "exam", "tech", "voc", "pro", "school", "puc"];
export default function Services() {
  return (
    <main>
      <PageHero title="Services" long lead="“Vyoma offers integrated education solutions across academic partnerships, professional learning, skill development, institutional consulting, faculty development and education projects. We collaborate with educational institutions, learners and industry partners to create opportunities for academic growth, professional advancement and institutional development.”" />
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? "alt" : ""}`}><div className={`wrap svc ${i % 2 ? "flip" : ""}`}>
          <div className="svc-text">
          <h2>{s.title}</h2>
          {s.heading && <h3>{s.heading}</h3>}
          <p className="body">{s.purpose}</p>
          <h3>{s.scopeTitle ?? "Scope"}</h3><List items={s.scope} />
          {s.note && <Note>{s.note}</Note>}
          <Link className="btn solid" href={s.href ?? "/contact"}>{s.cta}</Link>
          </div>
          <div className="svc-art"><PathwayIllustration kind={art[i]} /></div>
        </div></section>
      ))}
    </main>
  );
}
